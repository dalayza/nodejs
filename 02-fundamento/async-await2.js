let empleados = [{
        id: 1,
        nombre: 'Denis'
    },
    {
        id: 2,
        nombre: 'Desiree'
    },
    {
        id: 3,
        nombre: 'Victoria'
    },
    {
        id: 4,
        nombre: 'Dylan'
    }
]

let salarios = [{
        id: 1,
        monto: 1000
    },
    {
        id: 2,
        monto: 2000
    }
]

let getEmpleado = async(id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        throw new Error(`No existe un usuario con el id => ${ id }`)
    } else {
        return empleadoDB
    }
}

let getSalario = (empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        throw new Error(`No se enontro un empleado con el salario => ${ empleado.nombre }`)
    } else {
        return {
            nombre: empleado.nombre,
            monto: salarioDB.monto,
            id: empleado.id
        }
    }
}

let getInformacion = async(id) => {
    let empleado = await getEmpleado(id)
    let salario = await getSalario(empleado)

    console.log(JSON.stringify(empleado) + ' ' + JSON.stringify(salario));

    return `${ salario.nombre } tiene un salario de S.${ salario.monto }`
}

getInformacion(1).then(mensaje => console.log(mensaje)).catch(err => console.log(err))