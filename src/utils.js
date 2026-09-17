import { Command } from "commander";

const program = new Command()

program
    .option("--env <env>", "entorno de trabajo");

program.parse();

export const root = process.cwd() + "/src";

export default program.opts();