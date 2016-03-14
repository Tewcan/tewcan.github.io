function mapFunction() {
var hero = {
    x: 75,
    y: 50
}
var gameLoop = setInterval(function(){
    gameUpdate()
}, 20);
function stopGameLoop() { clearInterval(gameLoop) }

var keysDown = {}
addEventListener('keydown', function(input) {
    keysDown[input.keyCode] = true
},false);
addEventListener('keyup', function(input) {
    delete keysDown[input.keyCode]
},false);

function gameUpdate() {
    if (37 in keysDown || 65 in keysDown) { //left
        if (collisionFunciton(3,0,0,0) === true) {}
        else {hero.x -= 3}}
    if (39 in keysDown || 68 in keysDown) { //right
        if (collisionFunciton(0,3,0,0) === true) {}
        else {hero.x += 3}}
    if (38 in keysDown || 87 in keysDown) { //up
        if (collisionFunciton(0,0,3,0) === true) {}
        else {hero.y -= 3}}
    if (40 in keysDown || 83 in keysDown) { //down
        if (collisionFunciton(0,0,0,3) === true) {}
        else {hero.y += 3}}
    function collisionFunciton(left,right,up,down) {
        for (var i = 0; i < rooms[currentRoom].length; i++) {
            if (hero.x <= (rooms[currentRoom][i].x + (rooms[currentRoom][i].w - 20) + left) &&
                rooms[currentRoom][i].x <= (hero.x + 30 + right) &&
                hero.y <= (rooms[currentRoom][i].y + (rooms[currentRoom][i].h - 35) + up) &&
                rooms[currentRoom][i].y <= (hero.y + 45 + down)) {
                if (rooms[currentRoom][i].name === 'entrance') { //Entrance
                    currentRoom = rooms[currentRoom][0].r
                    hero.x = rooms[currentRoom][1].nx
                    hero.y = rooms[currentRoom][1].ny
                    mapUpdate()
                    return false}
                if (rooms[currentRoom][i].name === 'exit') { //Exit
                    currentRoom = rooms[currentRoom][1].r
                    hero.x = rooms[currentRoom][0].nx
                    hero.y = rooms[currentRoom][0].ny
                    mapUpdate()
                    return false}
                if (rooms[currentRoom][i].name === 'enemy') { //player and monster collide
                    stopGameLoop()
                    beginCombat()
                    return false
                }
                else {return true}
            }
        }
    }
    document.getElementsByClassName('hero')[0].style.left = hero.x + 'px'
    document.getElementsByClassName('hero')[0].style.top = hero.y + 'px'
};

function mapUpdate() {
    var tile = document.getElementsByClassName('tile')
    var mapDiv = document.getElementsByClassName('map__tiles')[0]
    while (mapDiv.firstChild) {
        mapDiv.removeChild(mapDiv.firstChild)}
    for (var i = 0; i < rooms[currentRoom].length; i++) {
        if (rooms[currentRoom][i].x === 'r') {rooms[currentRoom][i].x = Math.floor((Math.random() * 350) + 30) }
        if (rooms[currentRoom][i].y === 'r') {rooms[currentRoom][i].y = Math.floor((Math.random() * 350) + 30) }
        var tileDiv = document.createElement('div')
        tileDiv.setAttribute('class','tile ')
        mapDiv.appendChild(tileDiv)
        tile[i].style.left = rooms[currentRoom][i].x + 'px'
        tile[i].style.top = rooms[currentRoom][i].y + 'px'
        tile[i].style.width = rooms[currentRoom][i].w + 'px'
        tile[i].style.height = rooms[currentRoom][i].h + 'px'
        var classImage = rooms[currentRoom][i].name
        tile[i].className += classImage
    }
}
mapUpdate()
}