const imagesMemes = document.querySelector('#images-memes');

const btnCreate = document.querySelector('#btn-create');

btnCreate.addEventListener('click', createMemes);

function createMemes(){
    const topText = document.querySelector('#top-text').value;
    const bottomText = document.querySelector('#bottom-text').value;
    const checked = document.querySelector('input[name="memes"]:checked').value;

    const url = `http://apimeme.com/meme?meme=${checked}&top=${topText}&bottom=${bottomText}`;

    const image = document.createElement('img');
    image.src = url;

    imagesMemes.innerHTML = '';
    imagesMemes.appendChild(image);
}