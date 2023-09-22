function imported() {
  console.log("Import of JS Successful");
}

imported();

//Declare Variables

const cnt = document.querySelector(".container");
const toDoForm = document.querySelector(".toDoForm");
const enterButton = document.querySelector(".entr");
const clearButton = document.querySelector(".clear");
const toDoInput = document.querySelector("input[type=text]");
const toDoList = document.querySelector(".output");
const remainder = document.getElementById("tasksLeft");

//Functions

function getTasks() {
  let listNumber;

  listNumber = document
    .getElementById("list")
    .getElementsByTagName("li").length;

  remainder.innerText = `You have ${listNumber} tasks remaining!`;
}

function testFunction(e) {
  e.preventDefault(e);
  let testInput = toDoInput.value;
  if (testInput.trim() == "") {
    alert("Input field is empty");
    return true;
  }
  console.log("Button Worked");

  let addLi = document.createElement("li");

  localStorage.setItem;

  addLi.appendChild(document.createTextNode(toDoInput.value));
  toDoList.appendChild(addLi);

  getTasks();
  toDoForm.reset();
}

function clearChildren(e) {
  e.preventDefault(e);
  let list = document.getElementById("list");

  [...list.children].forEach((c) => list.removeChild(c));
  getTasks();
}

//Event Listeners

enterButton.addEventListener("click", testFunction);

toDoInput.addEventListener("submit", testFunction);

clearButton.addEventListener("click", clearChildren);

//get items from local storage
const localTodo = JSON.parse(localStorage.getItem("currentToDo")) || [];

console.log(document.getElementById("list").getElementsByTagName("li").length);
