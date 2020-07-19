export const togglePopup = () => {
  const overlaydom = document.querySelector("[role=overlay]");
  const taskdom = document.querySelector("[role=task]");

  return type => {
    if (type === "show") {
      overlaydom.classList.remove("hide");
      taskdom.classList.remove("hide");
    } else {
      overlaydom.classList.add("hide");
      taskdom.classList.add("hide");
    }
  };
};
