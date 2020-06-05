personas = [{
        nombre: 'Cecilia',
        edad: 22
    },
    {
        nombre: 'Abraham',
        edad: 20
    },
    {
        nombre: 'Francisco',
        edad: 25
    }
];

let getPersona = (id, callback) => {

    if (id <= (personas.length - 1)) {
        callback(null, personas[id]);
    } else {
        callback('El id de la persona no se encuentra en la BD.', null);
    }

};

let getPersonaPromise = (id) => {

    return new Promise((resolve, reject) => {

        if (id <= (personas.length - 1)) {
            resolve(personas[id]);
        } else {
            reject('El id de la persona no se encuentra en la BD.');
        }

    });

};

//CALLBACKS
getPersona(1, (err, persona) => {

    if (err) { return console.log(err); }

    console.log(persona);
});

//PROMESAS
getPersonaPromise(1).then((persona) => {

    console.log(persona);

}).catch((err) => {

    console.log(err);

});