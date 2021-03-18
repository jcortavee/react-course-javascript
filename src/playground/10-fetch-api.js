const apiKey = 'Q5MycsfPeYC9LcrIk2Z9uqWJjOE78clY';

const request = fetch(`http://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

request
.then( response => response.json())
.then( ({data}) => {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
.catch( console.warn );