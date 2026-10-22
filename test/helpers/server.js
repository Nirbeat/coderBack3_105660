import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

import { environment } from '../../src/config/config.js';

const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

let serverProcess;

export const baseUrl = `http://localhost:${environment.PORT}`;

export const startServer = () => {
  return new Promise((resolve, reject) => {
    serverProcess = spawn(process.execPath, ['src/app.js', '--env', 'test'], {
      cwd: rootDir,
      env: { ...process.env, MODE: 'test' },
    });

    let output = '';

    const timer = setTimeout(() => {
      reject(new Error('Server did not start in time'));
    }, 8000);

    serverProcess.stdout.on('data', (chunk) => {
      output += chunk.toString();

      if (output.includes('conectado a DB')) {
        clearTimeout(timer);
        resolve();
      }
    });

    serverProcess.stderr.on('data', (chunk) => {
      output += chunk.toString();
    });

    serverProcess.on('exit', (code) => {
      clearTimeout(timer);
      reject(new Error(`Server exited with code ${code}. Output:\n${output}`));
    });
  });
};

export const stopServer = () => {
  return new Promise((resolve) => {
    if (!serverProcess || serverProcess.exitCode !== null) return resolve();

    serverProcess.removeAllListeners('exit');
    serverProcess.once('exit', resolve);
    serverProcess.kill('SIGTERM');
  });
};

export const mochaHooks = {
  beforeAll: async function () {
    this.timeout(10000);
    await startServer();
  },
  afterAll: async function () {
    await stopServer();
  },
};
