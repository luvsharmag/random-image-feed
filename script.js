const container = document.querySelector('.container');

const ImgURL = 'https://source.unsplash.com/random/';


const rows = 5;

for (let i = 0; i < rows*3; i++) {
    
    const imgEl = document.createElement('img');
    imgEl.src =  `${ImgURL}${getRandomSize()}`;
    container.appendChild(imgEl);
}

function getRandomSize(){
    return `${getRandom()}x${getRandom()}`;
}

function getRandom(){
    return Math.floor(Math.random() * 10) + 300;
}
// renderImage();