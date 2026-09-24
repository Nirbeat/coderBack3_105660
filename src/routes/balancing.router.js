import os from 'os';
import { Router } from 'express';

const router = Router();

router.get('/process-info', (req, res) => {
  const cpus = os.cpus();
  res.json({ pid: process.pid, cpus });
  
});

export default router;
