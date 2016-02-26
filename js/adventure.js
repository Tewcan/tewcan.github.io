//Game Variables
var life = 5
var monsterLife = 3
var gameState
//Other Variables
var getMap = document.getElementsByClassName('mapimage')

//Room Functions
function roomSelecter(input) {
	if (gameState === 'stopped') {return}
	//if (life <= 0) {return}
	if (input === room[0]) {firstRoom()}
	else if (input === room[1]) {secondRoom()}
	else if(input === room[2]) {thirdRoom()}
	else if(input === room[3]) {fourthRoom()}
	else if(input === room[4]) {room5()}
}
function firstRoom(text) {
	currentRoom = room[0]
	life = 5
	//theRoomFunction(room[1],'','orange','-1115px -103')
	roomButtonChanger(room[1])
	textBox("",'orange')
	changeMap('-1115px -103px')
	var spawnChance = Math.floor((Math.random() * 10))
}
function secondRoom(text) {
	currentRoom = room[1]
	roomButtonChanger(room[2],room[0])
	textBox("",'orange')
	changeMap('-1125px -240px')
	var spawnChance = Math.floor((Math.random() * 10))
}
function thirdRoom(text) {
	currentRoom = room[2]
	roomButtonChanger(room[3],room[1])
	textBox("",'orange')
	changeMap('-1115px -380px')
	var spawnChance = Math.floor((Math.random() * 10))
}
function fourthRoom(text) {
	currentRoom = room[3]
	roomButtonChanger(room[4],room[2])
	textBox("Careful of monsters",'lightblue')
	changeMap('-1046px -550px')
	var spawnChance = Math.floor((Math.random() * 10))
	if (spawnChance <= 3) {
		textBox('Entering combat','red','25px')
		combat()
	}
}
function room5(text) {
	currentRoom = room[3]
	roomButtonChanger(room[3])
	textBox("We've almost made it",'lightblue')
	changeMap('-972px -702px')
	var spawnChance = Math.floor((Math.random() * 10))
	if (spawnChance <= 3) {
		textBox('Entering combat','red','25px')
		combat()
	}
}
function roomButtonChanger(button1,button2,button3,button4) {
	updateDisplay()
	var but1 = document.getElementsByClassName('adventurebutton')[1]
	var but2 = document.getElementsByClassName('adventurebutton')[2]
	var but3 = document.getElementsByClassName('adventurebutton')[3]
	var but4 = document.getElementsByClassName('adventurebutton')[4]
	if (button1 === undefined) {but1.style.display = 'none'}
		else {
			but1.style.display ='initial'
			but1.onclick = function() {roomSelecter(button1)}
			but1.innerHTML = button1
		}
	if (button2 === undefined) {but2.style.display = 'none'}
		else {
			but2.style.display ='initial'
			but2.onclick = function() {roomSelecter(button2)}
			but2.innerHTML = button2
		}
	if (button3 === undefined) {but3.style.display = 'none'}
		else {
			but3.style.display ='initial'
			but3.onclick = function() {roomSelecter(button2)}
			but3.innerHTML = button2
		}
	if (button4 === undefined) {but4.style.display = 'none'}
		else {
			but4.style.display ='initial'
			but4.onclick = function() {roomSelecter(button2)}
			but4.innerHTML = button2
		}
}
/*function theRoomFunction(r1,r2,r3,r4,text,color,position) {
	roomButtonChanger(r1,r2,r3,r4)
	textBox(text,color)
	changeMap(position)
}*/

//Other Functions
function changeMap(position) {
	document.getElementsByClassName('mapimage')[0].style.backgroundPosition = position
	document.getElementsByClassName('roomnum')[0].innerHTML = currentRoom
}
function combat() {
	gameState = 'stopped'
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
		textBox('You Died','red','30px')
		updateDisplay('leftcombat')
	}
	if (monsterLife <= 0) {
		textBox('The monster Died','','25px')
		updateDisplay('leftcombat')
		gameState = 'started'
		monsterLife = 3
	}
}
//function flee () {
//	gameState = 'started'
//}
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




var room = ['Inside the Barrow','Narrow Tunnel','Foot Bridge','Great Cavern','Shallow Ford']
