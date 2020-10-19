var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor!');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor!');
});

socket.emit('enviarMensaje', {
    usuario: 'Denis Alayza',
    mensaje: 'Hola Mundo!'
}, function(respuesta) {
    console.log('Respuesta server: ', respuesta);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Info del servidor: ', mensaje);
});