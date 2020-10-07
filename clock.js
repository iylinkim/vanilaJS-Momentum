function setClock() {
    const date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    const clockBox = document.getElementById("js-clock");
    clockBox.innerText = `${hours <10 ? "0"+hours : hours}:${minutes<10 ? "0"+minutes : minutes}:${seconds<10 ? "0"+seconds : seconds}`;
}

function init() {

    setClock();
    setInterval(setClock, 1000);

}
init();