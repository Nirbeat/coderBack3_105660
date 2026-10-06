import winston from "winston";

const prodLevels = {
    error: 0,
    http: 1
}

export const devLogger = winston.createLogger({
    transports: [
        new winston.transports.Console({ level: "debug" }),
        new winston.transports.File({ level: "error", filename: "errors.log" })
    ]
});

export const prodLogger = winston.createLogger({
    levels: prodLevels,
    transports: [
        new winston.transports.Console({ level: "http" }),
        new winston.transports.File({ level: "error", filename: "src/errors/errors.log" })
    ]
});