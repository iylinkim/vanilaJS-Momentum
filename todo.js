/* const toDoForm = document.querySelector(".js-lists"),
    toDoInput = toDoForm.querySelector("input"),
    toDoLists = document.querySelector(".js-listArea");

const TODO_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    const nowBtn = event.target;
    const nowLi = nowBtn.parentNode;

    toDoLists.removeChild(nowLi);

    const remainToDos = toDos.filter(
        function (toDo) {
            console.log(toDo.id, nowLi.id);
            return toDo.id !== parseInt(nowLi.id);
        }
    );

    toDos = remainToDos;

    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function makeLists(text) {
    const li = document.createElement("li"),
        span = document.createElement("span"),
        btn = document.createElement("button"),
        newId = toDos.length + 1


    span.innerText = text;
    btn.innerText = "X";
    btn.addEventListener("click", deleteToDo);
    li.id = newId;

    li.appendChild(span);
    li.appendChild(btn);
    toDoLists.appendChild(li); 

    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);

    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    let currentValue = toDoInput.value;
    makeLists(currentValue);
    toDoInput.value = "";
}

function loadToDo() {
    const loadedToDos = localStorage.getItem(TODO_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            makeLists(toDo.text);
        });

    }
}

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}
init(); */
const toDoForm = document.querySelector(".js-lists"),
    toDoInput = toDoForm.querySelector("input"),
    toDoLists = document.querySelector(".js-listArea");

const TODO_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
    const nowBtn = event.target;
    const nowLi = nowBtn.parentNode;
    toDoLists.removeChild(nowLi);

    const remainToDos = toDos.filter(function (toDo) {
        console.log(toDo.id, nowLi.id);
        return toDo.id !== parseInt(nowLi.id);
    });

    toDos = remainToDos;

    saveToDo();
}

function saveToDo() {
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    const newId = toDos.length + 1;
    btn.innerText = "X";
    btn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.id = newId;

    li.appendChild(span);
    li.appendChild(btn);
    toDoLists.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDo();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDo() {
    const loadedToDos = localStorage.getItem(TODO_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(
            function (toDo) {
                paintToDo(toDo.text);
            }
        );
    }
}

function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();