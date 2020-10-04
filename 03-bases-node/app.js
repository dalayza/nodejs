const argv = require('./config/yargs').argv;
const colors = require('colors/safe')

const { listarTabla, crearArchivo } = require('./multiplicar/multiplicar')

let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case ' crear':
        crearArchivo(argv.base)
            .then(archivo => console.log('Archivo creado: ', colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}

// let argv2 = process.argv;

console.log('Base => ' + arg.base);
console.log('Limite => ' + arg.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1]