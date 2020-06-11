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

let getPersonaById = (id) => {

    return new Promise((resolve, reject) => {

        let persona = personas.find((persona) => {
            return persona._id == id;
        });

        if (!persona) {
            reject('No se encontró el usuario en la BD');
        } else {
            resolve(persona);
        }
    });
};

let getSalario = (persona) => {

    return new Promise((resolve, reject) => {

        let salario = salarios.find((salario) => salario.idPersona == persona._id);

        if (!salario) {
            reject('No se encontró el salario en la BD');
        } else {
            resolve({
                nombre: persona.nombre,
                edad: persona.edad,
                salario: salario.salario,
                idEmpresa: salario.idEmpresa
            });
        }

    });

};

let getEmpresa = (data) => {
    return new Promise((resolve, reject) => {

        let empresa = empresas.find((empresa) => empresa._id == data.idEmpresa);

        if (!empresa) {
            reject('No se encontró la empresa en la bd.');
        } else {
            resolve({
                nombrePersona: data.nombre,
                edad: data.edad,
                salario: data.salario,
                nombreEmpresa: empresa.nombre
            });
        }

    });
}

// getPersonaById(1).then((persona) => {
//     getSalario(persona).then((salario) => {
//         // console.log(salario);}
//         getEmpresa(salario).then((data) => {
//             console.log(data);
//         }).catch((err) => {
//             console.log(err);
//         });
//     }).catch((err) => {
//         console.log(err);
//     });
// }).catch((err) => {
//     console.log(err);
// });

// getPersonaById(6).then((persona) => {
//     return getSalario(persona);
// }).then((salario) => {
//     // console.log(salario);
//     return getEmpresa(salario);
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

let obtenerDatos = async(id) => {

    let persona = await getPersonaById(id);
    let salario = await getSalario(persona);
    let data = await getEmpresa(salario);

    return data;
};

obtenerDatos(6).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});