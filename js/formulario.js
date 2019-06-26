function agregaPersona() {
    var agregado = document.getElementById('agregado');
    
var form = document.getElementById('myForm');

    var body = document.getElementsByTagName('body');

    var person = document.createElement('div');
    person.className = "person";

    var input1 = document.createElement('input');
    input1.type ="text";
    input1.className ="name-person";
    input1.name = "name";

    var input2 = document.createElement('input');
    input2.type ="text";
    input2.className ="surname-person";
    input2.name = "surname";

    var input3 = document.createElement('input');
    input3.type ="text";
    input3.className ="precio";
    input3.name = "id";

    var image =document.createElement("img");
    image.setAttribute("src","img/menos.png");

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
}

function eliminarPersona() {
    //parentNode devuelve el nodo padre del elemento eliminaPersona
    var padreBtnImage = document.getElementById('eliminaPersona').parentNode;
    //borra al "padre"
    padreBtnImage.remove();
    // se llama a la funcion preventDefault que evita que el boton mande el formulario o algo asi 
    event.preventDefault();
    return false;
}


