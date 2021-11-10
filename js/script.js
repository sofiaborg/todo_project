class Todos {
  constructor(taskName) {
    this.uppgift = taskName;
    this.status = false;
  }
}

let taskOne = new Todos("tvätta");
let taskTwo = new Todos("städa");
let taskThree = new Todos("plugga");

window.onload = function () {
  document.getElementById("input");
  let newTodoBtn = document.getElementById("newTodoBtn");
  newTodoBtn.addEventListener("click", handleNewTask);

  printTodos();
};

let listItem = [taskOne, taskTwo, taskThree];
let ulList = document.createElement("ul");
let container = document.getElementById("task-container");
let completeContainer = document.getElementById("complete-container");

//en funktion för att skriva ut array
function printTodos() {
  ulList.innerHTML = ""; //gör innehållet tomt innan loopen för att inte allt ska skrivas ut dubbelt
  for (let i = 0; i < listItem.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = listItem[i].uppgift;
    let completeBtn = document.createElement("input");
    completeBtn.type = "checkbox";
    completeBtn.className = "checkboxStyle";
    li.appendChild(completeBtn);

    if (listItem[i].status == true) {
      completeBtn.checked = true;
    }

    completeBtn.addEventListener("click", () => {
      btnClick(i);
    });

    ulList.appendChild(li);
  } //for-loop slutar

  container.appendChild(ulList);
  console.log(listItem);
}

function btnClick(i) {
  console.log(i);

  listItem[i].status = !listItem[i].status;
  if (listItem[i].status == true) {
    this.checked = true;
  }
  printTodos();
}

function handleNewTask() {
  let newTask = new Todos(input.value);
  listItem.push(newTask);
  console.log(newTask);
  printTodos();
}

console.log(ulList);
