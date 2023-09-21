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

  // const title = bookmarkInput.value;
  // const bookmark = document.createElement("a");
  // bookmark.className = "bookmark";
  // bookmark.innerHTML = title;
  // bookmark.href = "#";
  // bookmark.target = "blank";
  // bookmarksList.appendChild(bookmark);

  let addLi = document.createElement("li");

  addLi.appendChild(document.createTextNode(toDoInput.value));
  toDoList.appendChild(addLi);

  toDoForm.reset();
}

deleteButton.addEventListener("click", testFunction);

enterButton.addEventListener("click", testFunction);

toDoInput.addEventListener("submit", testFunction);
