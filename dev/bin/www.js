'use strict';

/**
 * Module dependencies.
 */

import cluster from 'cluster'
import fs from 'fs'
import http from 'http'

if (cluster.isMaster) {
  const cpuCount = require('os').cpus().length;

  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', function (worker) {
    cluster.fork();
  });
} else {
  const app = require('../app');
  /**
   * Get port from environment and store in Express.
   */

  const port = process.env.NODE_ENV === 'production' ? '/tmp/nginx.socket' : 3001;

  app.set('port', port);

  http.globalAgent.maxSockets = Infinity;

  /**
   * Create HTTP server.
   */

  const server = http.createServer(app);

  /**
   * Listen on provided port, on all network interfaces.
   */

  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);

  /**
   * Normalize a port into a number, string, or false.
   */

  function normalizePort(val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  }

  /**
   * Event listener for HTTP server "error" event.
   */

  function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges')
        process.exit(1)
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use')
        process.exit(1)
        break;
      default:
        throw error;
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */

  function onListening() {
    const addr = server.address()
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

    if (process.env.DYNO) {
      fs.openSync('/tmp/app-initialized', 'w');
    }

    console.log('Listening on ' + bind);
  }
}