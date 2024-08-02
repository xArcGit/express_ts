/**
 * @description This file is the entry point of the application
 * @description It will bootstrap the application and start the server using IIFE (Immediately Invoked Function Expression)
 * @description It will also initialize socket.io and listen to connection event
 */

import type { Application } from 'express';
import { Server, type Socket } from 'socket.io';
import type { DefaultEventsMap } from 'socket.io/dist/typed-events';
import init from './app';
import SocketController from './app/controllers/socket.controller';
import { socketConfig } from './config/app';
import { PORT } from './config/env';
import { logger } from './logger';

/**
 * Bootstrap the application
 */
(async () => {
  const app: Application = init();
  const server = app.listen(PORT, () => logger.info('Server', `started on port ${PORT}`));
  const io: Server<DefaultEventsMap> = new Server(server, socketConfig());
  io.on('connection', (socket: Socket<DefaultEventsMap>) => SocketController(socket, io));
})();
