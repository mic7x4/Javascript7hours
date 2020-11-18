
const generateCat = () =>{
    let image = document.createElement('img');
    let div = document.getElementById('result');
    image.src = 'http://thecatapi.com/api/images/get?format=src&type=gif&timestamp';
    div.appendChild(image);
}


