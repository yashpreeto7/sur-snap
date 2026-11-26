import type { Server as HttpServer } from 'node:http';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import { handleImportPlaylistRequest } from './server/importPlaylistHandler.ts';
import { createMultiplayerRuntime } from './server/multiplayer/wsServer.ts';

function sursnapApiPlugin(): Plugin {
  const multiplayer = createMultiplayerRuntime();

  return {
    name: 'sursnap-api',
    configureServer(server) {
      if (server.httpServer) {
        multiplayer.attachToHttpServer(server.httpServer as HttpServer, {
          destroyUnknownUpgrades: false,
        });
      }

      server.middlewares.use(async (req, res, next) => {
        const parsedUrl = new URL(req.url ?? '/', 'http://localhost');
        if (parsedUrl.pathname === '/api/import-playlist' && req.method === 'POST') {
          await handleImportPlaylistRequest(req, res);
          return;
        }
        if (parsedUrl.pathname.startsWith('/api/rooms/')) {
          const handled = await multiplayer.handleHttpRequest(req, res, parsedUrl);
          if (handled) return;
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), sursnapApiPlugin()],
});
