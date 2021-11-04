window.onload = function () {};

let listItem = [
  "tvätta",
  "städa",
  "plugga",
  "träna",
  "meditera",
  "handla",
  "duscha",
];

let ulList = document.createElement("ul");
for (i = 0; i < listItem.length; i++) {
  let li = document.createElement("li");
  li.innerHTML = listItem[i];

  let completeBtn = document.createElement("button");
  completeBtn.innerHTML = "klar";
  li.appendChild(completeBtn);
  ulList.appendChild(li);

  li.addEventListener("click", handleclick);
  function handleclick() {
    li.className = "markcomplete";
  }
}

document.body.appendChild(ulList);
console.log(ulList);

//använda array push för att lägga till ny sak sist i en array

// let todoInput = document.getElementById(todoInput);
// let todoBtn = document.getElementById(todoBtn);
// todoBtn.addEventListener("click", handleclickadd);
// function handleclickadd() {
//   let addedItems = document.createElement("li");
//   addedItems.innerHTML = todoInput.value;
//   ulList.appendChild(addedItems);
// }
