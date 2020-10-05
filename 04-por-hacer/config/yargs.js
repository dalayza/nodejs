const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const ompletado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        description
    })
    .command('actualizar', 'Actualizar el estado completo de la tarea', {
        description,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        description
    })
    .help()
    .argv

module.exports = {
    argv
}