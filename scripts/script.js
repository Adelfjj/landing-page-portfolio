import items from './dados.js';

let sections = document.querySelectorAll("section");
let links = document.querySelectorAll("nav ul li a");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let elementDots = document.querySelector(".dots");
let elmentCarousel = document.querySelector(".carousel");
let slideIndex = 1;

window.onload = () =>{ 
  loadItemCarrocel(items);
  createDots(items);
  showSlides(slideIndex);
  openPage(items);
}
window.addEventListener("scroll", () => activeMenu());
prev.addEventListener("click", () => plusSlides(-1));
next.addEventListener("click", () => plusSlides(1));

function activeMenu(){
  var len = sections.length;
   do{
    links.forEach(lks => lks.classList.remove("active"));
    links[len-1].classList.add("active");
  }while(--len && window.scrollY - 97 < sections[len-1].offsetTop)
}

// proximo/anterior
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controle do slide atual
window.currentSlide = (n) => { 
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("model");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} //volta para o primeiro
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex"; // Torna visivel de acordo com o currentSlide*/
  dots[slideIndex-1].className += " active";
}

const loadItemCarrocel = (dados) => {

  for(let i = dados.length ;i > 0; i--){

   elmentCarousel.insertAdjacentHTML('afterbegin',`<div class="model fade">
   <img src="${dados[i-1].img}" alt="">
   <div class="info">
       <h2>${dados[i-1].titulo}</h2>
       <p>${dados[i-1].texto}</p>
       <button id="${i-1}">Ver + </button>
   </div>
 </div>`);
  }

}

const createDots = (dados) =>{
  for(let i = 0;i < dados.length; i++){
    elementDots.innerHTML += `<span class="dot" onclick="currentSlide(${i+1})"></span>`;
  }
}

const openPage = (dados) =>{
  let button = document.querySelectorAll(".info button");

  for(let i = 0; i < dados.length;i++){
    button[i].addEventListener("click", (e) =>{
      window.open(dados[e.target.id].url);
    })
  }
}


