const socketController = (socket) => {

    console.log('Cliente conectado', socket.id);


    socket.on('disconnect', () => {
        console.log('cliente desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {

        const id = 12345623;
        callback(id);

        socket.broadcast.emit('enviar-mensaje', payload);
    });
}

module.exports = socketController