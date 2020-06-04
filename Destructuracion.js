persona = {
    nombre: 'Abraham',
    apellidoMat: 'Carranza',
    apellidoPat: 'Macias',
    edad: 22,
    concatenado: function() {
        return `Mi nombre es ${this.nombre} ${this.apellidoMat}, tengo ${this.edad} años`
    }
};

let nombre = 'Cecilia';
// let apellidoMat = persona.apellidoMat;
// let apellidoPat = persona.apellidoPat;
// let edad = persona.edad;

let { nombre: nombreA, apellidoMat: apellido, apellidoPat, edad } = persona;

console.log(persona.concatenado());

console.log(nombre,
    apellido,
    apellidoPat,
    edad);