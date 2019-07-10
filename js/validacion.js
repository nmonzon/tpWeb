/*

function validar() {
    var error = false;
    var nombre = document.getElementById("name").value;
    var apellido =document.getElementById("last-name").value;
    var telefono = document.getElementById("phone").value;
    var email = document.getElementById('mail').value;
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    // var regexTelefono = /^[0-9]{4}[-][0-9]{4}+$/;
    // var textArea = document.getElementById("msg").value;
    // var i = 0;
    var mensajeError = "";
	if(nombre==''){
		error=true;
		mensajeError+="<p>El nombre no puede ser vacío</p>";
    }
    if(apellido ==''){
		error=true;
		mensajeError+="<p>El apellido no puede ser vacío</p>";
    }

    if (!regexemail.test(email)) {
        error = true;
        console.log("pasa por mail");
        
        mensaje+='El texto ingresado no es un email';
    }

    // if(regexTelefono.test(telefono)){
	// 	error=true;
    //     mensajeError+="<p>telefono invalido</p>";
    // }

     
    if(error==true){
		document.getElementById("mensaje").innerHTML=mensajeError;
		return false;
	}else{
		return true;
	}
}

var i=0;

function cuentaCaracteres(e,contenido,caracteres) {
    var tecla=  e.keyCode? e.keyCode : e.charCode;
    
    // 8 backspace
    // 46 suprimir
    i++;
    console.log("longitud de la cadena: "+contenido.length);
    
    if (contenido.length==0) {
        document.getElementById("textAreaMensaje").style.visibility="hidden";
    } else {
        document.getElementById("textAreaMensaje").style.visibility="visible";
        document.getElementById("textAreaMensaje").innerHTML="Caracteres escritos: "+contenido.length+" Le quedan : "+(caracteres-contenido.length)+" caracteres disponibles";

    }
    if (tecla==8 || tecla==46) {
        return true;
    }
    if (contenido.length==caracteres) {
        document.getElementById("textAreaMensaje").innerHTML="Ha llegado al limite de caracteres permitidos";
        return false;
    }
     else 
        return true;
    

}*/



function validar() {
    var error = false;
    var mensaje = "";
     /* acceder al valor del campo de un formulario */
     var nombre = $("#name").val();
     var apellido = $("#last-name").val();
     var email = $("#mail").val();

    //  var regexnombre =  /^[a-zA-Z]+$/;
    var regexemail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
     if (nombre == '') {
        mensaje += "<p>El nombre es obligatorio</p>";
        error = true;
     }
    
    if (apellido == '') {
        mensaje += "<p>El apellido es obligatorio</p>";
        error = true;
    }

    if (!email.match(regexemail)) {
        mensaje += "<p>Debe ser un texto</p>";
        error = true;
    }

    if (error == true) {
        $("#mensaje").html(mensaje);
        return false;
    }else{
        return true;
    }
}





var i=0;

function cuentaCaracteres(e,contenido,caracteres) {
    var tecla=  e.keyCode? e.keyCode : e.charCode;
    
    // 8 backspace
    // 46 suprimir
    i++;
    console.log("longitud de la cadena: "+contenido.length);
    
    if (contenido.length==0) {
        $("#textAreaMensaje").css("visibility", "hidden");

        // document.getElementById("textAreaMensaje").style.visibility="hidden";
    } else {
        console.log("hhsss");
        
        $("#textAreaMensaje").css("visibility", "visible");
        $("#textAreaMensaje").html("Caracteres escritos: "+contenido.length+" Le quedan : "+(caracteres-contenido.length)+" caracteres disponibles");
        // document.getElementById("textAreaMensaje").style.visibility="visible";
        // document.getElementById("textAreaMensaje").innerHTML="Caracteres escritos: "+contenido.length+" Le quedan : "+(caracteres-contenido.length)+" caracteres disponibles";

    }
    if (tecla==8 || tecla==46) {
        return true;
    }
    if (contenido.length==caracteres) {
        $("#textAreaMensaje").html("Ha llegado al limite de caracteres permitidos");
        // document.getElementById("textAreaMensaje").innerHTML="Ha llegado al limite de caracteres permitidos";
        return false;
    }
     else 
        return true;
    

}