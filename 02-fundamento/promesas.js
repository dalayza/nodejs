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

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)

        if (!empleadoDB) {
            reject(`No existe un usuario con el id => ${ id }`)
        } else {
            resolve(empleadoDB)
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)

        if (!salarioDB) {
            reject(`No se enontro un empleado con el salario => ${ empleado.nombre }`)
        } else {
            resolve({
                nombre: empleado.nombre,
                monto: salarioDB.monto,
                id: empleado.id
            })
        }
    });
}

getEmpleado(1).then(empleado => {
    console.log('Empleado de base de datos', empleado);

    getSalario(empleado).then(res => {
        console.log(`El empleado ${ res.nombre } tiene un salario de S.${ res.monto }`);
    }, err => console.log(err))
}, err => console.log(err))