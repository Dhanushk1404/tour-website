let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-close');
let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar')
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
   searchBar.classList.remove('active');

}
menu.addEventListener('click', () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
   searchBtn.classList.toggle('fa-times');
   searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
 loginForm.classList.add('active');
   
});
formBtn.addEventListener('click', () =>{
   loginForm.classList.remove('active');
     
  });