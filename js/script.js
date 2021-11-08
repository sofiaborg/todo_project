//skapar class innehållandes class constructor. Jag skriver ej ut DONE för den ska ej ändras förrän i en if-sats
class Todos {
  constructor(taskName) {
    this.uppgift = taskName;
    this.status = false;
  }
}

//skapar class-vaiabler som blir object
let taskOne = new Todos("tvätta");
let taskTwo = new Todos("städa");
let taskThree = new Todos("plugga");

window.onload = function () {
  printTodos();
};

let listItem = [taskOne, taskTwo, taskThree]; // lägger object i en array
console.log(listItem);
let ulList = document.createElement("ul");
let container = document.getElementById("task-container");

//en funktion för att skriva ut array
function printTodos() {
  for (i = 0; i < listItem.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = listItem[i].uppgift; //hämta item och visa propetryn för KEY taskName

    let completeBtn = document.createElement("input");
    completeBtn.type = "checkbox";
    li.appendChild(completeBtn);

    completeBtn.addEventListener("click", btnClick);
    function btnClick() {
      if (listItem[i].status === false) {
        li.className = "markcomplete";
        listItem[i].status = true;
        console.log(listItem);
      }
    }

    ulList.appendChild(li);
  } //for-loop slutar
  container.appendChild(ulList);
}

console.log(ulList);
