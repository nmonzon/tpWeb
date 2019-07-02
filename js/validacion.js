function validar() {
    var error = false;
    var nombre = document.getElementById("name").value;
    var apellido =document.getElementById("last-name").value;
    var telefono = document.getElementById("phone").value;
    var regexTelefono = /^[0-9]{4}[-][0-9]{4}+$/;
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


    if(regexTelefono.test(telefono)){
		error=true;
        mensajeError+="<p>telefono invalido</p>";
    }

     
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
    

}