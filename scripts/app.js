function imported() {
  console.log("Import of JS Successful");
}

imported();

const cnt = document.querySelector(".container");
const toDoForm = document.querySelector(".toDoForm");
const enterButton = document.querySelector(".entr");

const deleteButton = document.querySelector(".dlt");

const toDoInput = document.querySelector("input[type=text]");
// const bookmarkInput = bookmarkForm.querySelector("input[type=text]");

const toDoList = document.querySelector(".output");

function testFunction(e) {
  e.preventDefault(e);
  console.log("Button Worked");

  let addLi = document.createElement("li");

  localStorage.setItem;

  addLi.appendChild(document.createTextNode(toDoInput.value));
  toDoList.appendChild(addLi);

  toDoForm.reset();
}

//get items from local storage
const localTodo = JSON.parse(localStorage.getItem("currentToDo")) || [];

deleteButton.addEventListener("click", testFunction);

enterButton.addEventListener("click", testFunction);

toDoInput.addEventListener("submit", testFunction);
