import type { IncomingMessage, ServerResponse } from 'node:http';
import { handleImportPlaylistRequest } from '../server/importPlaylistHandler.ts';

export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> {
  await handleImportPlaylistRequest(req, res);
}
