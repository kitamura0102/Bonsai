// Burger menu

const burgerBtn = document.querySelectorAll(".bar");
const closeBtn = document.querySelectorAll(".close-btn");
const navBar = document.querySelector(".navbar");
const burgerContent = document.querySelector(".whole-burger");
const burgerToggle = document.getElementById('burgerToggle');
const logo = document.querySelector('.nav-logo');
let isOpen = false;
const questions = document.querySelectorAll('.faq-container');
const answers = document.querySelectorAll('.show-faq');
const logo2 = document.querySelector('.nav-logo2');



// burger Animation
burgerToggle.addEventListener('click', () => {
  burgerToggle.classList.toggle('active');
});




burgerToggle.addEventListener('click', () => {
  isOpen = !isOpen; // Cambiar el estado
  
  if (isOpen) {
    // Abrir el contenido cuando el estado es verdadero
    burgerContent.style.display = "flex";
    logo.style.display = "none";
    logo2.style.display = "block";
    
  
  } else {
    // Cerrar el contenido cuando el estado es falso
    burgerContent.style.display = "none";
    logo.style.display = "block";
    logo2.style.display = "none";
  }

  // Agregar o quitar la clase 'active' al botón de hamburguesa
  burgerToggle.classList.toggle('active', isOpen);
});




// FAQ 



questions.forEach(function(abrir, index){
  abrir.addEventListener('click', () => {
    isOpen = !isOpen; // Cambiar el estado
    
    if (isOpen) {
      // Abrir el contenido cuando el estado es verdadero
      answers[index].style.display = "block"
      
    
    } else {
      // Cerrar el contenido cuando el estado es falso
      answers[index].style.display = "none"
    }
  
    // Agregar o quitar la clase 'active' al botón de hamburguesa
    
  });
});





