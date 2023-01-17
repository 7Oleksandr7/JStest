// const container = document.getElementById("container");
// const technologies = ["HTML", "CSS", "Javascript", "React", "Node"];
// const list = document.createElement("ul");
// for (const technology of technologies) {
//   const liEl = document.createElement("li");
//   liEl.textContent = technology;
//   list.append(liEl);
// }

// container.append(list);

// // const listContent = technologies
// //   .map((technology) => `<li>${technology}</li>`)
// //   .join("");

// // list.insertAdjacentHTML("beforeend", listContent);
// // list.innerHTNL = listContent;

// // container.append(list);

// // console.log(listContent);

// const listContent = technologies.reduce(
//   (acc, technology) => (acc += `<li>${technology}</li>`),
//   ""
// );
// const list = `<ul>${listContent}</ul>`;

// container.insertAdjacentHTML("beforeend", list);

// // list.insertAdjacentHTML("beforeend", listContent);

// // console.log(listContent);

// const container = document.getElementById("container");
// const colors = [
//   {
//     label: "red",
//     color: "#FF0000",
//   },
//   {
//     label: "green",
//     color: "#00FF00",
//   },
//   {
//     label: "blue",
//     color: "#0000FF",
//   },
//   {
//     label: "yellow",
//     color: "#FFFF00",
//   },
// ];

// colors.forEach(({ label, color }) => {
//   const buttonEl = document.createElement("button");
//   buttonEl.style.backgroundColor = color;
//   buttonEl.classList.add("indents");
//   buttonEl.textContent = label;
//   container.appendChild(buttonEl);
// });

// const openModalBtn = document.getElementById("openModalBtn");
// const overlay = document.getElementById("overlay");
// const closeBtn = document.getElementById("closeBtn");
// const openClass = "open";

// openModalBtn.addEventListener("click", toggleModal);
// overlay.addEventListener("click", toggleModal);
// closeBtn.addEventListener("click", toggleModal);

// // function handleModal() {
// //   console.log("Hello world!");
// // }

// function toggleModal() {
//   document.body.classList.toggle(openClass);
// }

const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");

colorPalette.addEventListener("click", selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}
// Some helper functions to render palette items
createPaletteItems();
function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}
function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}
function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}
