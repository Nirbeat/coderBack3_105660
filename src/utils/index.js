import bcrypt from 'bcrypt';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { devLogger, prodLogger } from '../config/logger.js';
import { environment } from '../config/config.js';

export const createHash = async (password) => {
    const salts = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salts);
}

export const passwordValidation = async (user, password) => bcrypt.compare(password, user.password);

export function addLogger(req, res, next) {
    req.logger = environment.MODE == "prod" ? prodLogger : devLogger;
    next();
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;