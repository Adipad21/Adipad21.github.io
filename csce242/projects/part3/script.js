// Toggles the nav items to show/hide when the hamburger menu is clicked
const toggleHamburger = () => {
    document.getElementById("columns").classList.toggle("hide");
  };
  
  // Calls the toggleHamburger function when the hamburger menu is clicked
  window.onload = () => {
    document.getElementsById("container").onclick = toggleHamburger;
  };