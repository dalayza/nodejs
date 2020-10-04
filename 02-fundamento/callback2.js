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

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)

    if (!empleadoDB) {
        callback(`No existe un usuario con el id => ${ id }`)
    } else {
        callback(null, empleadoDB)
    }
}

let getSalario = (empleado, callback) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id)

    if (!salarioDB) {
        callback(`No se enontro un empleado con el salario => ${ empleado.nombre }`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            monto: salarioDB.monto,
            id: empleado.id
        })
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) { return console.log(err) }

    console.log(empleado);

    getSalario(empleado, (err, res) => {
        if (err) { return console.log(err) }

        console.log(`El salario de ${ res.nombre }, tiene un salario de S.${ res.monto }`);
    })
})