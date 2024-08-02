/**
 * @description
 * This module sets up a logger using the winston library.
 * The logger is configured to log messages to both the console and daily rotating log files.
 *
 * The log format includes a timestamp and the log level. Console logs are colorized for better readability.
 * Log files are rotated daily, with a maximum retention period of 14 days.
 *
 * Usage:
 * Import the logger and use it to log messages at various levels (info, error, warn, etc.).
 *
 * Example:
 * import { logger } from './logger';
 * logger.info('This is an info message');
 * logger.error('This is an error message');
 */

import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

// Define custom formats
const { combine, timestamp, printf, colorize } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level}]: ${message}`;
});

// Create logger
export const logger = createLogger({
  level: 'info',
  format: combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), myFormat),
  transports: [
    new transports.Console({
      format: combine(colorize(), myFormat),
    }),
    new DailyRotateFile({
      filename: 'logs/application-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      maxFiles: '14d',
    }),
  ],
});
