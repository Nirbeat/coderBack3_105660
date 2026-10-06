import cluster from 'node:cluster';
import os from 'node:os';

const cpus = os.cpus();

if (cluster.isPrimary) {
  console.log(`Master process PID: ${process.pid}`);
  for (let i = 0; i < cpus.length; i++) {
    cluster.fork();
  }
} else {
  console.log(`Worker process PID: ${process.pid}`);
}
