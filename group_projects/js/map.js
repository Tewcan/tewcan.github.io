function mapFunction() {
var gameLoop = setInterval(function(){
    movementUpdate()
}, 20);
function stopGameLoop() { clearInterval(gameLoop) }

var keysDown = {}
addEventListener('keydown', function(input) {
    keysDown[input.keyCode] = true
},false);
addEventListener('keyup', function(input) {
    delete keysDown[input.keyCode]
},false);

function movementUpdate() {
    var charDom = document.getElementsByClassName('character')[0]
    if (38 in keysDown || 87 in keysDown) { //up
        charDom.style.backgroundPosition = '-64px -64px'
        if (collisionFunciton(0,0,3,0) === true) {}
        else {character.y -= 3}}
    if (40 in keysDown || 83 in keysDown) { //down
        charDom.style.backgroundPosition = '-4px -4px'
        if (collisionFunciton(0,0,0,3) === true) {}
        else {character.y += 3}}
    if (37 in keysDown || 65 in keysDown) { //left
        charDom.style.backgroundPosition = '-64px -4px'
        if (collisionFunciton(3,0,0,0) === true) {}
        else {character.x -= 3}}
    if (39 in keysDown || 68 in keysDown) { //right
        charDom.style.backgroundPosition = '-4px -64px'
        if (collisionFunciton(0,3,0,0) === true) {}
        else {character.x += 3}}
    function collisionFunciton(left,right,up,down) {
        for (var i = 0; i < rooms[currentRoom].length; i++) {
            if (character.x <= (rooms[currentRoom][i].x + (rooms[currentRoom][i].w - 20) + left) &&
                rooms[currentRoom][i].x <= (character.x + 30 + right) &&
                character.y <= (rooms[currentRoom][i].y + (rooms[currentRoom][i].h - 40) + up) &&
                rooms[currentRoom][i].y <= (character.y + 48 + down)) {
                if (rooms[currentRoom][i].type === 'entrance') { //Entrance
                    currentRoom = rooms[currentRoom][0].r
                    character.x = rooms[currentRoom][1].nx
                    character.y = rooms[currentRoom][1].ny
                    mapUpdate()
                    return false}
                if (rooms[currentRoom][i].type === 'exit') { //Exit
                    currentRoom = rooms[currentRoom][1].r
                    character.x = rooms[currentRoom][0].nx
                    character.y = rooms[currentRoom][0].ny
                    mapUpdate()
                    return false}
                if (rooms[currentRoom][i].type === 'enemy') { //player and monster collide
                    stopGameLoop()
                    beginCombat(rooms[currentRoom][i])
                    return false
                }
                else {return true}
            }
        }
    }
    charDom.style.left = character.x + 'px'
    charDom.style.top = character.y + 'px'
};
function enemyCreation(numberOfEnemys,level) {
   for (var i = 0; i < rooms[currentRoom].length; i++) { //deletes old enemys
        if (rooms[currentRoom][i].type === 'enemy') {rooms[currentRoom].splice(i, 3)}}
    function mob(name,health,damage,exp,gold) {
        var randomX = Math.floor((Math.random()* 550) + 30)
        var randomY = Math.floor((Math.random()* 400) + 30)
        //map properties
        this.type = 'enemy'
        this.x = randomX
        this.y = randomY
        this.w = 50
        this.h = 50
        this.name = name
//-------------------------------------start of monster stats----------------------------------------------//
        this.level = level
        this.health = healthMod * health
        this.currentHealth = healthMod * health
        this.damageMax = damageMod * damage
        this.damageMin = Math.floor(damageMod * damage / 2)
        this.exp = expMod * exp
        this.gold = goldMod * gold
    }
    var healthMod = 2 * level
    var damageMod = Math.floor(1.1 * level)
    var expMod = Math.floor(1.5 * level)
    var goldMod = Math.floor(1.3 * level)
    function mobCreation() {
        var typeOf = Math.floor((Math.random()* 3) + 1)
        console.log(typeOf)
        if (typeOf === 1) {rooms[currentRoom].push(new mob ('humanoid',9,10,5,1))}
        else if (typeOf === 2) {rooms[currentRoom].push(new mob ('beast',10,11,6,2))}
        else if (typeOf === 3) {rooms[currentRoom].push(new mob ('slime',11,12,7,3))}
    }
//-------------------------------------end of monster stats----------------------------------------------//
    for (var j = 1; j <= numberOfEnemys; j++) {mobCreation()}
    console.log(rooms[currentRoom])
}

function mapUpdate() {
    var tile = document.getElementsByClassName('tile')
    var mapDiv = document.getElementsByClassName('map__tiles')[0]
    while (mapDiv.firstChild) {
        mapDiv.removeChild(mapDiv.firstChild)}
    enemyCreation(rooms[currentRoom][0].enemy,rooms[currentRoom][0].level)
    for (var i = 0; i < rooms[currentRoom].length; i++) {
        var tileDiv = document.createElement('div')
        tileDiv.setAttribute('class','tile ')
        mapDiv.appendChild(tileDiv)
        tile[i].style.left = rooms[currentRoom][i].x + 'px'
        tile[i].style.top = rooms[currentRoom][i].y + 'px'
        tile[i].style.width = rooms[currentRoom][i].w + 'px'
        tile[i].style.height = rooms[currentRoom][i].h + 'px'
        var classImage = rooms[currentRoom][i].name
        tile[i].className += classImage
    }[]
}
mapUpdate()
}