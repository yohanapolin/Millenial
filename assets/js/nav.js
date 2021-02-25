/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
  nav.classList.toggle('slide');
});