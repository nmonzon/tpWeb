window.onload = function () {
    // document.getElementById('divCirculo').style.visibility = "hidden"; 
    console.log("se recargo el documento");
    //cuando se vuelve a recargar el documento,obtenemos el numero que quedo almacenado en el localStorage
    if (localStorage.getItem("contadorEnStorage") > 0) {
        document.getElementById('circuloNumero').innerHTML = localStorage.getItem("contadorEnStorage");    
    }else{
        document.getElementById('circuloNumero').innerHTML = 0;
    }

    document.getElementById('totalE1').innerHTML = 0;
    document.getElementById('totalE2').innerHTML = 0;
    document.getElementById('totalE3').innerHTML = 0;
    document.getElementById('total').innerHTML = 0;

    //showAutomaticSlides();
}

var total1 = 0;
var total2 = 0;
var total3 = 0;

function calcularTotalEntrada1(){
    total1 = document.getElementById('inputE1').value * 100
    document.getElementById('totalE1').innerHTML = total1;
    document.getElementById('total').innerHTML = total1 + total2 + total3;
}

function calcularTotalEntrada2(){
    total2 = document.getElementById('inputE2').value * 200;
    document.getElementById('totalE2').innerHTML = total2;
    document.getElementById('total').innerHTML = total1 + total2 + total3;
}

// function calcularTotalEntrada3(){
//     total3 = document.getElementById('inputE3').value * 200;
//     document.getElementById('totalE3').innerHTML = total3;
//     document.getElementById('total').innerHTML = total1 + total2 + total3;
// }

// let modal = document.getElementById('miModal');
// let flex = document.getElementById('flex');
// let abrir = document.getElementById('abrir');
// let cerrar = document.getElementById('close');

// abrir.addEventListener('click', function(){
//     modal.style.display = 'block';
// });

// cerrar.addEventListener('click', function(){
//     modal.style.display = 'none';
// });

// window.addEventListener('click', function(e){
//     console.log(e.target);
//     if(e.target == flex){
//         modal.style.display = 'none';
//     }
// });

// function mostrarModal(){
//     document.getElementById('e1').innerHTML = total1;
//     document.getElementById('e2').innerHTML = total2;
//     document.getElementById('e3').innerHTML = total3;
//     document.getElementById('tot').innerHTML = total1 + total2 + total3;
//     modal.style.display = 'block';
// }

