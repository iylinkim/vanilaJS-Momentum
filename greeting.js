/* const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const CURRENT_USER = "currentUser",
    SHOWING = "showing";

function saveName(text) {
    localStorage.setItem(CURRENT_USER, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askName() {
    form.classList.add(SHOWING);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `HELLO ${text}`;
}


function loadName() {
    const currentUser = localStorage.getItem(CURRENT_USER);
    if (currentUser === null) {
        askName();
    } else {
        paintGreeting(currentUser);
    }

}

function init() {
    loadName();
}
init(); */


const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser";
const SHOWING = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function paintName(text) {
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `HELLO ${text}`;
};

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintName(currentValue);
    saveName(currentValue);
};

function askForName() {
    form.classList.add(SHOWING);
    form.addEventListener("submit", handleSubmit);
}

function loadName() {
    const loadedName = localStorage.getItem(USER_LS);
    if (loadedName === null) {
        askForName();
    } else {
        paintName(loadedName);
    }
}

function init() {
    loadName();
}
init();