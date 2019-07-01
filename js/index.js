var i = Number(0);
function contadorEntradas() {
    //document.getElementById('divCirculo').style.visibility = "visible"; 
    //verifica si el navegador es compatible con almacenamiento en el localStorage
    if (Storage !== "undefined") {
        // guardamos en el localStorage un elemento clave/valor
        localStorage.setItem("contadorEnStorage",++i);
        //lo mostramos por la consola
        console.log(localStorage.getItem("contadorEnStorage"));
        //se copia el valor del localStorage en circuloNumero
        document.getElementById('circuloNumero').innerHTML = localStorage.getItem("contadorEnStorage");
    } else {
        prompt("El naavegador no es compatible con LocalStorage");
    }
}



window.onload = function () {
    // document.getElementById('divCirculo').style.visibility = "hidden"; 
    console.log("se recargo el documento");
    //cuando se vuelve a recargar el documento,obtenemos el numero que quedo almacenado en el localStorage
    if (localStorage.getItem("contadorEnStorage") > 0) {
        document.getElementById('circuloNumero').innerHTML = localStorage.getItem("contadorEnStorage");    
    }else{
        document.getElementById('circuloNumero').innerHTML = 0;
    }
    showSlides(1);
    //showAutomaticSlides();
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  
  slides[slideIndex-1].style.display = "block"; 
  
}


  /*showAutomaticSlides();

  function showAutomaticSlides() {
    var i;

    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showAutomaticSlides, 2000); // Change image every 2 seconds
  }*/