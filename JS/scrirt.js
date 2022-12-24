const technologies = ["HTML", "CSS", "Javascript", "React", "Node"];
const list = document.createElement("ul");
for (const technology of technologies) {
  const li = document.createElement("li");
  li.textContent = technology;
  list.append(li);
}

document.body.appendChild(list);
