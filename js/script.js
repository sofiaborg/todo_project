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

let listItem = [taskOne, taskTwo, taskThree];
let ulList = document.createElement("ul");
let container = document.getElementById("task-container");

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
      li.className = "markcomplete";
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
  //let id = this.id.split("-").pop();
  console.log(i);

  listItem[i].status = !listItem[i].status;
  if (listItem[i].status == true) {
    this.checked = true;
  }

  // detta är samma sak som att göra en if/else-sats med true/false
  // if (listItem[i].status === false) {
  //   listItem[id].status = true;
  //   console.log(this);

  //   console.log(listItem);
  // } else {
  //   listItem[id].status = false;
  //   console.log(listItem);
  // }

  printTodos();
}

console.log(ulList);
