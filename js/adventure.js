//Game Variables
var room = 1
var life = 5
var monsterLife = 3
var gameState

//Other Variables
var getMap = document.getElementsByClassName('mapimage')

//Room Functions
function roomSelecter(input) {
	if (gameState === 'stopped') {return}
	//if (life <= 0) {return}
	if (input === 1) {firstRoom()}
	else if (input === 2) {secondRoom()}
	else if(input === 3) {thirdRoom()}
	else if(input === 4) {fourthRoom()}
}
function firstRoom(text) {
	room = 1
	life = 5
	roomButtonChanger(2,3)
	textBox("Healing fountain",'orange')
	getMap[0].setAttribute('src','images/adventure/r1.jpg')
	var spawnChance = Math.floor((Math.random() * 10))
}
function secondRoom(text) {
	room = 2
	roomButtonChanger(1)
	textBox("Random dead end",'orange')
	getMap[0].setAttribute('src','images/adventure/r2.jpg')
	var spawnChance = Math.floor((Math.random() * 10))
	if (spawnChance <= 3) {
		textBox('Entering combat','red')
		combat()
	}
}
function thirdRoom(text) {
	room = 3
	roomButtonChanger(1,4)
	textBox("The great hallway",'orange')
	getMap[0].setAttribute('src','images/adventure/r3.jpg')
	var spawnChance = Math.floor((Math.random() * 10))
}
function fourthRoom(text) {
	room = 4
	roomButtonChanger(3)
	textBox("Careful of monsters",'orange')
	getMap[0].setAttribute('src','images/adventure/r4.jpg')
	var spawnChance = Math.floor((Math.random() * 10))
	if (spawnChance <= 3) {
		textBox('Entering combat','red')
		combat()
	}
}
function roomButtonChanger(button1,button2) {
	updateDisplay()
	if (button1 === undefined) {button1 = 0}
	if (button2 === undefined) {button2 = 0}
	document.getElementsByClassName('firstroombutton')[0].onclick = function() {roomSelecter(button1)}
	document.getElementsByClassName('firstroombutton')[0].innerHTML = "Room " + button1
	document.getElementsByClassName('secondroombutton')[0].onclick = function() {roomSelecter(button2)}
	document.getElementsByClassName('secondroombutton')[0].innerHTML = "Room " + button2
}

//Other Functions
function combat() {
	gameState = 'stopped'
	document.getElementsByClassName('attack')[0].onclick = function() {combat()}
	var playerAttack = Math.floor((Math.random() * 11))
	var monsterAttack = Math.floor((Math.random() * 11))
	if (playerAttack <= 5) {
		monsterLife--
		textBox('You hit the monster','','15px')
	}
	else(textBox('You miss','yellow','15px'))
	if (monsterAttack <= 5) {
		life--
		textBox('The monster hit you','red','15px')
	}
	else (textBox('You dodged','blue','15px'))
	if (life <= 0) {
		textBox('You Died','red','25px')
		updateDisplay('leftcombat')
	}
	if (monsterLife <= 0) {
		textBox('The monster Died')
		updateDisplay('leftcombat')
		gameState = 'started'
		monsterLife = 3
	}
}
function updateDisplay(input) {
	document.getElementsByClassName('roomnum')[0].innerHTML = 'Room ' + room
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

