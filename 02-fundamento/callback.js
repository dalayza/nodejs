// setTimeout(() => {
//     console.log('Hola mundo')
// }, 3000)

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Denis',
        id
    }

    if (id === 20) {
        callback(`El usuario con el id => ${ id } no existe en la base de datos`)
    } else {
        callback(usuario)
    }
}

getUsuarioById(20, (err, usuario) => {
    if (err) { return console.log(err) }

    console.log('Usuario de base de datos', usuario)
})