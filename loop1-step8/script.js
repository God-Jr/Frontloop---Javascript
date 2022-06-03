/*Elementos a esconder*/
const showClass = document.querySelectorAll(".hide");

const menu = document.getElementById("btn-menu");
const hide = document.getElementById("btn-hide");

menu.addEventListener("click", () => {
  showClass.forEach((element) => element.classList.add("show"));
});

hide.addEventListener("click", () => {
  showClass.forEach((e) => e.classList.remove("show"));
});
