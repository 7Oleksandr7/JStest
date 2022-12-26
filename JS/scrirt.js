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
