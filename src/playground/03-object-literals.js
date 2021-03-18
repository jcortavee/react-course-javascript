const person = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zipCode: 5345,
        longitud: 23.4324,
        latitud: 3892.438
    }
};

console.log( {person} )

const person2 = { ...person };
person2.nombre = 'Peter';

console.log(person)
console.log(person2)