function mapFunction() {
var hero = {
    x: 600,
    y: 400
}
var randomX = Math.floor((Math.random() * 550) + 30)
var randomY = Math.floor((Math.random() * 350) + 30)
var enemy = {
    x: randomX,
    y: randomY
}

//Rooms
var currentRoom = 0
var layout0 = [entrance = {nx:600,ny:350},exit = {x:650,y:350,w:50,h:110,r:1,class:'exit'},bushleft = {x:0,y:0,w:50,h:450},bushright = {x:650,y:0,w:50,h:355},bushtop = {x:0,y:0,w:700,h:50},bushbottom = {x:0,y:450,w:700,h:50},bush0 = {x:150,y:50,w:50,h:150},
    bush1 = {x:150,y:250,w:300,h:50,class:'water'},bush2 = {x:317,y:91,w:50,h:50},bush3 = {x:400,y:150,w:250,h:50},bush4 = {x:500,y:350,w:100,h:50},bush5 = {x:420,y:330,w:50,h:50},bush6 = {x:150,y:400,w:50,h:50}]
var layout1 = [entrance = {x:0,y:350,nx:50,ny:350,w:50,h:110,r:0,class:'entrance'},exit = {x:300,y:0,w:100,h:50,r:2,class:'exit'},bushleft = {x:0,y:0,w:50,h:350},bushright = {x:650,y:0,w:50,h:450},bushtop = {x:0,y:0,w:300,h:50},bushbottom = {x:0,y:450,w:700,h:50},bush0 = {x:150,y:50,w:50,h:150},
    bush1 = {x:150,y:250,w:300,h:50},bush2 = {x:317,y:91,w:50,h:50},bush3 = {x:400,y:150,w:250,h:50},bush4 = {x:500,y:350,w:100,h:50},bush5 = {x:420,y:330,w:50,h:50},bush6 = {x:400,y:0,w:300,h:50}]
var layout2 = [entrance = {x:300,y:0,nx:100,ny:100,w:100,h:50,r:1,class:'entrance'},exit = {x:0,y:0,w:0,h:0,r:2,class:'exit'},bushleft = {x:0,y:0,w:50,h:350},bushright = {x:650,y:0,w:50,h:450},bushtop = {x:0,y:0,w:300,h:50},bushbottom = {x:0,y:450,w:700,h:50},bush0 = {x:150,y:50,w:50,h:150},
    bush1 = {x:150,y:250,w:300,h:50},bush2 = {x:317,y:91,w:50,h:50},bush3 = {x:400,y:150,w:250,h:50},bush4 = {x:500,y:350,w:100,h:50},bush5 = {x:420,y:330,w:50,h:50},bush6 = {x:400,y:0,w:300,h:50}]
var rooms = [layout0,layout1,layout2]

var keyBoard = {}
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
        for (var i = 0; i < rooms[currentRoom].length; i++) {
            if (hero.x <= (rooms[currentRoom][i].x + (rooms[currentRoom][i].w - 20) + left) &&
                rooms[currentRoom][i].x <= (hero.x + 30 + right) &&
                hero.y <= (rooms[currentRoom][i].y + (rooms[currentRoom][i].h - 35) + up) &&
                rooms[currentRoom][i].y <= (hero.y + 45 + down)) {
                if (rooms[currentRoom][i].class === 'entrance') { //Entrance
                    currentRoom = rooms[currentRoom][0].r
                    hero.x = rooms[currentRoom][0].nx
                    hero.y = rooms[currentRoom][0].ny
                    console.log(hero.x, currentRoom)
                    mapUpdate()
                    return false}
                if (rooms[currentRoom][i].class === 'exit') { //Exit
                    currentRoom = rooms[currentRoom][1].r
                    hero.x = rooms[currentRoom][0].nx
                    hero.y = rooms[currentRoom][0].ny
                    console.log(hero.x, currentRoom)
                    mapUpdate()
                    return false}
                else {return true}
            }
        }
    }

    //player and monster collide
    if (hero.x <= (enemy.x + 25) && enemy.x <= (hero.x + 25) &&
        hero.y <= (enemy.y + 25) && enemy.y <= (hero.y + 25) ) {
        stopGameTimer()
        alert('combat') }

    document.getElementsByClassName('enemy')[0].style.left = enemy.x + 'px'
    document.getElementsByClassName('enemy')[0].style.top = enemy.y + 'px'
    document.getElementsByClassName('hero')[0].style.left = hero.x + 'px'
    document.getElementsByClassName('hero')[0].style.top = hero.y + 'px'
};

function mapUpdate() {
    var tile = document.getElementsByClassName('tile')
    var mapDiv = document.getElementsByClassName('map__tiles')[0]
    while (mapDiv.firstChild) {
        mapDiv.removeChild(mapDiv.firstChild)}
    for (var i = 0; i < rooms[currentRoom].length; i++) {
        var classImage = rooms[currentRoom][i].class
        if (classImage === undefined) { classImage = 'bush'}

        var bushDiv = document.createElement('div')
            bushDiv.setAttribute('class','tile ')
            mapDiv.appendChild(bushDiv)
        tile[i].style.left = rooms[currentRoom][i].x + 'px'
        tile[i].style.top = rooms[currentRoom][i].y + 'px'
        tile[i].style.width = rooms[currentRoom][i].w + 'px'
        tile[i].style.height = rooms[currentRoom][i].h + 'px'
        tile[i].className += classImage
    }
}
mapUpdate()
var gameTimer = setInterval(function(){
    gameUpdate()
}, 20);
function stopGameTimer() {
    clearInterval(gameTimer)
}

}