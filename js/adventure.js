//Game Variables
var life = 10
var monsterLife = 3
var gameState
var currentRoom
var key = 'yes'

function restart() {
	life = 10
	gameState = 'started'
	roomSelecter('0')
	clearTextBox()
	textBox(message[2])
	textBox(message[4])
	changeBackground("url('images/adventure-background.jpg')")
	updateDisplay()
}
//Room Functions
function roomSelecter(input) {
	if (gameState === 'stopped') {return}
	if (life <= 0) {return}
	if (key === 'no' && input === '17') {
		textBox(message[3])
		return
	}
	roomCreator(input)
}
function roomCreator(input) {
	currentRoom = input
	changeMap(rooms[input].position)
	textBox(rooms[input].text)
	if (rooms[input].text === 'Healing fountain') {life = 10}
	if (rooms[input].spawn === 'yes') {
	var spawnChance = Math.floor((Math.random() * 10))
		if (spawnChance <= 2) {
			textBox('Entering combat','red','25px')
			//combat()
		}

	}
	buttonChanger(rooms[input].b1,rooms[input].b2,rooms[input].b3,rooms[input].b4)
	updateDisplay()
}
//Room information
var message = ['Careful of monsters','Healing fountain','Restarted','Locked door',"Find the exit",'Find the key to the door',
'You found the key','Congratulations you escaped!',"Don't step on the human remains",'You found a dragon']
//First wing
var room0 = {name:'Inside the Barrow',position:'-1115px -103px',spawn:'',text:message[4],b1:'1',b2:'',b3:'',b4:''}
var room1 = {name:'Narrow Tunnel',position:'-1115px -240px',spawn:'',text:'',b1:'2',b2:'0',b3:'',b4:''}
var room2 = {name:'Foot Bridge',position:'-1115px -380px',spawn:'yes',text:'',b1:'3',b2:'1',b3:'',b4:''}
var room3 = {name:'Great Cavern',position:'-1046px -550px',spawn:'yes',text:'',b1:'4',b2:'2',b3:'',b4:''}
var room4 = {name:'Shallow Ford',position:'-972px -702px',spawn:'yes',text:'',b1:'5',b2:'3',b3:'',b4:''}
var room5 = {name:'Dark Tunnel',position:'-900px -857px',spawn:'yes',text:'',b1:'8',b2:'6',b3:'4',b4:''}
var room6 = {name:'North End of Garden',position:'-950px -1015px',spawn:'',text:message[1],b1:'7',b2:'5',b3:'',b4:''}
var room7 = {name:'Formal Garden',position:'-929px -1173px',spawn:'yes',text:'',b1:'8',b2:'9',b3:'6',b4:''}
var room8 = {name:'Path Near Stream',position:'-771px -1175px',spawn:'yes',text:'',b1:'10',b2:'7',b3:'5',b4:''}
var room9 = {name:'Toplary',position:'-872px -1321px',spawn:'yes',text:'',b1:'7',b2:'10',b3:'',b4:''}
var room10 = {name:'Carousel Room',position:'-617px -1332px',spawn:'',text:message[5],b1:'9',b2:'8',b3:'11',b4:'17'}
//Second wing
var room11 = {name:'Marble Hall',position:'-617px -1175px',spawn:'yes',text:'',b1:'12',b2:'10',b3:'',b4:''}
var room12 = {name:'Deep Ford',position:'-650px -1020px',spawn:'',text:message[1],b1:'13',b2:'11',b3:'',b4:''}
var room13 = {name:'Ledge in Ravine',position:'-650px -870px',spawn:'yes',text:'',b1:'14',b2:'12',b3:'',b4:''}
var room14 = {name:'End of Ledge',position:'-500px -870px',spawn:'yes',text:'',b1:'15',b2:'13',b3:'',b4:''}
var room15 = {name:'Dragon Room',position:'-400px -700px',spawn:'yes',text:message[8],b1:'16',b2:'14',b3:'',b4:''}
var room16 = {name:"Dragon's Lair",position:'-411px -515px',spawn:'',text:message[9],b1:'15',b2:'',b3:'',b4:''}
//Third wing
var room17 = {name:'Menhir Room',position:'-619px -1490px',spawn:'yes',text:'',b1:'18',b2:'10',b3:'',b4:''}
var room18 = {name:'Stairway',position:'-619px -1640px',spawn:'',text:message[1],b1:'19',b2:'17',b3:'',b4:''}
var room19 = {name:'Oddly Angled Rooms',position:'-695px -1790px',spawn:'yes',text:'',b1:'20',b2:'18',b3:'',b4:''}
var room20 = {name:'Cerberus Room',position:'-463px -1940px',spawn:'yes',text:'',b1:'21',b2:'19',b3:'',b4:''}
var room21 = {name:'Crypt Anteroom',position:'-625px -1940px',spawn:'yes',text:'',b1:'22',b2:'20',b3:'',b4:''}
var room22 = {name:'Crypt',position:'-625px -2090px',spawn:'',text:'',b1:'23',b2:'21',b3:'',b4:''}
var room23 = {name:'Landing',position:'-625px -2275px',spawn:'',text:message[7],b1:'24',b2:'',b3:'',b4:''}

