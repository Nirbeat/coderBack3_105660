import express from "express";
import env from "./config/env.js";
import { root } from "./utils.js";
import { fork } from "child_process";
const app = express();

// console.log(process.pid);
// console.log(process.cwd());
// console.log(process.memoryUsage());
// console.log(process.argv);
// console.log(process.emit());
// console.log(process.on());

app.get('/operacion-compleja', async (req, res) => {
    const child = fork(root + "/operacionCompleja.js");
    child.send("comenzar calculo bloqueante");
    child.on("message", result => {
        console.log(result);
        res.json(result);
    });
});

app.get('/saludo', async (req, res) => {
    res.send('hola')
});


app.listen(env.port, () => {
    console.log(`Server running on port ${env.port}`);
});