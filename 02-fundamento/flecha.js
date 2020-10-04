// function sumar(a, b) {
//     return a + b;
// }

let sumar = (a, b) => a + b;

console.log(sumar(10, 20))

// function saludar() {
//     return 'Hola mundo';
// }

saludar = () => 'Hola mundo';

console.log(saludar())

// function saludo(nombre) {
//     return `Hola ${ nombre }`;
// }

saludo = nombre => `Hola ${ nombre }`;

console.log(saludo('Denis'))

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Renegeracion',
    getNombre() {
        return `${ deadpool.nombre  } ${ deadpool.apellido } - poder: ${ deadpool.poder }`
    }
}

console.log(deadpool.getNombre());