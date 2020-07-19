export const addTask = fn => {
  const title = document.querySelector("[role=title]");
  const desc = document.querySelector("[role=desc]");
  const option = document.querySelector("[role=addTo]");

  const titleDiv = createDiv(title.value, "ts-title");
  const descDiv = createDiv(desc.value, "ts-desc");

  const task = document.createElement("div");
  task.classList.add("task-sticky");
  task.appendChild(titleDiv);
  task.appendChild(descDiv);

  attachToCol(option.value, task);
  fn();
};

const createDiv = (text, className) => {
  const div = document.createElement("div");
  if (className) div.classList.add(className);
  div.innerHTML = text;
  return div;
};

const attachToCol = (role, html) => {
  const col = document.querySelector(`[role=${role}]`);
  col.append(html);
};
