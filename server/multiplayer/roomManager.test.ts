import assert from 'node:assert/strict';
import test from 'node:test';
import type { PublicRoomState, ServerWsMessage } from '../../src/types/multiplayer.ts';
import {
  BUZZ_PENALTY_POINTS,
  BUZZ_WINDOW_DURATION_MS,
  RACE_ROUND_DURATION_MS,
  RoomManager,
  SYNC_STEP_DURATION_MS,
} from './roomManager.ts';
import type { RoomTrackResolver } from './trackResolver.ts';

function createStubResolver(trackId = 101): RoomTrackResolver {
  let seq = 0;
  return async () => {
    seq += 1;
    return {
      previewUrl: `https://audio-ssl.itunes.apple.com/fake-${seq}.m4a`,
      track: {
        id: trackId + seq - 1,
        title: `Kesariya ${seq}`,
        trackName: `Kesariya ${seq} (From "Brahmastra")`,
        artistName: 'Arijit Singh',
        albumName: 'Brahmastra',
        artworkUrl: 'https://example.com/art.jpg',
      },
    };
  };
}

function createHarness(trackResolver = createStubResolver(), nowFn = () => 1_000_000) {
  const broadcasts: Array<{ code: string; state: PublicRoomState; recipients: string[] }> = [];
  const directMessages = new Map<string, ServerWsMessage[]>();

  const manager = new RoomManager({
    nowFn,
    trackResolver,
    onRoomUpdate: (code, state, recipients) => {
      broadcasts.push({ code, state, recipients });
    },
    onPlayerMessage: (playerId, msg) => {
      const list = directMessages.get(playerId) ?? [];
      list.push(msg);
      directMessages.set(playerId, list);
    },
  });

  const lastMessage = (playerId: string) => {
    const list = directMessages.get(playerId) ?? [];
    return list[list.length - 1];
  };

  return { manager, broadcasts, directMessages, lastMessage };
}

test('Room lifecycle: create, join validation, reconnect token, and host migration', () => {
  const { manager, lastMessage } = createHarness();
  const created = manager.createRoom('p1', 'Yash', {
    mode: 'classic-sync',
    packId: 'all-india',
    packName: 'All India Mix',
    roundCount: 5,
  });
  assert.ok(created);
  assert.equal(created.players.length, 1);
  assert.equal(created.players[0].isHost, true);

  const p1Session = lastMessage('p1');
  assert.equal(p1Session?.type, 'session_assigned');
  const p1Token = p1Session.type === 'session_assigned' ? p1Session.reconnectToken : '';

  // Duplicate nickname rejected
  const dup = manager.joinRoom('p2', created.code, 'yash');
  assert.equal(dup, null);
  assert.equal(lastMessage('p2')?.type, 'error');

  // Valid second player joins
  const joined = manager.joinRoom('p2', created.code, 'Aman');
  assert.ok(joined);
  assert.equal(joined.players.length, 2);

  // Host leaves -> Aman becomes host
  manager.leaveRoom('p1');
  const afterLeave = manager.getPublicRoomState(created.code);
  assert.ok(afterLeave);
  assert.equal(afterLeave.players.length, 1);
  assert.equal(afterLeave.players[0].name, 'Aman');
  assert.equal(afterLeave.players[0].isHost, true);

  // Token is gone because leaving in lobby removes the player; joining cleanly works
  const rejoined = manager.joinRoom('p1-new', created.code, 'Yash', p1Token);
  assert.ok(rejoined);
  assert.equal(rejoined.players.length, 2);

  manager.destroyRoom(created.code);
});

