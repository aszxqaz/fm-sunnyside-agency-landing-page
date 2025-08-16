const menuToggle = document.getElementById("menu-open");
const menu = document.getElementById("menu");

function toggle() {
  menu.classList.toggle("opened");
}

menuToggle.addEventListener("click", toggle);

menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", toggle);
});
