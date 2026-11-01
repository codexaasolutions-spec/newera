import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

try {
  execFileSync('npm', ['run', 'build'], {
    stdio: 'inherit',
    shell: true
  });

  const backendFile = './server/dist/index.js';

  if (!existsSync(backendFile)) {
    throw new Error('Backend build missing: server/dist/index.js');
  }

  await import(backendFile);
} catch (error) {
  console.error('Server startup failed:', error);
  process.exit(1);
}