test('Anti-spoiler & classic-sync flow: hidden target during play, early step/round advance, reconnect preserves score', async () => {
  let clock = 10_000;
  const { manager, lastMessage } = createHarness(createStubResolver(500), () => clock);

  const room = manager.createRoom('host', 'Yash', {
    mode: 'classic-sync',
    packId: 'all-india',
    packName: 'All India Mix',
    roundCount: 2,
  });
  assert.ok(room);
  manager.joinRoom('guest', room.code, 'Riya');
  const guestSession = lastMessage('guest');
  const guestToken = guestSession?.type === 'session_assigned' ? guestSession.reconnectToken : '';

  await manager.startMatch('host');
  const loadingState = manager.getPublicRoomState(room.code);
  assert.equal(loadingState?.phase, 'loading-round');
  assert.equal(loadingState?.revealedTrack, null);
  assert.ok(loadingState?.audioUrl?.includes('/api/rooms/'));

  manager.markRoundReady('host', 0);
  manager.markRoundReady('guest', 0);

  const playState = manager.getPublicRoomState(room.code);
  assert.equal(playState?.phase, 'playing');
  assert.equal(playState?.stepIndex, 0);
  assert.equal(playState?.revealedTrack, null);

  // Mid-round join blocked without reconnect token
  assert.equal(manager.joinRoom('intruder', room.code, 'Eve'), null);

  // Host gets artist-match on step 0, guest skips step 0 -> early advance to step 1!
  manager.submitGuess('host', 0, {
    id: 999,
    title: 'Tum Hi Ho',
    artistName: 'Arijit Singh',
  });
  const hostMsg = lastMessage('host');
  assert.equal(hostMsg?.type, 'guess_feedback');
  if (hostMsg?.type === 'guess_feedback') {
    assert.equal(hostMsg.status, 'artist-match');
  }

  manager.playerSkip('guest', 0);
  const step1State = manager.getPublicRoomState(room.code);
  assert.equal(step1State?.stepIndex, 1);

  // Host solves at step 1, then guest solves -> enters round-reveal with track revealed
  clock += 3_000;
  manager.submitGuess('host', 0, { id: 500, title: 'Kesariya 1', artistName: 'Arijit Singh' });
  manager.submitGuess('guest', 0, { id: 500, title: 'Kesariya 1', artistName: 'Arijit Singh' });

  const revealState = manager.getPublicRoomState(room.code);
  assert.equal(revealState?.phase, 'round-reveal');
  assert.equal(revealState?.revealedTrack?.id, 500);

  // Guest disconnects & reconnects mid-match with token -> retains score
  const guestBeforeScore = revealState?.players.find((p) => p.name === 'Riya')?.score ?? 0;
  assert.ok(guestBeforeScore >= 800);
  manager.handleDisconnect('guest');
  const reconnected = manager.joinRoom('guest-ws-2', room.code, 'Riya', guestToken);
  assert.ok(reconnected);
  assert.equal(reconnected.players.find((p) => p.name === 'Riya')?.score, guestBeforeScore);

  manager.destroyRoom(room.code);
});

test('Speed-race flow: independent skips advance per-player attemptIndex and ends early when all finish', async () => {
  let clock = 20_000;
  const { manager } = createHarness(createStubResolver(700), () => clock);

  const room = manager.createRoom('host', 'Host', {
    mode: 'speed-race',
    packId: 'all-india',
    packName: 'All India Mix',
    roundCount: 1,
  });
  assert.ok(room);
  manager.joinRoom('p2', room.code, 'Player2');

  await manager.startMatch('host');
  manager.markRoundReady('host', 0);
  manager.markRoundReady('p2', 0);

  // Host skips 2 times -> attemptIndex 2 (3rd box = 650 base)
  manager.playerSkip('host', 0);
  manager.playerSkip('host', 0);

  const midState = manager.getPublicRoomState(room.code);
  assert.equal(midState?.players.find((p) => p.id === 'host')?.attemptIndex, 2);
  assert.equal(midState?.players.find((p) => p.id === 'p2')?.attemptIndex, 0);

  // Host solves, Player2 skips through remaining 6 attempts -> immediate round-reveal
  clock += 5_000;
  manager.submitGuess('host', 0, { id: 700, title: 'Kesariya 1', artistName: 'Arijit Singh' });
  for (let i = 0; i < 6; i += 1) {
    manager.playerSkip('p2', 0);
  }

  const revealed = manager.getPublicRoomState(room.code);
  assert.equal(revealed?.phase, 'round-reveal');
  const hostScore = revealed?.players.find((p) => p.id === 'host')?.score ?? 0;
  assert.ok(hostScore > 650);

  // Host advances final reveal -> finished
  manager.nextRound('host');
  assert.equal(manager.getPublicRoomState(room.code)?.phase, 'finished');

  manager.destroyRoom(room.code);
});

