// window.onload = function () {
//   listStart();
// };

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
  ulList.appendChild(li);
}

document.body.appendChild(ulList);
