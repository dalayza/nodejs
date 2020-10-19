const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado!');

    client.emit('enviarMensaje', {
        usuario: 'Administrado',
        mensaje: 'Bienvenido a esta aplicacion!'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado!');
    });

    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (data.usuario) {
        //     callback({
        //         respuesta: 'Todo salio bien!'
        //     });
        // } else {
        //     callback({
        //         respuesta: 'Todo salio mal!'
        //     });
        // }
    });
});