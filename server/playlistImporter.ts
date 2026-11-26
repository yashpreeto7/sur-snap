export type PlaylistSource = 'apple-music' | 'youtube' | 'spotify';

export interface ImportedRawTrack {
  itunesId?: number;
  title: string;
  artist: string;
  query: string;
  artworkUrl?: string;
}

export interface ImportedPlaylistPayload {
  name: string;
  source: PlaylistSource;
  sourceUrl: string;
  tracks: ImportedRawTrack[];
}

const BROWSER_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
  'Accept-Language': 'en-US,en;q=0.9',
};

const MAX_YT_PAGES = 15; // ~1,500 tracks safety bound

function stripParentheticalNoise(raw: string): string {
  return raw
    .replace(
      /\((?:official|lyrical|lyric|full\s+song|full\s+video|video\s+song|audio|music\s+video|4k|hd|from|feat\.?|ft\.?)[^)]*\)/gi,
      '',
    )
    .replace(
      /\[(?:official|lyrical|lyric|full\s+song|full\s+video|video\s+song|audio|4k|hd|from)[^\]]*\]/gi,
      '',
    )
    .replace(
      /\b(?:official\s+(?:music\s+)?video|lyrical\s+video|full\s+video\s+song|video\s+song|4k\s+video|hd\s+video)\b/gi,
      '',
    )
    .replace(/\s+/g, ' ')
    .trim();
}

function parseYoutubeVideoTitle(rawTitle: string, channelName: string): ImportedRawTrack {
  const cleaned = stripParentheticalNoise(rawTitle);
  const pipeParts = cleaned
    .split('|')
    .map((p) => p.trim())
    .filter((p) => p.length >= 2);

  const mainPart = pipeParts[0] ?? cleaned;
  let artistHint = '';

  if (pipeParts.length >= 2) {
    const second = pipeParts[1];
    if (!/t-series|sony\s*music|zee\s*music|tips|yrf|saregama|vevo/i.test(second)) {
      artistHint = second;
    }
  }

  const dashParts = mainPart
    .split(/\s+[-–—]\s+/)
    .map((p) => p.trim())
    .filter(Boolean);

  let title = mainPart;
  if (dashParts.length >= 2) {
    title = dashParts[0];
    if (!artistHint && dashParts[1] && !/full\s+song|remix/i.test(dashParts[1])) {
      artistHint = dashParts[1];
    }
  }

  const cleanChannel = channelName
    .replace(/\s*-\s*Topic$/i, '')
    .replace(/t-series|sony\s*music.*|zee\s*music.*|tips\s*official|yrf|saregama.*|vevo/gi, '')
    .trim();

  const artist = artistHint || cleanChannel || 'Indian Music';
  const query = [title, artistHint || cleanChannel].filter(Boolean).join(' ').trim();

  return {
    title: title || cleaned,
    artist,
    query: query || cleaned,
  };
}

function walkObject(node: unknown, visit: (obj: Record<string, unknown>) => void): void {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    for (const item of node) walkObject(item, visit);
    return;
  }
  const record = node as Record<string, unknown>;
  visit(record);
  for (const val of Object.values(record)) {
    walkObject(val, visit);
  }
}

function extractContinuationToken(node: unknown): string | null {
  let token: string | null = null;
  walkObject(node, (obj) => {
    if (token) return;
    const item = obj.continuationItemRenderer as
      | {
          continuationEndpoint?: {
            continuationCommand?: { token?: string };
          };
        }
      | undefined;
    if (item?.continuationEndpoint?.continuationCommand?.token) {
      token = item.continuationEndpoint.continuationCommand.token;
    }
  });
  return token;
}

