/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import dotenv from 'dotenv';

import app from './app';

const chalk = require('chalk');

dotenv.config();

// UNCAUGHT EXCEPTION
// Application need to be crashed then a tool will be needed to restart the app
process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(chalk.red(err.message));
  console.log(chalk.red(err.stack));
  process.exit(1);
});

// START SERVER

const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (!Number.isNaN(port)) {
    return val;
  }

  if (port > 0) {
    return port;
  }

  return false;
};

const port = normalizePort(process.env.PORT || 1212);

/**
 * Event listener for HTTP server "listening" event.
 */

const server = app.listen(port, async () => {
  const address = server.address();
  // eslint-disable-next-line max-len
  const bind = typeof address === 'string' ? `pipe ${address}` : `port ${address.port}`;
  console.log(`Listening on ${chalk.green(bind)}`);
});

// Catching Exception

// Application does not necessarily need to be crashed
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(chalk.red(err.message));
  console.log(chalk.red(err.stack));
  process.exit(1);
});

process.on(
  'SIGTERM',
  () => {
    console.log('👋 SIGTERM signal received.');
    server.close(() => {
      console.log('💥 Process terminated.');
    });
  } // end of SIGTERM
);

process.on(
  'SIGINT',
  () => {
    console.log('👋 SIGINT signal received.');
    server.close(() => {
      console.log('💥 Process terminated.');
    });
  } // end of SIGINT
);