var rooms = [room0,room1,room2,room3,room4,room5,room6,room7,room8,room9,room10,room11,
room12,room13,room14,room15,room16,room17,room18,room19,room20,room21,room22,room23]
//Combat functions
function combat(input) {
	gameState = 'stopped'
	changeBackground("url('images/combat.jpg')")
	document.getElementsByClassName('attack')[0].onclick = function() {combat()}
	var playerAttack = Math.floor((Math.random() * 11))
	var monsterAttack = Math.floor((Math.random() * 11))
	if (playerAttack <= 5) {
		monsterLife--
		textBox('You hit','green','18px')
	}
	else(textBox('You miss','yellow','15px'))
	if (monsterAttack <= 5) {
		if (input === 'boss') {life -= 2}
		textBox('You got hit','red','18px')
	}
	else (textBox('You dodged','blue','15px'))
	if (life <= 0) {
		changeBackground("url(images/dead.jpg)")
		textBox('You Died','red','30px')
		updateDisplay('leftcombat')
	}
	if (monsterLife <= 0) {
		textBox('The monster Died','green','25px')
		updateDisplay('leftcombat')
		gameState = 'started'
		monsterLife = 3
		changeBackground("url('images/adventure-background.jpg')")
	}
}
function flee () {
	gameState = 'started'
}
//Change the look of things functions
function changeMap(position) {
	document.getElementsByClassName('mapimage')[0].style.backgroundPosition = position
	document.getElementsByClassName('roomnum')[0].innerHTML = rooms[currentRoom].name
}
function changeBackground(input) {
	document.getElementsByClassName('background')[0].style.backgroundImage = input
}
function updateDisplay(input) {
	document.getElementsByClassName('life')[0].innerHTML = 'Life: ' + life
	if (input === 'leftcombat') {
		document.getElementsByClassName('attack')[0].onclick = function() {}
	}
}
function buttonChanger(input1,input2,input3,input4) {
	var but1 = document.getElementsByClassName('adventurebutton')[1]
	var but2 = document.getElementsByClassName('adventurebutton')[2]
	var but3 = document.getElementsByClassName('adventurebutton')[3]
	var but4 = document.getElementsByClassName('adventurebutton')[4]
	if (input1 === '') {but1.style.display = 'none'}
		else {
			but1.style.display ='initial'
			but1.onclick = function() {roomSelecter(input1)}
			but1.innerHTML = rooms[input1].name
		}
	if (input2 === '') {but2.style.display = 'none'}
		else {
			but2.style.display ='initial'
			but2.onclick = function() {roomSelecter(input2)}
			but2.innerHTML = rooms[input2].name
		}
	if (input3 === '') {but3.style.display = 'none'}
		else {
			but3.style.display ='initial'
			but3.onclick = function() {roomSelecter(input3)}
			but3.innerHTML = rooms[input3].name
		}
	if (input4 === '') {but4.style.display = 'none'}
		else {
			but4.style.display ='initial'
			but4.onclick = function() {roomSelecter(input4)}
			but4.innerHTML = rooms[input4].name
		}
}
//Textbox Functions
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
//Save and load functions
window.onbeforeunload = function() { //Save
	localStorage.setItem(('savedLife'),JSON.stringify(life) );
	localStorage.setItem(('savedRoom'),currentRoom );

}
function myFunction() { //Load
	if (typeof(Storage) !== "undefined") {
    life = JSON.parse(localStorage.getItem('savedLife') )
    roomSelecter(localStorage.getItem('savedRoom') )
    updateDisplay()
	} else {
    document.getElementById("loadMessage").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}

function mathStuff(width,height) {
	width -= 225
	height -= 160
	textBox(height)
	textBox(width)
}