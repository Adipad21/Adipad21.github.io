  document.addEventListener("DOMContentLoaded", () => {
    const menuContainer = document.getElementById("container");
    const navItems = document.getElementById("columns");

    menuContainer.addEventListener("click", () => {
        navItems.classList.toggle("active");
    });
});
window.addEventListener("resize", () => {
  const navItems = document.getElementById("columns");
  if (window.innerWidth >= 800) {
      navItems.classList.remove("active");
  }
});

document.getElementById("register-link").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("register").classList.toggle("hidden");
});