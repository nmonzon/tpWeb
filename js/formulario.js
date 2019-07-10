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

var j = 0;

function agregaPersona() {
    j++;
    var select = document.getElementById('person');
    var clone = select.cloneNode(true);

    document.getElementById("nuevaPersona").appendChild(clone);
    clone.addEventListener('click', eliminarPersona);

    return false;
    /*var agregado = document.getElementById('agregado');

    var form = document.getElementById('myForm');

    var body = document.getElementsByTagName('body');

    var person = document.createElement('div');
    person.className = "person";

    var input1 = document.createElement('input');
    input1.type = "text";
    input1.className = "nameSurname-person";
    input1.name = "name";
    input1.placeholder = "Nombre y apellido"

    var input2 = document.createElement('input');
    input2.type = "text";
    input2.className = "dni-person";
    input2.name = "surname";
    input2.placeholder = "dni"

    var input3 = document.createElement('input');
    input3.type = "text";
    input3.className = "precio";
    input3.name = "id";
    input3.value = "100.00";

    var image = document.createElement("img");
    image.setAttribute("src", "img/menos.png");

    var btnImage = document.createElement('button');
    btnImage.appendChild(image);
    //btnImage.onclick = eliminarPersona();
    btnImage.addEventListener('click', eliminarPersona);

    //agrega los siguientes hijos a person 
    person.appendChild(input1);
    person.appendChild(input2);
    person.appendChild(input3);
    person.appendChild(btnImage);

    agregado.appendChild(person);
    return false;
    */
}

function eliminarPersona() {
    var select = document.getElementById('nuevaPersona');
    select.removeChild(select.lastChild);
    /*//parentNode devuelve el nodo padre del elemento eliminaPersona

    var padreBtnImage = document.getElementById('eliminaPersona').parentNode;
    //borra al "padre"
    padreBtnImage.remove();
    // se llama a la funcion preventDefault que evita que el boton mande el formulario o algo asi 
    event.preventDefault();
    //return false;*/
    return false;
}



