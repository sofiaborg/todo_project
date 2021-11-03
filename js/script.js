window.onload = function () {
  todolist();
};

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
  let completeBtn = document.createElement("button");
  completeBtn.innerHTML = "klarmarkera";
  li.innerHTML = listItem[i];
  li.appendChild(completeBtn);
  ulList.appendChild(li);
}

document.body.appendChild(ulList);

function todolist() {
  let completeList = document.createElement("ul");
}
