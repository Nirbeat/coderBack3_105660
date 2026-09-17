function operacionCompleja() {
    let result = 0;
    for (let i = 0; i < 5e9; i++) {
        result++;
    }
    return result;
}

// ESCUCHA DEL EVENTO
process.on('message', message => {
    console.log(message);
    const result = operacionCompleja();
    process.send(result);
});