async function importAppleMusicPlaylist(url: URL): Promise<ImportedPlaylistPayload> {
  const resp = await fetch(url.toString(), {
    headers: {
      ...BROWSER_HEADERS,
      Accept: 'text/html,application/xhtml+xml',
    },
  });

  if (!resp.ok) {
    throw new Error(`Apple Music returned HTTP ${resp.status}. Make sure the playlist is public.`);
  }

  const html = await resp.text();
  let playlistName = 'Apple Music Playlist';
  const trackMap = new Map<number, ImportedRawTrack>();

  const ldMatches = [
    ...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi),
  ];

  for (const match of ldMatches) {
    try {
      const data = JSON.parse(match[1]) as {
        '@type'?: string;
        name?: string;
        track?: Array<{ name?: string; url?: string; audio?: { thumbnailUrl?: string } }>;
      };
      if (data['@type'] === 'MusicPlaylist' || Array.isArray(data.track)) {
        if (data.name) playlistName = data.name;
        for (const item of data.track ?? []) {
          const idMatch = item.url?.match(/\/(\d+)(?:\?|$)/);
          const tid = idMatch ? Number(idMatch[1]) : undefined;
          const title = item.name?.trim();
          if (title && tid) {
            trackMap.set(tid, {
              itunesId: tid,
              title,
              artist: '',
              query: title,
              artworkUrl: item.audio?.thumbnailUrl,
            });
          }
        }
      }
    } catch {
      // Ignore malformed JSON-LD blocks
    }
  }

  const serMatch = html.match(
    /<script[^>]*id="serialized-server-data"[^>]*>([\s\S]*?)<\/script>/i,
  );
  if (serMatch) {
    try {
      const serData = JSON.parse(serMatch[1]) as unknown;
      walkObject(serData, (obj) => {
        const title = typeof obj.title === 'string' ? obj.title : undefined;
        const subtitleLinks = Array.isArray(obj.subtitleLinks) ? obj.subtitleLinks : undefined;
        const rawId = typeof obj.id === 'string' || typeof obj.id === 'number' ? String(obj.id) : '';
        const idNumMatch = rawId.match(/(\d{6,})$/);
        if (title && subtitleLinks && idNumMatch) {
          const tid = Number(idNumMatch[1]);
          const artist = subtitleLinks
            .map((s) =>
              s && typeof s === 'object' && typeof (s as { title?: unknown }).title === 'string'
                ? (s as { title: string }).title
                : '',
            )
            .filter(Boolean)
            .join(', ');
          const existing = trackMap.get(tid);
          if (existing) {
            if (artist) {
              existing.artist = artist;
              existing.query = `${existing.title} ${artist}`;
            }
          } else if (artist) {
            trackMap.set(tid, {
              itunesId: tid,
              title,
              artist,
              query: `${title} ${artist}`,
            });
          }
        }
      });
    } catch {
      // Ignore serialized-server-data parse errors
    }
  }

  const tracks = Array.from(trackMap.values());
  if (tracks.length === 0) {
    throw new Error('Could not find any tracks on that Apple Music playlist page.');
  }

  return {
    name: playlistName,
    source: 'apple-music',
    sourceUrl: url.toString(),
    tracks,
  };
}

async function importSpotifyPlaylist(url: URL): Promise<ImportedPlaylistPayload> {
  const plMatch = url.pathname.match(/\/playlist\/([a-zA-Z0-9]+)/);
  if (!plMatch) {
    throw new Error('Invalid Spotify playlist link. Expected open.spotify.com/playlist/...');
  }

  const embedUrl = `https://open.spotify.com/embed/playlist/${plMatch[1]}`;
  const resp = await fetch(embedUrl, { headers: BROWSER_HEADERS });
  if (!resp.ok) {
    throw new Error(`Spotify returned HTTP ${resp.status}. Make sure the playlist is public.`);
  }

  const html = await resp.text();
  const nextData = html.match(/<script[^>]*id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/i);
  if (!nextData) {
    throw new Error('Unable to read Spotify playlist metadata. Ensure the playlist is public.');
  }

  const parsed = JSON.parse(nextData[1]) as {
    props?: {
      pageProps?: {
        state?: {
          data?: {
            entity?: {
              name?: string;
              trackList?: Array<{ title?: string; subtitle?: string }>;
            };
          };
        };
      };
    };
  };

  const entity = parsed.props?.pageProps?.state?.data?.entity;
  const rawList = entity?.trackList ?? [];
  const tracks: ImportedRawTrack[] = rawList
    .filter((t) => Boolean(t.title))
    .map((t) => {
      const title = (t.title ?? '').trim();
      const artist = (t.subtitle ?? '').replace(/\u00a0/g, ' ').trim();
      return {
        title,
        artist,
        query: `${title} ${artist}`.trim(),
      };
    });

  if (tracks.length === 0) {
    throw new Error('No tracks found in that Spotify playlist.');
  }

  return {
    name: entity?.name?.trim() || 'Spotify Playlist',
    source: 'spotify',
    sourceUrl: url.toString(),
    tracks,
  };
}

