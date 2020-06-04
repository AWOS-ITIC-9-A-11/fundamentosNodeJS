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

getPersona(2, (err, data) => {

    if (err) {
        console.log('¡HUBO UN ERROR!');
        console.log(err);
    } else {
        console.log('NO HUBO UN ERROR');
        console.log(data);
    }
});