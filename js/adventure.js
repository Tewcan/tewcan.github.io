//Game Variables
var life = 10
var monsterLife = 3
var gameState
var currentRoom = 'Inside the Barrow'

function restart() {
	life = 10
	gameState = 'started'
	roomSelecter(room[0])
	clearTextBox()
	textBox(message[2])
	updateDisplay()
}
//Room Functions
function roomSelecter(input) {
	console.log(room[7])
	if (gameState === 'stopped') {return}
	if (life <= 0) {return}
	changeBackground("url('images/adventure-background.jpg')")
	if (input === room[0]) {theRoomFunction(room[0],'-1115px -103px','','',room[1])}
	else if (input === room[1]) {theRoomFunction(room[1],'-1115px -240px',message[1],'',room[2],room[0])}
	else if(input === room[2]) {theRoomFunction(room[2],'-1115px -380px','','spawn',room[3],room[1])}
	else if(input === room[3]) {theRoomFunction(room[3],'-1046px -550px',message[0],'',room[4],room[2])}
	else if(input === room[4]) {theRoomFunction(room[4],'-972px -702px','','spawn',room[5],room[3])}
	else if(input === room[5]) {theRoomFunction(room[5],'-900px -857px','','spawn',room[8],room[6],room[4])}
	else if(input === room[6]) {theRoomFunction(room[6],'-950px -1015px',message[1],'spawn',room[7],room[5])}
	else if(input === room[7]) {theRoomFunction(room[7],'-929px -1173px','','spawn',room[9],room[8],room[6])}
	else if(input === room[8]) {theRoomFunction(room[8],'-771px -1175px','','spawn',room[10],room[7],room[5])}
	else if(input === room[9]) {theRoomFunction(room[9],'-872px -1321px','','spawn',room[7],room[10])}
	else if(input === room[10]) {theRoomFunction(room[10],'-617px -1332px','','',room[9],room[8])}
}
function theRoomFunction(room,position,text,spawn,r1,r2,r3,r4) {
	currentRoom = room
	changeMap(position)
	textBox(text,'lightblue','25px')
	if (text === 'Healing fountain') {life = 10}
	if (spawn === 'spawn') {
	var spawnChance = Math.floor((Math.random() * 10))
		if (spawnChance <= 2) {
			textBox('Entering combat','red','25px')
			combat()
		}

	}
	buttonChanger(r1,r2,r3,r4)
	updateDisplay()
}
function buttonChanger(b1,b2,b3,b4) {
	var but1 = document.getElementsByClassName('adventurebutton')[1]
	var but2 = document.getElementsByClassName('adventurebutton')[2]
	var but3 = document.getElementsByClassName('adventurebutton')[3]
	var but4 = document.getElementsByClassName('adventurebutton')[4]
	if (b1 === undefined || b1 ==='1') {but1.style.display = 'none'}
		else {
			but1.style.display ='initial'
			but1.onclick = function() {roomSelecter(b1)}
			but1.innerHTML = b1
		}
	if (b2 === undefined || b1 ==='1') {but2.style.display = 'none'}
		else {
			but2.style.display ='initial'
			but2.onclick = function() {roomSelecter(b2)}
			but2.innerHTML = b2
		}
	if (b3 === undefined) {but3.style.display = 'none'}
		else {
			but3.style.display ='initial'
			but3.onclick = function() {roomSelecter(b3)}
			but3.innerHTML = b3
		}
	if (b4 === undefined) {but4.style.display = 'none'}
		else {
			but4.style.display ='initial'
			but4.onclick = function() {roomSelecter(b4)}
			but4.innerHTML = b4
		}
}

//Other Functions
function changeMap(position) {
	document.getElementsByClassName('mapimage')[0].style.backgroundPosition = position
	document.getElementsByClassName('roomnum')[0].innerHTML = currentRoom
}
function combat() {
	gameState = 'stopped'
	changeBackground("url('images/combat.jpg')")
	document.getElementsByClassName('attack')[0].onclick = function() {combat()}
	var playerAttack = Math.floor((Math.random() * 11))
	var monsterAttack = Math.floor((Math.random() * 11))
	if (playerAttack <= 5) {
		monsterLife--
		textBox('You hit the monster','','18px')
	}
	else(textBox('You miss','yellow','15px'))
	if (monsterAttack <= 5) {
		life--
		textBox('The monster hit you','red','18px')
	}
	else (textBox('You dodged','blue','15px'))
	if (life <= 0) {
		changeBackground("url(images/dead.jpg)")
		textBox('You Died','red','30px')
		updateDisplay('leftcombat')
	}
	if (monsterLife <= 0) {
		textBox('The monster Died','','25px')
		updateDisplay('leftcombat')
		gameState = 'started'
		monsterLife = 3
		changeBackground("url('images/adventure-background.jpg')")
	}
}
//function flee () {
//	gameState = 'started'
//}
function changeBackground(input) {
	console.log(input)
	document.getElementsByClassName('background')[0].style.backgroundImage = input
}
function updateDisplay(input) {
	document.getElementsByClassName('life')[0].innerHTML = 'Life: ' + life
	if (input === 'leftcombat') {
		document.getElementsByClassName('attack')[0].onclick = function() {}
	}
}
function textBox(textInput,colorInput,fontInput) {
	updateDisplay()
	var element = document.createElement("h6");
	var text = document.createTextNode(textInput);
	element.style.color = colorInput
	element.style.fontSize = fontInput
	element.appendChild(text);
	var textField = document.getElementsByClassName("textbox")[0]
	textField.appendChild(element);
	textField.insertBefore(element, textField.childNodes[0]);
}
function clearTextBox () {
	var textbox = document.getElementsByClassName("textbox")[0];
	while (textbox.firstChild) {
    	textbox.removeChild(textbox.firstChild);
	}
}
function mathStuff(width,height) {
	width -= 225
	height -= 160
	textBox(height)
	textBox(width)
}



//Text arrays
var room = ['Inside the Barrow','Narrow Tunnel','Foot Bridge','Great Cavern','Shallow Ford','Dark Tunnel','North End of Garden','Formal Garden','Path Near Stream','Toplary','Carousel Room']
var message = ['Careful of monsters','Healing fountain','Restarted']