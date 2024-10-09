const images = [
    // "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
    // "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg",
    // "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/07-06/small+white+fluffy+dog+smiling+at+the+camera+in+close-up-min.jpg",

    // Imagens na pasta
    ...[
        "robson1.jpeg",
        "robson2.jpeg",
        "robson3.jpeg",
        "robson4.jpeg",
        "robson5.jpeg",
    ].map(img => chrome.runtime.getURL(`img/${img}`))
]

function changeImgs() {
    const imgEls = Array.from(document.querySelectorAll('img'))
    const imgQtd = images.length

    imgEls.forEach(imgEl => {
        const src = images[Math.floor(Math.random() * imgQtd)]

        const preloadImg = new Image();
        preloadImg.src = src;

        preloadImg.onload = () => {
            imgEl.src = src;
        };

        preloadImg.onerror = () => {
            console.error(`Imagem não encontrada ${src}`);
        };
    })
}

setTimeout(() => {
    setInterval(() => changeImgs(), 200)
}, 4000)