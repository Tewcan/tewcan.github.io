var hero = {
    x: 250,
    y: 250
}
function moveHero() {
    var domHerox = document.getElementsByClassName('hero')[0].style.left = hero.x + 'px'
    var domHeroy = document.getElementsByClassName('hero')[0].style.top = hero.y + 'px'
}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37: //left
            if (hero.x <=30) {}
            else {hero.x -= 5}
        break;
        case 39: //right
            if (hero.x >=620) {}
            else {hero.x += 5}
        break;
        case 38: //up
            if (hero.y <=30) {}
            else {hero.y -= 5}
        break;
        case 40: //down
            if (hero.y >=430) {}
            else {hero.y += 5}
        break;
    }
};

function docReady(){
    window.addEventListener('keydown', moveSelection);
}
setInterval(function(){
    moveHero()
}, 10);
