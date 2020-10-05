const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer')

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Mostrar todas las tareas por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        break;
    case 'listar':
        console.log('Listar todas las tareas por hacer');
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('==========Por hacer=========='.green);
            console.log(tarea.descripcion);
            console.log('Estado : ', tarea.completada);
            console.log('============================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completada);
        console.log(actualizado)
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
    default:
        console.log('Comando no reconocido');
}