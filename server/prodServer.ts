import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { handleImportPlaylistRequest, sendJson } from './importPlaylistHandler.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '..', 'dist');
const INDEX_PATH = path.join(DIST_DIR, 'index.html');

const MIME_TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2',
};

function getSafeDistPath(requestPathname: string): string | null {
  let decoded: string;
  try {
    decoded = decodeURIComponent(requestPathname);
  } catch {
    return null;
  }

  const normalized = decoded === '/' ? '/index.html' : decoded;
  const candidate = path.resolve(DIST_DIR, `.${normalized}`);
  const rel = path.relative(DIST_DIR, candidate);
  if (rel.startsWith('..') || path.isAbsolute(rel)) {
    return null;
  }
  return candidate;
}

async function serveFile(
  filePath: string,
  req: IncomingMessage,
  res: ServerResponse,
  isImmutableAsset: boolean,
): Promise<boolean> {
  try {
    const fileStats = await stat(filePath);
    if (!fileStats.isFile()) {
      return false;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.statusCode = 200;
    res.setHeader('Content-Type', MIME_TYPES[ext] ?? 'application/octet-stream');
    res.setHeader(
      'Cache-Control',
      isImmutableAsset ? 'public, max-age=31536000, immutable' : 'no-cache',
    );
    if (req.method === 'HEAD') {
      res.end();
      return true;
    }
    const content = await readFile(filePath);
    res.end(content);
    return true;
  } catch {
    return false;
  }
}

async function routeRequest(req: IncomingMessage, res: ServerResponse): Promise<void> {
  const host = req.headers.host ?? 'localhost';
  const parsedUrl = new URL(req.url ?? '/', `http://${host}`);
  const pathname = parsedUrl.pathname;

  if (pathname === '/api/health') {
    sendJson(res, 200, { ok: true, service: 'sur-snap' });
    return;
  }

  if (pathname === '/api/import-playlist') {
    await handleImportPlaylistRequest(req, res);
    return;
  }

  if (pathname.startsWith('/api/')) {
    sendJson(res, 404, { error: 'API route not found.' });
    return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.statusCode = 405;
    res.end('Method Not Allowed');
    return;
  }

  const candidatePath = getSafeDistPath(pathname);
  if (candidatePath) {
    const isHashedAsset = pathname.startsWith('/assets/');
    if (await serveFile(candidatePath, req, res, isHashedAsset)) {
      return;
    }
  }

  // SPA fallback to built index.html for routes without a static file match.
  if (await serveFile(INDEX_PATH, req, res, false)) {
    return;
  }

  sendJson(res, 503, {
    error: 'Frontend build not found in dist/. Run "npm run build" before starting the production server.',
  });
}

const port = Number(process.env.PORT) || 3000;
const host = process.env.HOST || '0.0.0.0';

const server = createServer((req, res) => {
  void routeRequest(req, res).catch((err) => {
    console.error('Unhandled server error:', err);
    if (!res.headersSent) {
      sendJson(res, 500, { error: 'Internal server error.' });
    } else if (!res.writableEnded) {
      res.end();
    }
  });
});

server.listen(port, host, () => {
  console.log(`SurSnap production server listening on http://${host}:${port}`);
});
