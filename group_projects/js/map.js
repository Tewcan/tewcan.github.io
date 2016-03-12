function mapFunction() {
var keyBoard = {}
var hero = {
    x: 80,
    y: 40
}
var randomX = Math.floor((Math.random() * 550) + 30)
var randomY = Math.floor((Math.random() * 350) + 30)
var enemy = {
    x: randomX,
    y: randomY
}
var exit = {x:650,y:350}

var bushleft = {x:0,y:0,w:50,h:450}
var bushright = {x:650,y:0,w:50,h:355}
var bushtop = {x:0,y:0,w:700,h:50}
var bushbottom = {x:0,y:450,w:700,h:50}
var bush0 = {x:150,y:50,w:50,h:150}
var bush1 = {x:150,y:250,w:300,h:50}
var bush2 = {x:317,y:91,w:50,h:50}
var bush3 = {x:400,y:150,w:250,h:50}
var bush4 = {x:500,y:350,w:100,h:50}
var bush5 = {x:420,y:330,w:50,h:50}
var bush6 = {x:150,y:400,w:50,h:50}
var layout = [bushleft,bushright,bushtop,bushbottom,bush0,bush1,bush2,bush3,bush4,bush5,bush6]

addEventListener('keydown', function(input) {
    keyBoard[input.keyCode] = true
},false);
addEventListener('keyup', function(input) {
    delete keyBoard[input.keyCode]
},false);

function gameUpdate() {
    if (37 in keyBoard) { //left
        if (collisionFunciton(3,0,0,0) === true) {}
        else {hero.x -= 3}}
    if (39 in keyBoard) { //right
        if (collisionFunciton(0,3,0,0) === true) {}
        else {hero.x += 3}}
    if (38 in keyBoard) { //up
        if (collisionFunciton(0,0,3,0) === true) {}
        else {hero.y -= 3}}
    if (40 in keyBoard) { //down
        if (collisionFunciton(0,0,0,3) === true) {}
        else {hero.y += 3}}
    function collisionFunciton(left,right,up,down) {
        for (var i = 0; i < layout.length; i++) {
            if (hero.x <= (layout[i].x + (layout[i].w - 20) + left) && layout[i].x <= (hero.x + 25 + right) &&
                hero.y <= (layout[i].y + (layout[i].h - 20) + up) && layout[i].y <= (hero.y + 25 + down)) {return true}
        }
    }

    //player and monster collide
    if (hero.x <= (enemy.x + 25) && enemy.x <= (hero.x + 25) &&
        hero.y <= (enemy.y + 25) && enemy.y <= (hero.y + 25) ) {
        stopTimer()
        alert('combat') }
    if (hero.x <= (exit.x + 25) && exit.x <= (hero.x + 25) &&
        hero.y <= (exit.y + 25) && exit.y <= (hero.y + 25) ) {
        document.getElementsByTagName('body')[0].style.backgroundColor = 'red' }

    document.getElementsByClassName('enemy')[0].style.left = enemy.x + 'px'
    document.getElementsByClassName('enemy')[0].style.top = enemy.y + 'px'
    document.getElementsByClassName('hero')[0].style.left = hero.x + 'px'
    document.getElementsByClassName('hero')[0].style.top = hero.y + 'px'
};
function updateMap() {
    for (var i = 0; i < layout.length; i++) {
        var bushDiv = document.createElement('div')
        bushDiv.setAttribute('class','bush')
        var heroDiv = document.getElementsByClassName('map')[0]
        heroDiv.appendChild(bushDiv)
        document.getElementsByClassName('bush')[i].style.left = layout[i].x + 'px'
        document.getElementsByClassName('bush')[i].style.top = layout[i].y + 'px'
        document.getElementsByClassName('bush')[i].style.width = layout[i].w + 'px'
        document.getElementsByClassName('bush')[i].style.height = layout[i].h + 'px'
    }
}
updateMap()
var gameTimer = setInterval(function(){
    gameUpdate()
}, 20);
function stopTimer() {
    clearInterval(gameTimer)
}

}