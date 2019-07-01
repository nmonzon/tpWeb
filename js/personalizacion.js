
function changeNameEvent(){
    var nameEvent=document.getElementById('name-event');
    document.getElementById('newNameEvent').innerHTML= nameEvent.value.toUpperCase();
}

function changeColour(value)
{
    var background = document.body.style.backgroundColor;;
    switch(value)
    {
        case 'b':
            background = "lightskyblue";
        break;
        case 'r':
            background = "crimson";
        break;
        case 'gr':
            background = "lightslategrey";
        break;
        case 'g':
            background = "forestgreen";
        break;
        case 'p':
            background = "lightpink";
        break;
    }
    document.getElementsByClassName("photoEvent")[0].style.backgroundColor = background;
}

function changeFontSize(value){
    
    var size = '20';
    switch(value)
    {
        case '20':
            size = "20px";
        break;
        case '28':
            size = "28px";
        break;
        case '32':
            size = "32px";
        break;
        case '48':
            size = "48px";
        break;
        case '60':
            size = "60px";
        break;
    }
    document.getElementById("newNameEvent").style.fontSize = size;
}