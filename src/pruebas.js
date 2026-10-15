import cluster from 'node:cluster';
import os from 'node:os';

const cpus = os.cpus();

if (cluster.isPrimary) {
  console.log(`Master process PID: ${process.pid}`);
  for (const element of cpus) {
    cluster.fork();
  }
} else {
  console.log(`Worker process PID: ${process.pid}`);
}
