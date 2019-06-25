var i = Number(0);
function contadorEntradas() {
    //verifica si el navegador es compatible con almacenamiento en el localStorage
    if (Storage !== "undefined") {
        // guardamos en el localStorage un elemento clave/valor
        localStorage.setItem("contadorEnStorage",++i);
        //lo mostramos por la consola
        console.log(localStorage.getItem("contadorEnStorage"));
        //se copia el valor del localStorage en circuloNumero
        document.getElementById('circuloNumero').innerHTML =  localStorage.getItem("contadorEnStorage");

        
    } else {
        prompt("El naavegador no es compatible con LocalStorage");
    }
}

window.onload = function () {
    console.log("se recargo el documento");
    //cuando se vuelve a recargar el documento,obtenemos el numero que quedo almacenado en el localStorage
    document.getElementById('circuloNumero').innerHTML = localStorage.getItem("contadorEnStorage");
}