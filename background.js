const body = document.querySelector("body");
const IMG_NUMBER = 5; // 이미지 숫자만큼 상수 만들어주기 (이미지 갯수 변할 수도 있기 때문)


function loadImg(num) {
    let randomNum = Math.random();
    randomNum = randomNum * num + 1;

    const imgNum = Math.floor(randomNum);
    body.style.backgroundImage = `url("./bakImg${imgNum}.jpg")`;
}

function init() {
    loadImg(IMG_NUMBER);
}
init();