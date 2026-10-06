import os from 'node:os';
import { Router } from 'express';

const router = Router();
const cpus = os.cpus();

router.get('/process-info', (req, res) => {
  console.log(`Process info: PID ${process.pid}, CPUs: ${cpus.length}`);
  res.json({ pid: process.pid, cpus });
});

// router.get('/clusters', async (req, res, next) => {
//   // req.logger.http(`${req.method} - ${req.url} - ${new Date().toLocaleTimeString()}`);
//   console.log(`Cluster status: ${cluster.isPrimary ? 'master' : 'worker'}`);
//   res.status(200).json({ clusters: cluster.isPrimary ? 'master' : 'worker' });
// });

router.get('/operacion-sencilla', (req, res) => {
  let counter = 0;
  for (let i = 0; i < 10000; i++) {
    counter += i;
  }
  res.json({
    result: 'operacion sencilla ejecutada',
    status: 'ok',
    resultado: counter,
    message: `Operacion completada por el worker ${process.pid}`,
  });
});

router.get('/operacion-compleja', (req, res) => {
  let counter = 0;
  for (let i = 0; i < 5e8; i++) {
    counter += i;
  }
  res.json({
    result: 'operacion compleja ejecutada',
    status: 'ok',
    resultado: counter,
    message: `Operacion completada por el worker ${process.pid}`,
  });
});
export default router;
