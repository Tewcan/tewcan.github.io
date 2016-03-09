function mapFunction() {
var keyBoard = {}
var hero = {
    x: 250,
    y: 250
}
var enemy = {
    x: 250,
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
        if (hero.x <=30) {}
        else {hero.x -= 3}}
    if (39 in keyBoard) { //right
        if (hero.x >=630) {}
        else {hero.x += 3}}
    if (38 in keyBoard) { //up
        if (hero.y <=30) {}
        else {hero.y -= 3}}
    if (40 in keyBoard) { //down
        if (hero.y >=430) {}
        else {hero.y += 3}}

    //player and monster collide
    if (hero.x <= (enemy.x + 25) && enemy.x <= (hero.x + 25) &&
        hero.y <= (enemy.y + 25) && enemy.y <= (hero.y + 25) ) {
        stopTimer()
        alert('combat') }

    document.getElementsByClassName('enemy')[0].style.left = enemy.x + 'px'
    document.getElementsByClassName('enemy')[0].style.top = enemy.y + 'px'
    document.getElementsByClassName('hero')[0].style.left = hero.x + 'px'
    document.getElementsByClassName('hero')[0].style.top = hero.y + 'px'
};
var gameTimer = setInterval(function(){
    gameUpdate()
}, 20);
function stopTimer() {
    clearInterval(gameTimer)
}

}
