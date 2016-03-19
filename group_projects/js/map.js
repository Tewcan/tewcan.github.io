function updateStatsDisplay() {
    document.getElementById('player-name').innerHTML = character.name
    document.getElementById('stats-health').innerHTML = character.currentHP + '/' + character.maxHP
    document.getElementById('stats-mana').innerHTML = character.currentMana + '/' + character.maxMana
    document.getElementById('race').innerHTML = character.race
    document.getElementById('gender').innerHTML = character.gender
    document.getElementById('gold').innerHTML = character.gold
    document.getElementById('strength').innerHTML = character.stats.str
    document.getElementById('dexterity').innerHTML = character.stats.dex
    document.getElementById('intelligence').innerHTML = character.stats.int
    document.getElementById('player-damage').innerHTML = character.minDamage + ' - ' + character.maxDamage
    document.getElementById('stamina').innerHTML = character.stats.sta
    document.getElementById('player-level').innerHTML = character.level
    document.getElementById('exp').innerHTML = character.currentExp + '<br>'
    document.getElementById('exp-bar').style.width = character.currentExp + '%'//not done
    document.getElementById('next-lv').innerHTML = character.level + 1
}
var currentRoom = 0
function mapFunction(gameState) {
    updateStatsDisplay()
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
            if (collisionFunciton(character,0,0,3,0) === true) {}
            else {character.y -= 3}}
        if (40 in keysDown || 83 in keysDown) { //down
            charDom.style.backgroundPosition = '-4px -4px'
            if (collisionFunciton(character,0,0,0,3) === true) {}
            else {character.y += 3}}
        if (37 in keysDown || 65 in keysDown) { //left
            charDom.style.backgroundPosition = '-64px -4px'
            if (collisionFunciton(character,3,0,0,0) === true) {}
            else {character.x -= 3}}
        if (39 in keysDown || 68 in keysDown) { //right
            charDom.style.backgroundPosition = '-4px -64px'
            if (collisionFunciton(character,0,3,0,0) === true) {}
            else {character.x += 3}}
        charDom.style.left = character.x + 'px'
        charDom.style.top = character.y + 'px'
    };

    function collisionFunciton(input,left,right,up,down) {
        for (var i = 0; i < rooms[currentRoom].length; i++) {
            if (input.x <= (rooms[currentRoom][i].x + (rooms[currentRoom][i].w - 20) + left) &&
                rooms[currentRoom][i].x <= (input.x + 30 + right) &&
                input.y <= (rooms[currentRoom][i].y + (rooms[currentRoom][i].h - 40) + up) &&
                rooms[currentRoom][i].y <= (input.y + 48 + down)) {
                if (rooms[currentRoom][i].name === 'entrance') { //Entrance
                    currentRoom = rooms[currentRoom][0].r
                    if (character.x < 100) {character.x = 590}
                    if (character.x > 595) {character.x = 40}
                    if (character.y > 395) {character.y = 20}
                    if (character.y < 15) {character.y = 390}
                    mapUpdate()
                    return false    }
                if(rooms[currentRoom][i].name === 'exit') { //Exit
                    var whichDoor = 1
                    if (rooms[currentRoom][i].type === 'door1') {whichDoor = 1}
                    if (rooms[currentRoom][i].type === 'door2') {whichDoor = 2}
                    if (rooms[currentRoom][i].type === 'door3') {whichDoor = 3}
                    currentRoom = rooms[currentRoom][whichDoor].r
                    if (character.x < 100) {character.x = 590}
                    if (character.x > 595) {character.x = 40}
                    if (character.y > 395) {character.y = 20}
                    if (character.y < 15) {character.y = 390}
                    mapUpdate() }
                if (rooms[currentRoom][i].type === 'enemy') { //player and monster collide
                    stopGameLoop()
                    rooms[currentRoom][i].x = 2000
                    if (document.getElementsByClassName('tile')[i] === undefined) {}
                    else { document.getElementsByClassName('tile')[i].style.left = rooms[currentRoom][i].x + 'px'}
                    beginCombat(rooms[currentRoom][i])
                    return false    }
                if (rooms[currentRoom][i].name === 'fountain') { //fountain
                    updateStatsDisplay()
                    character.currentHP = character.maxHP
                    character.currentMana = character.maxMana   }
                if (input.type === 'enemy') { //positioning monster
                    if (input.x < 50) {input.x += 40}
                        else {input.x -= 40}
                    if (input.y < 50) {input.y += 40}
                        else {input.y -= 40}
                    collisionFunciton(input,0,0,0,0)    }
                else {return true}
            }
        }
    }


function enemyCreation(numberOfEnemys,level) {
       for (var i = 0; i < rooms[currentRoom].length; i++) { //deletes old enemys
            if (rooms[currentRoom][i].type === 'enemy') {rooms[currentRoom].splice(i, 3)}}
        function mob(name,health,damage,exp,gold) {
            var randomX = Math.floor((Math.random()* 550) + 30)
            var randomY = Math.floor((Math.random()* 400) + 30)
            this.type = 'enemy'
            this.x = randomX
            this.y = randomY
            this.w = 50
            this.h = 50
            this.name = name
            collisionFunciton(this,0,0,0,0)
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
            var min,max
            if (rooms[currentRoom][0].tileset === ' forest') {max = 3,min = 1}
            if (rooms[currentRoom][0].tileset === ' deadforest') {max = 3,min = 7}
            if (rooms[currentRoom][0].tileset === ' castle') {max = 6,min = 10}
            if (rooms[currentRoom][0].tileset === ' fireland') {max = 10,min = 14}
            var typeOf = Math.floor(Math.random() * (max - min + 1)) + min
            if (typeOf === 1) {rooms[currentRoom].push(new mob ('humanoid',9,10,5,1))}
            if (typeOf === 2) {rooms[currentRoom].push(new mob ('beast',10,11,6,2))}
            if (typeOf === 3) {rooms[currentRoom].push(new mob ('slime',11,12,7,3))}
            if (typeOf === 4) {rooms[currentRoom].push(new mob ('monster1',9,10,5,1))}
            if (typeOf === 5) {rooms[currentRoom].push(new mob ('monster2',10,11,6,2))}
            if (typeOf === 6) {rooms[currentRoom].push(new mob ('monster3',11,12,7,3))}
            if (typeOf === 7) {rooms[currentRoom].push(new mob ('monster4',9,10,5,1))}
            if (typeOf === 8) {rooms[currentRoom].push(new mob ('monster5',10,11,6,2))}
            if (typeOf === 9) {rooms[currentRoom].push(new mob ('monster6',11,12,7,3))}
            if (typeOf === 10) {rooms[currentRoom].push(new mob ('monster7',9,10,5,1))}
            if (typeOf === 11) {rooms[currentRoom].push(new mob ('monster8',10,11,6,2))}
            if (typeOf === 12) {rooms[currentRoom].push(new mob ('monster9',11,12,7,3))}
        }
    //-------------------------------------end of monster stats----------------------------------------------//
        for (var j = 1; j <= numberOfEnemys; j++) {mobCreation()}
    }

    function mapUpdate() {
        document.getElementsByClassName('map')[0].className = 'map'
        document.getElementsByClassName('map')[0].className += rooms[currentRoom][0].tileset
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
        }
    }
if (gameState === 'start') {mapUpdate()}
}