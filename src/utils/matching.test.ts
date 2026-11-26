import assert from 'node:assert/strict';
import test from 'node:test';
import { matchesMetadataQuery } from '../services/itunes.ts';
import { dedupeTracksByTitleAndArtist, evaluateGuess, isSameTrack } from './matching.ts';

test('evaluateGuess matches exact track ID', () => {
  const status = evaluateGuess(
    { id: 123, title: 'Kesariya', artistName: 'Pritam & Arijit Singh' },
    { id: 123, title: 'Kesariya', trackName: 'Kesariya (From "Brahmastra")', artistName: 'Pritam, Arijit Singh & Amitabh Bhattacharya' },
  );
  assert.equal(status, 'correct');
});

test('evaluateGuess matches same song from different album release', () => {
  const status = evaluateGuess(
    { id: 999, title: 'Kesariya', trackName: 'Kesariya', artistName: 'Pritam & Arijit Singh' },
    { id: 123, title: 'Kesariya', trackName: 'Kesariya (From "Brahmastra")', artistName: 'Pritam, Arijit Singh & Amitabh Bhattacharya' },
  );
  assert.equal(status, 'correct');
});

test('evaluateGuess returns artist-match when wrong song shares artist', () => {
  const status = evaluateGuess(
    { id: 456, title: 'Tum Hi Ho', artistName: 'Mithoon & Arijit Singh' },
    { id: 123, title: 'Kesariya', trackName: 'Kesariya (From "Brahmastra")', artistName: 'Pritam, Arijit Singh & Amitabh Bhattacharya' },
  );
  assert.equal(status, 'artist-match');
});

test('evaluateGuess returns wrong when neither song nor artist matches', () => {
  const status = evaluateGuess(
    { id: 777, title: 'Excuses', artistName: 'AP Dhillon & Gurinder Gill' },
    { id: 123, title: 'Kesariya', trackName: 'Kesariya (From "Brahmastra")', artistName: 'Pritam, Arijit Singh & Amitabh Bhattacharya' },
  );
  assert.equal(status, 'wrong');
});

test('evaluateGuess treats same-title songs by different artists as wrong', () => {
  const status = evaluateGuess(
    { id: 1185966127, title: 'Naina', artistName: 'Arijit Singh' },
    { id: 1734233958, title: 'Naina', trackName: 'Naina (From "Crew")', artistName: 'Diljit Dosanjh, Badshah & Raj Ranjodh' },
  );
  assert.equal(status, 'wrong');
});

test('isSameTrack and dedupeTracksByTitleAndArtist preserve same-title songs by different artists', () => {
  const nainaDiljit = { id: 1734233958, title: 'Naina', artistName: 'Diljit Dosanjh, Badshah' };
  const nainaArijit = { id: 1185966127, title: 'Naina', artistName: 'Arijit Singh' };
  const nainaDiljitAlt = { id: -50, title: 'Naina (From "Crew")', artistName: 'Diljit Dosanjh' };

  assert.equal(isSameTrack(nainaDiljit, nainaArijit), false);
  assert.equal(isSameTrack(nainaDiljit, nainaDiljitAlt), true);

  const { combined, added } = dedupeTracksByTitleAndArtist(
    [nainaDiljit],
    [nainaArijit, nainaDiljitAlt],
  );
  assert.equal(combined.length, 2);
  assert.equal(added.length, 1);
  assert.equal(added[0].artistName, 'Arijit Singh');
});

test('matchesMetadataQuery blocks lyric-only hits while keeping title/artist matches', () => {
  const aashiyan = {
    title: 'Aashiyan',
    trackName: 'Aashiyan',
    artistName: 'Shreya Ghoshal, Nikhil Paul George & Pritam',
    albumName: 'Barfi! (Original Motion Picture Soundtrack)',
  };

  assert.equal(matchesMetadataQuery(aashiyan, 'itni si hasi'), false);
  assert.equal(matchesMetadataQuery(aashiyan, 'itni si khushi'), false);
  assert.equal(matchesMetadataQuery(aashiyan, 'ashiyan'), true);
  assert.equal(matchesMetadataQuery(aashiyan, 'shreya barfi'), true);

  const chaiyya = {
    title: 'Chaiyya Chaiyya',
    trackName: 'Chaiyya Chaiyya',
    artistName: 'Sukhwinder Singh & Sapna Awasthi',
    albumName: 'Dil Se',
  };
  assert.equal(matchesMetadataQuery(chaiyya, 'chaiya chaiya'), true);
});
