let bars = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navber');

bars.onclick = () =>{
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    navbar.classList.toggle('active');
}