import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { environment } from './config/config.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';

const app = express();
const PORT = environment.PORT;

app.use(express.json());
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);

app.listen(PORT, () => {

    console.log(`Listening on ${PORT}`);
    mongoose.connect(environment.MONGO_UR)
        .then(() => console.log("conectado a DB"))
        .catch(err => {
            process.exitCode = 1;
            console.log(err.message, process.exitCode);
            process.exit();
        });
});