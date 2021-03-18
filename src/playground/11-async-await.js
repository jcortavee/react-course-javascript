const getImage = async () => {
    try {
        const apiKey = 'Q5MycsfPeYC9LcrIk2Z9uqWJjOE78clY';
        const response = await fetch(`http://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
        
        const data = await response.json();
        
        const { url } = data.data.images.original;

        const image = document.createElement('img');
        image.src = url;

        document.body.append(image);

    } catch (error) {
        console.error(err);
    }
}

getImage();