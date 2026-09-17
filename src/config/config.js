import envPath from '../config/commander.js';
import { config } from 'dotenv';
config({ path: envPath });

export const environment = {
    MONGO_URI: process.env.MONGO_URI,
    PORT: process.env.PORT
}