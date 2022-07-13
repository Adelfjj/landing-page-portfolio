let slideIndex = 1;
showSlides(slideIndex);

let sections = document.querySelectorAll("section");
let links = document.querySelectorAll("nav ul li a");

function activeMenu(){
  var len = sections.length;
   do{
    links.forEach(lks => lks.classList.remove("active"));
    links[len-1].classList.add("active");
  }while(--len && window.scrollY - 97 < sections[len-1].offsetTop)
}

window.addEventListener("scroll", () => activeMenu());

// proximo/anterior
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controle do slide atual
function currentSlide(n) {
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

