function mapFunction() {
var keyBoard = {}
var hero = {
    x: 250,
    y: 250
}
var randomX = Math.floor((Math.random() * 550) + 30)
var randomY = Math.floor((Math.random() * 350) + 30)
var enemy = {
    x: randomX,
    y: randomY
}
var bush = {
    x: 150,
    y: 200
}
addEventListener('keydown', function(input) {
    keyBoard[input.keyCode] = true
},false);
addEventListener('keyup', function(input) {
    delete keyBoard[input.keyCode]
},false);

function gameUpdate() {
    if (37 in keyBoard) { //left
        if (hero.x <= (bush.x + 383) && bush.x <= (hero.x + 28) &&
            hero.y <= (bush.y + 25) && bush.y <= (hero.y + 25)) {}
        else if (hero.x < 30) {}
        else {hero.x -= 2}}
    if (39 in keyBoard) { //right
        if (hero.x <= (bush.x + 380) && bush.x <= (hero.x + 25) &&
            hero.y <= (bush.y + 25) && bush.y <= (hero.y + 25)) {hero.x -= 8}
            else if (hero.x > 620) {}
        else {hero.x += 2}}
    if (38 in keyBoard) { //up
        if (hero.x <= (bush.x + 380) && bush.x <= (hero.x + 25) &&
            hero.y <= (bush.y + 28) && bush.y <= (hero.y + 28)) {}
            else if (hero.y < 30) {}
        else {hero.y -= 2}}
    if (40 in keyBoard) { //down
        if (hero.x <= (bush.x + 380) && bush.x <= (hero.x + 25) &&
            hero.y <= (bush.y + 25) && bush.y <= (hero.y + 25)) {hero.y -= 8}
            else if (hero.y > 430) {}
        else {hero.y += 2}}

    //player and monster collide
    if (hero.x <= (enemy.x + 25) && enemy.x <= (hero.x + 25) &&
        hero.y <= (enemy.y + 25) && enemy.y <= (hero.y + 25) ) {
        stopTimer()
        alert('combat') }

    document.getElementsByClassName('enemy')[0].style.left = enemy.x + 'px'
    document.getElementsByClassName('enemy')[0].style.top = enemy.y + 'px'
    document.getElementsByClassName('hero')[0].style.left = hero.x + 'px'
    document.getElementsByClassName('hero')[0].style.top = hero.y + 'px'
    document.getElementsByClassName('bush')[0].style.left = bush.x + 'px'
    document.getElementsByClassName('bush')[0].style.top = bush.y + 'px'
};
var gameTimer = setInterval(function(){
    gameUpdate()
}, 20);
function stopTimer() {
    clearInterval(gameTimer)
}

}