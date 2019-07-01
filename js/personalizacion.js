
function changeNameEvent(){
    var nameEvent=document.getElementById('name-event');
    document.getElementById('newNameEvent').innerHTML= nameEvent.value.toUpperCase();
}

function changeColour(value)
{
    switch(value)
    {
        case 'b':
            color = "lightskyblue";
        break;
        case 'r':
            color = "crimson";
        break;
        case 'gr':
            color = "lightslategrey";
        break;
        case 'g':
            color = "forestgreen";
        break;
        case 'p':
            color = "lightpink";
        break;
    }
    document.getElementById("newNameEvent").style.color = color;
}

function changeBackgroundColour(value)
{
    switch(value)
    {
        case 'bkg1':
            background = "url(./img/background/background1.jpg)";
        break;
        case 'bkg2':
            background = "url(./img/background/background2.jpg)";
        break;
        case 'bkg3':
            background = "url(./img/background/background3.jpg)";
        break;
        case 'bkg4':
            background = "url(./img/background/background4.jpg)";
        break;
        case 'bkg5':
            background = "url(./img/background/background5.jpg)";
        break;
    }
    document.getElementsByClassName("photoEvent")[0].style.backgroundImage = background;
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