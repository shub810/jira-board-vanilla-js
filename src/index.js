import "./styles.css";
import { addTask } from "./addTask";
import { togglePopup } from "./togglePopup";

const toggleModal = togglePopup();

const createTask = () => {
  const plusDom = document.querySelector("[role=createTask]");
  plusDom.addEventListener("click", e => {
    toggleModal("show");
  });
};

const closePopup = () => {
  const crossDom = document.querySelector("[role=closePopup]");
  crossDom.addEventListener("click", e => {
    toggleModal();
  });
};

const addTaskToDashBoard = () => {
  const btn = document.querySelector("[role=addTask]");
  btn.addEventListener("click", e => {
    addTask(() => {
      toggleModal();
    });
  });
};

createTask();
closePopup();
addTaskToDashBoard();
