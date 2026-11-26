import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import { handleImportPlaylistRequest } from './server/importPlaylistHandler.ts';

function sursnapApiPlugin(): Plugin {
  return {
    name: 'sursnap-playlist-api',
    configureServer(server) {
      server.middlewares.use('/api/import-playlist', async (req, res, next) => {
        if (req.method !== 'POST') {
          next();
          return;
        }
        await handleImportPlaylistRequest(req, res);
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), sursnapApiPlugin()],
});
