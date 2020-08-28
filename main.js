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

var indice = 1;
passador(indice);

function outroSlide(indicador) {
  passador(indice += indicador);
}

function slideAtual(indicador) {
  passador(indice = indicador);
}

function passador(indicador){
    var i;
    var slide = document.getElementsByClassName("slide"); // div que contem as imagens
    var pontos = document.getElementsByClassName("bola"); // bolinhas que ficam no rodapé da imagem

    console.log(slide.length);

    /* AS variaveis definidas a cima são da forma de arrays, por isso nesses condicionais irei pegar 
    o tamanho desse array para fazer o carrousel funcionar. Nesse primeiro if estou tratando quando o
    parâmetro dessa função for maior que a quantidade de slides ou seja, se for maior o indice será igual a 1
    se for menor o indice será igual a quantidade de slides. Para as repetiçoes, para cada slide, os outros
    ficaram com display none, assim eles não aparecerão na tela na outra repetição está sendo trocada as 
    configurações CSS*/

    if(indicador > slide.length){
        indice = 1;
    }
    if(indicador < 1){
        indice = slide.length;
    }
    for(i = 0; i < slide.length; i++){
        slide[i].style.display = "none";
    }
    for(i=0; i< pontos.length; i++){
        pontos[i].className = pontos[i].className.replace(" ball-color", "")
    }
    slide[indice-1].style.display = "block";
    pontos[indice-1].className = pontos[indice-1].className + " ball-color"
}