const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    let currentValue = input.value;
    /* currentValue = ""; */
    paintGreeting(currentValue); // paintGreeting은 text argument 필요로 하기 때문에
    saveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING); // 인사말이 나올 때는 form displya:none 해야함
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hello ${text}!`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser); //localStorage에 저장된 이름 argument로 넣어주기
    }
}

/* function showName(event) {
    event.preventDefault();
    input.value = "";
}

function handleForm() {
    form.addEventListener("submit", showName);
}
 */
/* function checkLocalStorage() {
    if (input.value === null) {
        handleForm();
    } else {

    }
}
 */
function init() {
    loadName();
}
init();