async function importYoutubePlaylist(url: URL): Promise<ImportedPlaylistPayload> {
  const listId = url.searchParams.get('list');
  if (!listId) {
    throw new Error('No playlist ID (?list=...) found in that YouTube URL.');
  }

  let playlistName = 'YouTube Playlist';
  const rawTracks: ImportedRawTrack[] = [];
  const seenTrackKeys = new Set<string>();

  const makeTrackKey = (title: string, artist: string) => {
    const t = title.toLowerCase().replace(/[^a-z0-9]/g, '');
    const primaryArtist = artist
      .split(/,|&|\bfeat\.?\b|\bft\.?\b|\bx\b/i)[0]
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '');
    return `${t}::${primaryArtist}`;
  };

  const pushParsedTrack = (rawTitle: string, channel: string) => {
    if (!rawTitle || /\[(?:Private|Deleted) video\]/i.test(rawTitle)) return;
    const parsed = parseYoutubeVideoTitle(rawTitle, channel);
    const key = makeTrackKey(parsed.title, parsed.artist);
    if (!parsed.title || seenTrackKeys.has(key)) return;
    seenTrackKeys.add(key);
    rawTracks.push(parsed);
  };

  const pushCleanTrack = (title: string, artist: string) => {
    const clean = stripParentheticalNoise(title) || title.trim();
    const resolvedArtist = artist || 'Indian Music';
    const key = makeTrackKey(clean, resolvedArtist);
    if (!clean || seenTrackKeys.has(key)) return;
    seenTrackKeys.add(key);
    rawTracks.push({
      title: clean,
      artist: resolvedArtist,
      query: `${clean} ${artist}`.trim(),
    });
  };

  const collectStandardYoutubeNodes = (root: unknown) => {
    walkObject(root, (obj) => {
      const pvr = obj.playlistVideoRenderer as
        | {
            title?: { runs?: Array<{ text?: string }> };
            shortBylineText?: { runs?: Array<{ text?: string }> };
          }
        | undefined;
      if (pvr?.title?.runs?.[0]?.text) {
        pushParsedTrack(
          pvr.title.runs[0].text,
          pvr.shortBylineText?.runs?.[0]?.text ?? '',
        );
      }

      const lockup = obj.lockupMetadataViewModel as
        | {
            title?: { content?: string };
            metadata?: {
              contentMetadataViewModel?: {
                metadataRows?: Array<{
                  metadataParts?: Array<{ text?: { content?: string } }>;
                }>;
              };
            };
          }
        | undefined;
      if (lockup?.title?.content) {
        const channel =
          lockup.metadata?.contentMetadataViewModel?.metadataRows?.[0]
            ?.metadataParts?.[0]?.text?.content ?? '';
        pushParsedTrack(lockup.title.content, channel);
      }
    });
  };

  const collectYtMusicNodes = (root: unknown) => {
    walkObject(root, (obj) => {
      const item = obj.musicResponsiveListItemRenderer as
        | {
            flexColumns?: Array<{
              musicResponsiveListItemFlexColumnRenderer?: {
                text?: { runs?: Array<{ text?: string }> };
              };
            }>;
          }
        | undefined;
      if (item?.flexColumns && item.flexColumns.length >= 2) {
        const title =
          item.flexColumns[0]?.musicResponsiveListItemFlexColumnRenderer?.text
            ?.runs?.[0]?.text ?? '';
        const artistRuns =
          item.flexColumns[1]?.musicResponsiveListItemFlexColumnRenderer?.text
            ?.runs ?? [];
        const artist = artistRuns
          .map((r) => r.text ?? '')
          .join('')
          .split('•')[0]
          .trim();
        if (title) pushCleanTrack(title, artist);
      }
    });
  };

  const fetchYtMusicBrowseWithPagination = async () => {
    try {
      let continuation: string | null = null;
      for (let page = 0; page < MAX_YT_PAGES; page += 1) {
        const body = continuation
          ? {
              context: {
                client: {
                  clientName: 'WEB_REMIX',
                  clientVersion: '1.20250101.01.00',
                },
              },
              continuation,
            }
          : {
              context: {
                client: {
                  clientName: 'WEB_REMIX',
                  clientVersion: '1.20250101.01.00',
                },
              },
              browseId: listId.startsWith('VL') ? listId : `VL${listId}`,
            };

        const ytmResp = await fetch('https://music.youtube.com/youtubei/v1/browse', {
          method: 'POST',
          headers: {
            ...BROWSER_HEADERS,
            'Content-Type': 'application/json',
            Origin: 'https://music.youtube.com',
          },
          body: JSON.stringify(body),
        });
        if (!ytmResp.ok) break;

        const ytmJson = (await ytmResp.json()) as {
          microformat?: { microformatDataRenderer?: { title?: string } };
          header?: {
            musicDetailHeaderRenderer?: { title?: { runs?: Array<{ text?: string }> } };
            musicResponsiveHeaderRenderer?: { title?: { runs?: Array<{ text?: string }> } };
          };
        };

        if (page === 0) {
          const ytmTitle =
            ytmJson.microformat?.microformatDataRenderer?.title ??
            ytmJson.header?.musicDetailHeaderRenderer?.title?.runs?.[0]?.text ??
            ytmJson.header?.musicResponsiveHeaderRenderer?.title?.runs?.[0]?.text;
          if (ytmTitle) playlistName = ytmTitle;
        }

        const beforeCount = rawTracks.length;
        collectYtMusicNodes(ytmJson);
        const nextToken = extractContinuationToken(ytmJson);
        if (!nextToken || nextToken === continuation || rawTracks.length === beforeCount) {
          break;
        }
        continuation = nextToken;
      }
    } catch {
      // Allow fallback
    }
  };

  const fetchStandardYoutubeWithPagination = async () => {
    const ytResp = await fetch(
      `https://www.youtube.com/playlist?list=${encodeURIComponent(listId)}`,
      { headers: BROWSER_HEADERS },
    );
    if (!ytResp.ok) return;

    const html = await ytResp.text();
    const match = html.match(/var ytInitialData\s*=\s*(\{[\s\S]*?\});<\/script>/);
    if (!match) return;

    try {
      const data = JSON.parse(match[1]) as {
        metadata?: { playlistMetadataRenderer?: { title?: string } };
      };
      if (data.metadata?.playlistMetadataRenderer?.title) {
        playlistName = data.metadata.playlistMetadataRenderer.title;
      }
      collectStandardYoutubeNodes(data);

      let continuation = extractContinuationToken(data);
      for (let page = 1; page < MAX_YT_PAGES && continuation; page += 1) {
        const nextResp = await fetch('https://www.youtube.com/youtubei/v1/browse', {
          method: 'POST',
          headers: {
            ...BROWSER_HEADERS,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            context: {
              client: {
                clientName: 'WEB',
                clientVersion: '2.20250101.00.00',
              },
            },
            continuation,
          }),
        });
        if (!nextResp.ok) break;
        const nextData = (await nextResp.json()) as unknown;
        const beforeCount = rawTracks.length;
        collectStandardYoutubeNodes(nextData);
        const nextToken = extractContinuationToken(nextData);
        if (!nextToken || nextToken === continuation || rawTracks.length === beforeCount) {
          break;
        }
        continuation = nextToken;
      }
    } catch {
      // Allow fallback
    }
  };

  const isYtMusic = url.hostname.toLowerCase().includes('music.youtube.com');
  if (isYtMusic) {
    await fetchYtMusicBrowseWithPagination();
  }
  if (rawTracks.length === 0) {
    await fetchStandardYoutubeWithPagination();
  }
  if (!isYtMusic && rawTracks.length === 0) {
    await fetchYtMusicBrowseWithPagination();
  }

  // Atom RSS fallback (returns up to 15 latest tracks cleanly)
  if (rawTracks.length === 0) {
    try {
      const rssResp = await fetch(
        `https://www.youtube.com/feeds/videos.xml?playlist_id=${encodeURIComponent(listId)}`,
        { headers: BROWSER_HEADERS },
      );
      if (rssResp.ok) {
        const xml = await rssResp.text();
        const feedTitle = xml.match(/<feed[\s\S]*?<title>([^<]+)<\/title>/);
        if (feedTitle?.[1]) playlistName = feedTitle[1];
        const entries = [
          ...xml.matchAll(
            /<entry>[\s\S]*?<title>([^<]+)<\/title>[\s\S]*?<name>([^<]+)<\/name>[\s\S]*?<\/entry>/g,
          ),
        ];
        for (const entry of entries) {
          pushParsedTrack(entry[1], entry[2]);
        }
      }
    } catch {
      // Ignore
    }
  }

  if (rawTracks.length === 0) {
    throw new Error(
      'Could not extract tracks from that YouTube playlist. Make sure it is public or unlisted.',
    );
  }

  return {
    name: playlistName,
    source: 'youtube',
    sourceUrl: url.toString(),
    tracks: rawTracks,
  };
}

export async function importPlaylistFromUrl(rawUrl: string): Promise<ImportedPlaylistPayload> {
  let parsedUrl: URL;
  try {
    parsedUrl = new URL(rawUrl.trim());
  } catch {
    throw new Error('Please paste a valid playlist URL (Apple Music, YouTube, YT Music, or Spotify).');
  }

  const host = parsedUrl.hostname.toLowerCase();
  if (host.includes('music.apple.com')) {
    return importAppleMusicPlaylist(parsedUrl);
  }
  if (host.includes('spotify.com')) {
    return importSpotifyPlaylist(parsedUrl);
  }
  if (host.includes('youtube.com') || host.includes('youtu.be')) {
    return importYoutubePlaylist(parsedUrl);
  }

  throw new Error('Unsupported link. Paste a public Apple Music, YouTube, YouTube Music, or Spotify playlist URL.');
}
