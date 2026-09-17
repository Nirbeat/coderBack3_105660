import { Command } from 'commander';

const program = new Command();

program.
    option("-e, --env <env>", "entorno de trabajo", "dev");

program.parse();

let envPath;

if (program.opts().env == "prod") {
    envPath = "prod.env"
}
if (program.opts().env == "test") {
    envPath = "test.env"
}

if (program.opts().env == "dev") {
    envPath = "dev.env"
}

export default envPath;