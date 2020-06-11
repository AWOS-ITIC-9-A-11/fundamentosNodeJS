let personas = [{
        _id: 1,
        nombre: "Isabel",
        edad: "22",
        genero: "Mujer"
    }, {
        _id: 2,
        nombre: "Cecilia",
        edad: "22",
        genero: "Mujer"
    },
    {
        _id: 3,
        nombre: "Abraham",
        edad: "22",
        genero: "Hombre"
    }
];

let empresas = [{
        _id: 1,
        nombre: 'Microsoft',
        domicilio: 'Av. Vasco de Quiroga 3200 Piso 7. Col. Centro de Ciudad Santa',
        telefono: '44932453253'
    },
    {
        _id: 2,
        nombre: 'Google',
        domicilio: 'Montes Urales 445 Lomas de Chapultepec Ciudad de México',
        telefono: '4493231223'
    }
];

let salarios = [{
        idPersona: 3,
        idEmpresa: 1,
        salario: 30000
    },
    {
        idPersona: 1,
        idEmpresa: 2,
        salario: 15000
    },
    {
        idPersona: 2,
        idEmpresa: 2,
        salario: 25000
    }
];

let getPersona = (id) => {
    return new Promise((resolve, reject) => {

        let persona = personas.find((persona) => {
            return persona._id == id;
        });

        if (!persona) {
            reject('No existe persona en la BD');
        } else {
            resolve(persona);
        }
    });
};

let getSalario = (persona) => {

    return new Promise((resolve, reject) => {

        let salario = salarios.find((salario) => {
            return salario.idPersona == persona._id;
        });

        if (!salario) {
            reject('No existe salario en la BD');
        } else {
            resolve({
                nombre: persona.nombre,
                edad: persona.edad,
                genero: persona.genero,
                salario: salario.salario,
                idEmpresa: salario.idEmpresa
            });
        }

    });

};

let getEmpresa = (data) => {

    return new Promise((resolve, reject) => {

        let empresa = empresas.find((empresa) => {
            return empresa._id == data.idEmpresa;
        });

        if (!empresa) {
            reject('No existe empresa en la BD');
        } else {
            resolve({
                nombre: data.nombre,
                edad: data.edad,
                genero: data.genero,
                salario: data.salario,
                empresa: empresa.nombre
            });
        }
    });
}

getPersona(2).then((persona) => {

    getSalario(persona).then((data) => {
        // console.log(data);

        getEmpresa(data).then((data2) => {
            console.log(data2);

        }).catch((err) => {

        });

    }).catch((err) => {
        console.log(err);
    });

}).catch((err) => {
    console.log(err);
});

// getPersona(1).then((persona) => {
//     console.log('DATA 1:', persona);
//     return getSalario(persona);
// }).then((data) => {
//     console.log('DATA 2', data);
//     return getEmpresa(data);
// }).then((data2) => {
//     console.log('DATA3', data2);
//     console.log(data2);
// }).catch((err) => {
//     console.log(err);
// });

let obtenerDatos = async(id) => {

    let persona = await getPersona(id);
    let data = await getSalario(persona);
    let data2 = await getEmpresa(data);

    return data2;
};

obtenerDatos(1).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})