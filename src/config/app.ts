/**
 * @description This file contain all application configurations
 */

import type { CorsOptions } from 'cors';
import type { Options } from 'express-rate-limit';
import type { ServerOptions } from 'socket.io';
import { TRUSTED_DOMAINS } from './env';

export const socketConfig = (): Partial<ServerOptions> => ({
  cors: {
    origin: TRUSTED_DOMAINS,
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

export const corsConfig = (): CorsOptions => ({
  origin: TRUSTED_DOMAINS,
  credentials: true,
});

export const limitterConfig = (): Partial<Options> => ({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: 'draft-7',
  legacyHeaders: true,
  statusCode: 429,
  message: 'Too many requests, please try again later.',
});
