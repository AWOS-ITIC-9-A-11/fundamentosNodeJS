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

let salarios = [{
        idPersona: 3,
        salario: 30000
    },
    {
        idPersona: 1,
        salario: 15000
    },
    {
        idPersona: 2,
        salario: 25000
    }
];


let getPersonaById = (id, callback) => {

    let persona = personas.find((persona) => {
        return persona._id == id;
    });

    if (!persona) {
        callback('No existe el elemento en la BD', null);
    } else {
        callback(null, persona);
    }

};

let getSalario = (persona, callback) => {

    let salario = salarios.find((salario) => {
        return salario.idPersona == persona._id;
    });

    if (!salario) {
        callback('No existe el salario', null);
    } else {
        callback(null, {
            nombre: persona.nombre,
            edad: persona.edad,
            genero: persona.genero,
            salario: salario.salario
        });
    }

};

getPersonaById(2, (err, data) => {

    if (err) {
        return console.log(err);
    }

    getSalario(data, (err, salario) => {

        if (err) {
            return console.log(err);
        }
        // Hola mi nombre es ${nombre}, tengo ${edad}, mi género es: ${genero} y mi salario es de ${salario} pesos
        console.log(`Hola mi nombre es ${salario.nombre}, tengo ${salario.edad}, mi genero es: ${salario.genero} y mi salario es de ${salario.salario} pesos`);

    });
});