test('Buzz-in flow: exclusive buzz lock, negative penalty + step cooldown on miss, and immediate win on correct buzz', async () => {
  assert.equal(SYNC_STEP_DURATION_MS, 60_000);
  assert.equal(RACE_ROUND_DURATION_MS, 60_000);
  assert.equal(BUZZ_WINDOW_DURATION_MS, 40_000);

  const { manager, lastMessage } = createHarness(createStubResolver(900), () => 50_000);

  const room = manager.createRoom('p1', 'One', {
    mode: 'buzz-in',
    packId: 'all-india',
    packName: 'All India Mix',
    roundCount: 2,
  });
  assert.ok(room);
  manager.joinRoom('p2', room.code, 'Two');

  await manager.startMatch('p1');
  manager.markRoundReady('p1', 0);
  manager.markRoundReady('p2', 0);

  // p1 buzzes first, p2 cannot steal
  manager.buzzIn('p1', 0);
  manager.buzzIn('p2', 0);
  const buzzState = manager.getPublicRoomState(room.code);
  assert.equal(buzzState?.phase, 'buzz-window');
  assert.equal(buzzState?.buzzedPlayerId, 'p1');
  assert.equal(buzzState?.phaseEndsAt, 50_000 + BUZZ_WINDOW_DURATION_MS);

  // p1 submits wrong guess -> score drops below zero (-250), step-locked until next snippet
  manager.submitGuess('p1', 0, { id: 1, title: 'Wrong', artistName: 'Nobody' });
  assert.equal(lastMessage('p1')?.type, 'guess_feedback');
  const resumed = manager.getPublicRoomState(room.code);
  assert.equal(resumed?.phase, 'playing');
  assert.equal(resumed?.buzzedPlayerId, null);
  assert.equal(resumed?.players.find((p) => p.id === 'p1')?.roundStatus, 'locked-out');
  assert.equal(resumed?.players.find((p) => p.id === 'p1')?.score, -BUZZ_PENALTY_POINTS);

  // p2 buzzes and wins step 0 -> +1000
  manager.buzzIn('p2', 0);
  manager.submitGuess('p2', 0, { id: 900, title: 'Kesariya 1', artistName: 'Arijit Singh' });
  const won = manager.getPublicRoomState(room.code);
  assert.equal(won?.phase, 'round-reveal');
  assert.equal(won?.players.find((p) => p.id === 'p2')?.score, 1000);

  // Round 2: p2 buzzes wrong -> loses BUZZ_PENALTY_POINTS (250) -> 750, and p1 votes skip -> advances to step 1 and unlocks p2!
  manager.nextRound('p1');
  await new Promise((r) => setTimeout(r, 10));
  manager.markRoundReady('p1', 1);
  manager.markRoundReady('p2', 1);
  manager.buzzIn('p2', 1);
  manager.submitGuess('p2', 1, { id: 2, title: 'Wrong', artistName: 'Nobody' });
  const afterPenalty = manager.getPublicRoomState(room.code);
  assert.equal(afterPenalty?.players.find((p) => p.id === 'p2')?.score, 1000 - BUZZ_PENALTY_POINTS);
  assert.equal(afterPenalty?.players.find((p) => p.id === 'p2')?.roundStatus, 'locked-out');

  // Collective skip: p1 votes skip on step 0; since p2 already acted (missed buzz), advances immediately to step 1 & unlocks p2!
  manager.playerSkip('p1', 1);
  const step1Buzz = manager.getPublicRoomState(room.code);
  assert.equal(step1Buzz?.phase, 'playing');
  assert.equal(step1Buzz?.stepIndex, 1);
  assert.equal(step1Buzz?.players.find((p) => p.id === 'p2')?.roundStatus, 'guessing');

  // p2 can now buzz again on step 1 and solve (+800)
  manager.buzzIn('p2', 1);
  manager.submitGuess('p2', 1, { id: 901, title: 'Kesariya 2', artistName: 'Arijit Singh' });
  const r2Reveal = manager.getPublicRoomState(room.code);
  assert.equal(r2Reveal?.phase, 'round-reveal');
  assert.equal(
    r2Reveal?.players.find((p) => p.id === 'p2')?.score,
    1000 - BUZZ_PENALTY_POINTS + 800,
  );

  manager.destroyRoom(room.code);
});

