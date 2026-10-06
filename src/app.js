import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { environment } from './utils/index.js';
// IMPORTAR SWAGGER
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';

const app = express();
const PORT = environment.PORT;

// INICIALIZAR SWAGGER
const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Adopt Me API',
            description: 'API para la gestion de adopcion de mascotas',
        }
    },
    apis: ['./src/docs/Users/*.yaml']
};

const specs = swaggerJSDoc(swaggerOptions);

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);
app.use('/api/mocks', mocksRouter);

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
    mongoose.connect(environment.MONGO_URI)
    .then(()=> console.log("conectado a DB"));

});