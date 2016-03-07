document.getElementById("character").style.top = 0;
document.getElementById("character").style.left = 0;

document.body.onkeyup = function() {
var e = event.keyCode,
    charTop = parseInt(document.getElementById("character").style.top),
    charLeft = parseInt(document.getElementById("character").style.left);

    if (e == 40) { //down function
        document.getElementById("character").style.top = (parseInt(document.getElementById("character").style.top)) + 10 + "px";
    } else if (e == 37) { //left function
        document.getElementById("character").style.left = (parseInt(document.getElementById("character").style.left)) - 10 + "px";
    } else if (e == 39) { //right function
        document.getElementById("character").style.left = (parseInt(document.getElementById("character").style.left)) + 10 + "px";
    } else if (e == 38) { //up function
        document.getElementById("character").style.top = (parseInt(document.getElementById("character").style.top)) - 10 + "px";
    }

}