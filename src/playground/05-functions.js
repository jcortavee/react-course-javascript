const saludar = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

console.log(saludar('Jose'));


const getUser = () => ({
        uid: 'ABCDK31',
        username: 'miuser'
    });


console.log(getUser());


const getUserActivo = ( nombre ) =>({
        uid: 'ABD32',
        username: nombre
    });

const usuarioActivo = getUserActivo('Jose');
console.log(usuarioActivo);