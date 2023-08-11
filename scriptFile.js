//these may need to go in a function
document.getElementById("addButton").addEventListener("click", addTask);
document
  .querySelector("#inputTask")
  .addEventListener("keydown", checkKeyPressed);
document
  .getElementById("deleteButton")
  .addEventListener("click", confirmationMsg);
document.addEventListener("click", listenForElement);

//can this be local? global means it is easy to change around (´｡• ω •｡`)
let toDos = [];

//funky way of getting a key press? ┐(￣ヘ￣;)┌
function checkKeyPressed(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

function confirmationMsg() {
  if (confirm("Are you sure you want to delete the list?") == true) {
    clearList();
  }
}

function listenForElement(event) {
  let element = event.target;
  if (element.tagName === "P") {
    element.classList.toggle("checked");
    saveData();
  } else if (element.tagName === "SPAN") {
    console.log(element.id);
    element.parentElement.parentElement.remove();

    let wholeList = document.getElementById("listContainer");
    if (wholeList.innerHTML == "") {
      alert("Congratulations! You completed all your tasks.");
      clearList();
    }

    saveData();
  }
}

function addTask() {
  let task = document.getElementById("inputTask").value;

  if (task == "") {
    alert("You must write something before adding");
  } else {
    toDos.push(task);
    outputTask(toDos);
    clearInput();
  }
}

/*
    //gets the button id, then slices for just the number, finds that div + number
function removeTask(clickedElement) {
  //removing in display
  numberId = clickedElement.id.slice(7);
  console.log(numberId);
  divToRemove = document.getElementById("div" + ("-" + numberId));
  divToRemove.remove();
}
*/

// to comment out quickly: ctrl+k+c, uncomment: ctrl+k+u
function outputTask(passedList) {
  const taskDiv = document.createElement("div");
  taskDiv.classList = "wrapperDiv";
  taskDiv.id = "div" + ("-" + passedList.length);
  document.getElementById("listContainer").appendChild(taskDiv);

  const para = document.createElement("p");
  para.classList = "taskToDo";
  para.id = "para" + ("-" + passedList.length);
  const node = document.createTextNode(passedList[passedList.length - 1]);
  para.appendChild(node);
  document.getElementById("div" + ("-" + passedList.length)).appendChild(para);

  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  para.appendChild(span);

  saveData();
}

function clearInput() {
  document.getElementById("inputTask").value = "";
}

function clearList() {
  document.getElementById("listContainer").innerHTML = "";
  console.log("list: %o", toDos);
  toDos = [];
  console.log("list: %o", toDos);

  saveData();
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
