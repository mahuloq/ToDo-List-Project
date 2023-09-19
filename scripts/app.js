function imported() {
  console.log("Import of JS Successful");
}

imported();

const cnt = document.querySelector(".container");

const enterButton = document.querySelector(".entr");

const deleteButton = document.querySelector(".dlt");

const toDoInput = document.querySelector(".entry");

const toDoList = document.querySelector(".output");

function testFunction() {
  console.log("Button Worked");
  let li = document.createElement("li");

  li.appendChild(document.createTextNode("test"));
  toDoList.appendChild(li);
}

deleteButton.addEventListener("click", testFunction);

enterButton.addEventListener("click", testFunction);