test('Buzz-in collective vote skip advances step when all active players vote skip', async () => {
  const { manager } = createHarness(createStubResolver(950), () => 60_000);

  const room = manager.createRoom('p1', 'One', {
    mode: 'buzz-in',
    packId: 'all-india',
    packName: 'All India Mix',
    roundCount: 1,
  });
  assert.ok(room);
  manager.joinRoom('p2', room.code, 'Two');

  await manager.startMatch('p1');
  manager.markRoundReady('p1', 0);
  manager.markRoundReady('p2', 0);

  // Only p1 votes skip -> stays on step 0 waiting on p2
  manager.playerSkip('p1', 0);
  const partialSkip = manager.getPublicRoomState(room.code);
  assert.equal(partialSkip?.stepIndex, 0);
  assert.equal(partialSkip?.players.find((p) => p.id === 'p1')?.roundStatus, 'skipped');

  // p2 also votes skip -> immediately advances to step 1 and resets both to guessing
  manager.playerSkip('p2', 0);
  const nextStep = manager.getPublicRoomState(room.code);
  assert.equal(nextStep?.stepIndex, 1);
  assert.equal(nextStep?.players.find((p) => p.id === 'p1')?.roundStatus, 'guessing');
  assert.equal(nextStep?.players.find((p) => p.id === 'p2')?.roundStatus, 'guessing');

  manager.destroyRoom(room.code);
});

test('Custom stepTimerSec (Vote Only / 30s) and buzzTimeSec presets apply on create & lobby update', async () => {
  const { manager } = createHarness(createStubResolver(980), () => 75_000);

  const room = manager.createRoom('p1', 'Host', {
    mode: 'buzz-in',
    packId: 'all-india',
    packName: 'All India Mix',
    roundCount: 1,
    stepTimerSec: 0,
    buzzTimeSec: 20,
  });
  assert.ok(room);
  assert.equal(room.stepTimerSec, 0);
  assert.equal(room.buzzTimeSec, 20);

  // Lobby update adjusts buzzTimeSec to 15
  manager.updateSettings('p1', {
    mode: 'buzz-in',
    packId: 'all-india',
    packName: 'All India Mix',
    roundCount: 1,
    stepTimerSec: 0,
    buzzTimeSec: 15,
  });

  await manager.startMatch('p1');
  manager.markRoundReady('p1', 0);

  const playing = manager.getPublicRoomState(room.code);
  assert.equal(playing?.phase, 'playing');
  assert.equal(playing?.phaseEndsAt, null); // Vote Only has no auto-skip timer
  assert.equal(playing?.buzzTimeSec, 15);

  manager.buzzIn('p1', 0);
  const buzzed = manager.getPublicRoomState(room.code);
  assert.equal(buzzed?.phase, 'buzz-window');
  assert.equal(buzzed?.phaseEndsAt, 75_000 + 15_000);

  manager.destroyRoom(room.code);
});

test('getRoomInvitePreview returns host name and room metadata without leaking tracks', () => {
  const { manager } = createHarness();
  const room = manager.createRoom('host-1', 'Yash', {
    mode: 'buzz-in',
    packId: 'dhh-indie',
    packName: 'Desi Hip Hop',
    roundCount: 10,
    stepTimerSec: 60,
    buzzTimeSec: 25,
  });
  assert.ok(room);

  const preview = manager.getRoomInvitePreview(room.code);
  assert.ok(preview);
  assert.equal(preview.hostName, 'Yash');
  assert.equal(preview.mode, 'buzz-in');
  assert.equal(preview.packName, 'Desi Hip Hop');
  assert.equal(preview.roundCount, 10);
  assert.equal(preview.buzzTimeSec, 25);
  assert.equal(preview.playerCount, 1);
  assert.equal(manager.getRoomInvitePreview('NOPE'), null);

  manager.destroyRoom(room.code);
});
