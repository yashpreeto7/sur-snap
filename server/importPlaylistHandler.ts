import type { IncomingMessage, ServerResponse } from 'node:http';
import { importPlaylistFromUrl } from './playlistImporter.ts';

const MAX_BODY_BYTES = 64 * 1024;

type RequestWithParsedBody = IncomingMessage & { body?: unknown };

export async function readJsonBody(req: IncomingMessage): Promise<Record<string, unknown>> {
  const maybeParsed = (req as RequestWithParsedBody).body;
  if (maybeParsed !== undefined) {
    if (typeof maybeParsed === 'string') {
      return maybeParsed ? (JSON.parse(maybeParsed) as Record<string, unknown>) : {};
    }
    if (typeof maybeParsed === 'object' && maybeParsed !== null) {
      return maybeParsed as Record<string, unknown>;
    }
  }

  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    let totalBytes = 0;

    req.on('data', (chunk: Buffer) => {
      totalBytes += chunk.length;
      if (totalBytes > MAX_BODY_BYTES) {
        req.destroy();
        reject(new Error('Request body too large.'));
        return;
      }
      chunks.push(chunk);
    });

    req.on('end', () => {
      try {
        const text = Buffer.concat(chunks).toString('utf8');
        resolve(text ? (JSON.parse(text) as Record<string, unknown>) : {});
      } catch (err) {
        reject(err);
      }
    });

    req.on('error', reject);
  });
}

export function sendJson(res: ServerResponse, statusCode: number, data: unknown): void {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(data));
}

export async function handleImportPlaylistRequest(
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST, OPTIONS');
    sendJson(res, 405, { error: 'Method not allowed. Use POST.' });
    return;
  }

  try {
    const body = await readJsonBody(req);
    const url = typeof body.url === 'string' ? body.url : '';
    const payload = await importPlaylistFromUrl(url);
    sendJson(res, 200, payload);
  } catch (err) {
    sendJson(res, 400, {
      error: err instanceof Error ? err.message : 'Failed to import playlist.',
    });
  }
}
