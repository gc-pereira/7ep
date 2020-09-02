//Menu hamburger
let menuOpen = false;
document.querySelector('#menu').addEventListener('click', () =>{
    if(!menuOpen){
        document.querySelector('#menu').classList.add('change');
        document.querySelector('#nav').classList.add('change');
        document.querySelector('#menu-bg').classList.add('change-bg');
        menuOpen = true;
    } else {
        document.querySelector('#menu').classList.remove('change');
        document.querySelector('#nav').classList.remove('change');
        document.querySelector('#menu-bg').classList.remove('change-bg');
        menuOpen = false;
    }
})

//Carrossel

/* AS variaveis definidas a são da forma de arrays, por isso nesses condicionais irei pegar 
o tamanho desse array para fazer o carrousel funcionar. Nesse primeiro if estou tratando quando o
parâmetro dessa função for maior que a quantidade de slides ou seja, se for maior o indice será igual a 1
se for menor o indice será igual a quantidade de slides. Para as repetiçoes, para cada slide, os outros
ficaram com display none, assim eles não aparecerão na tela na outra repetição está sendo trocada as 
configurações CSS*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}