const { execFileSync } = require('node:child_process');
const fs = require('node:fs');

async function start() {
  try {
    execFileSync('npm', ['run', 'build'], {
      stdio: 'inherit'
    });

    const backendFile = './server/dist/index.js';

    if (!fs.existsSync(backendFile)) {
      throw new Error('Backend file not found: ' + backendFile);
    }

    require('./server/dist/index.js');
  } catch (error) {
    console.error('Server startup failed:', error);
    process.exit(1);
  }
}

start();
