const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

lugar.getLugarLatLong(argv.direccion)
    .then(resp => console.log(resp));

clima.getClima()
    .then(console.log)
    .catch(err => console.log(err));

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLong(direccion);
        const temp = await lugar.getClima(coords.lat, corrds.lng);

        return `El clima de ${ coord.direccion } es de ${ temp }.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ direccion }`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);