const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuBtn.classList.toggle("text-clifford");
});
