const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { nombre, edad, clave } = persona;
console.log(nombre)

const useContext = ( { nombre, edad, clave} ) => {
    return {
        nombreClave: clave,
        anios: edad,
    }
}

const { nombreClave, anios } = useContext(persona);
console.log(nombreClave, anios)