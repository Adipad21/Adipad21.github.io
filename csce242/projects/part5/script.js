  document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('container');
    const navItems = document.getElementById('columns');

    menuContainer.addEventListener('click', () => {
        navItems.classList.toggle('active');
    });
});
window.addEventListener('resize', () => {
  const navItems = document.getElementById('columns');
  if (window.innerWidth >= 800) {
      navItems.classList.remove('active');
  }
});

const registerForm = document.getElementById("register");
document.getElementById("register-link").addEventListener('click', (event) => {
  event.preventDefault();   
  if (registerForm.style.display === 'none') {
      registerForm.style.display = 'block';
  } else {
      registerForm.style.display = 'none';
  }
});