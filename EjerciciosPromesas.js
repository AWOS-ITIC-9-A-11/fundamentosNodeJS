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


let getPersona = (id) => {

    return new Promise((resolve, reject) => {

        let persona = personas.find((persona) => {
            return persona._id = id;
        });

        if (!persona) {
            reject('No se encuentra la persona en la BD.')
        } else {
            resolve(persona);
        }

    });

};

let getSalarios = (persona) => {

    return new Promise((resolve, reject) => {

        let salario = salarios.find((salario) => {
            return salario.idPersona == persona._id;
        });

        if (!salario) {
            reject('El salario no existe.')
        } else {
            resolve({
                nombre: persona.nombre,
                edad: persona.edad,
                genero: persona.genero,
                salario: salario.salario
            });
        }

    });

};

getPersona(1).then((persona) => {

    getSalarios(persona).then((data) => {
        let { nombre, edad, genero, salario } = data;
        console.log(`Hola mi nombre es ${nombre}, tengo ${edad}, mi genero es: ${genero} y mi salario es de ${salario} pesos`);
    }).catch((err) => {
        console.log(err);
    });

}).catch((err) => {
    console.log(err);
});