import express from 'express';
import mongoose from 'mongoose';
import errorHandler from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import { environment } from './config/config.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import { addLogger } from './utils/index.js';

const app = express();
const PORT = environment.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(addLogger);

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/mocks', (await import('./routes/mocks.router.js')).default);
app.use('/api/proxy', (await import('./routes/proxy.router.js')).default);
app.use('/api/balancing', (await import('./routes/balancing.router.js')).default);


app.get("/health", async (req, res, next) => {
  try {
    req.logger.http(`${req.method} - ${req.url} - ${new Date().toLocaleTimeString()}`);
    res.status(200).json({ health: "server up" })
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
  mongoose
    .connect(environment.MONGO_URI)
    .then(() => console.log('conectado a DB'))
    .catch((err) => {
      process.exitCode = 1;
      console.log(err.message, process.exitCode);
      process.exit();
    });
});
