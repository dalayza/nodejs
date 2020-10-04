let nombre = 'Redbull'
let real = 'Wade Winston'

// console.log(`${ nombre } ${ real }`)

// let nombreCompleto = nombre + ' ' + real
// let nombreTemplate = `${ nombre } ${ real }`

// console.log(nombreTemplate === nombreCompleto)

function getNombre() {
    return `${ nombre } ${ real }`
}

console.log(`El nombre de: ${ getNombre() }`)