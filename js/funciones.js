$(document).ready(function(){ 
    $("a.desplegable").toggle(
          function() {
            $(this).parent().find("nav.menu").slideDown('');
          },
          function() {
            $(this).parent().find("nav.menu").slideUp('');
          }                        
        );
$(window).resize(function(){
    if($(this).width()>750){
        $("a.desplegable").parent().find("nav.menu").show();
    } else{
        $("a.desplegable").parent().find("nav.menu").hide();
    }
});
});

window.onload = function () {
  // document.getElementById('divCirculo').style.visibility = "hidden"; 
  console.log("se recargo el documento");
  //cuando se vuelve a recargar el documento,obtenemos el numero que quedo almacenado en el localStorage
  if (localStorage.getItem("contadorEnStorage") > 0) {
      document.getElementById('circuloNumero').innerHTML = localStorage.getItem("contadorEnStorage");    
  }else{
      document.getElementById('circuloNumero').innerHTML = 0;
  }
  //showAutomaticSlides();
}