// let getNombre = async() => {
//     throw new Error(' o existe un nombre para ese usuario')

//     return 'Denis';
// }

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Denis')
        }, 3000)
    })
}

let saludo = async() => {
    let nombre = await getNombre()

    return await `Hola ${ nombre }`
}

getNombre().then(nombre => {
    console.log(nombre);
}).catch(err => console.log('Fallo en el async => ' + err))