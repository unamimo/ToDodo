
//these may need to go in a function 
document.getElementById("addButton").addEventListener("click", addTask);
document.querySelector("#inputTask").addEventListener("keydown", checkKeyPressed);
document.getElementById("deleteButton").addEventListener("click", clearList);

let toDos = [];

//funky way of getting a key press? ┐(￣ヘ￣;)┌
function checkKeyPressed(event){
    if (event.key === "Enter") {
        addTask();
    }
};

function addTask(){
    let task = document.getElementById("inputTask").value;

    console.log("list: %o", toDos);
    toDos.push(task);
    console.log("list: %o", toDos);
    outputTask(toDos);
    clearInput();
}

function outputTask(passedList){
    //document.getElementById("toDoList").innerHTML += listItem+"\n";
        
    // new method, inserting text as individul elements 
    const para = document.createElement("p");
    const node = document.createTextNode(passedList[passedList.length - 1]);
    para.appendChild(node);
    const element = document.getElementById("listContainer");
    element.appendChild(para);
}

function clearInput(){
    document.getElementById('inputTask').value = '';
}

//does not actually clear the array
function clearList(){
    document.getElementById("listContainer").innerHTML ='';
    console.log("list: %o", toDos);
    toDos = [];
    console.log("list: %o", toDos);
}

