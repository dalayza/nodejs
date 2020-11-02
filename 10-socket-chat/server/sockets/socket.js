const { io } = require('../server');

const { Usuarios } = require('../clases/usuarios');
const { crearMensaje } = require('../utilidades/utilidades');

const usuarios = new Usuarios;

io.on('connection', (client) => {
    client.on('entrarChat', (data, callback) => {
        if (!data.nombre || !data.sala) {
            return callback({
                error: true,
                mensaje: 'El nombre/sala es necesario!'
            });
        }

        client.join(data.sala);

        usuarios.agregarPersona(client.id, data.nombre, data.sala);

        client.broadcast.to(data.sala).emit('listaPersonas', usuarios.getPersonaPorSala(data.sala));

        callback(usuRIOS.getPersonaPorSala(data.sala));
    });

    client.on('crearMensaje', (data) => {
        let persona = usuarios.getPersona(client.id);

        let mensaje = crearMensaje(persona.nombre, data.mensaje);

        client.broadcast.to(persona.sala).emit('crearMensaje', mensaje);
    });

    client.on('disconnect', () => {
        let personaBorrada = usuarios.borrarPersona(client.id);

        client.broadcast.to(personaBorrada.sala).emit('crearMensaje', crearMensaje('Administrador', `Persona eliminada ${personaBorrada.nombre} salio!`));

        client.broadcast.to(personaBorrada.sala).emit('listaPersonas', usuarios.getPersonaPorSala(personaBorrada.sala));
    });

    // Mensajes Privados
    client.on('mensajePrivado', data => {
        let persona = usuARIOS.getPersona(CLIENT.ID);

        client.broadcast.to(data.para).emit('mensajePrivado', crearMensaje(persona.persona, data.mensaje));
    });
});