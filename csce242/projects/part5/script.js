  document.addEventListener('DOMContentLoaded', function() {
    var menuContainer = document.getElementById('container');
    var navItems = document.getElementById('columns');

    menuContainer.addEventListener('click', function() {
        navItems.classList.toggle('active');
    });
});
window.addEventListener('resize', function() {
  var navItems = document.getElementById('columns');
  if (window.innerWidth >= 800) {
      navItems.classList.remove('active');
  }
});
