const digimons = ['Greymon', 'Devimon', 'Agumon'];

const [,devimon] = digimons;

console.log(devimon);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const useState = (valor) => {
    return [valor, () => {console.log('Hola mundo')}];
}

const [nombre, setNombre] = useState('Devimon');
console.log(nombre);
setNombre();