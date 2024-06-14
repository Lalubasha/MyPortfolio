const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', () => {
    const themeIcon = document.getElementById('theme-icon');
  
    themeIcon.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      themeIcon.classList.toggle('bx-moon');
      themeIcon.classList.toggle('bx-sun');
    });
});
  
