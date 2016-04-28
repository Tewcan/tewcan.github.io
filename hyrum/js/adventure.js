//Game Variables
var life = 10
var monsterLife = 3
var gameState
var currentRoom = 'Inside the Barrow'
var monsterDamage = 1
var key = 'no'
var currentBackGround = 'wing1'

function restart() {
	key = 'no'
	currentBackGround = 'wing1'
	life = 10
	monsterDamage = 1
	gameState = 'started'
	roomSelecter('0')
	clearTextBox()
	textBox(message[2])
	textBox(message[4])
	updateDisplay('leftcombat')
}
//Room Functions
function roomSelecter(input) {
	if (gameState === 'stopped') {return}
	if (life <= 0) {return}
	if (input === '9'|| input === '8') {currentBackGround ='wing1'}
	if (input === '11') {currentBackGround ='wing2'}
	if (key === 'yes' && input === '17'){
		currentBackGround = 'wing3'
		textBox(message[12])
	}
	if (key === 'no' && input === '17') {
		textBox(message[3])
		return
	}
	updateDisplay()
	roomCreator(input)
	if (input === '23') {changeBackground("url('images/victory.jpg')")}
}
function roomCreator(input) {
	currentRoom = input
	changeMap(rooms[input].position)
	textBox(rooms[input].text)
	if (rooms[input].text2 === 'Healing fountain') {
		life = 10
		updateDisplay()
		textBox(rooms[input].text2,'#800040')
	}
	if (input === '16') {combat('boss')}
	if (rooms[input].spawn === 'yes') {
	var spawnChance = Math.floor((Math.random() * 10))
		if (spawnChance <= 2) {
			textBox('Entering combat','red','25px')
			combat('monster')
		}

	}
	buttonChanger(rooms[input].b1,rooms[input].b2,rooms[input].b3,rooms[input].b4)
	//updateDisplay()
}
//Room information
message = ['Careful of monsters','Healing fountain','Restarted','Locked door',"Find and kill the dragon",'Find the key to the locked door',
'You found the key','Congratulations you reached the end!',"Don't step on the human remains",'You found the dragon, kill it to get the key',
'10','Entering the north wing','Entering the south wing']
//First wing
rooms = [
	{name:'Inside the Barrow',position:'-1115px -103px',spawn:'',text:message[4],b1:'1',b2:'',b3:'',b4:''},
	{name:'Narrow Tunnel',position:'-1115px -240px',spawn:'yes',text:'',b1:'2',b2:'0',b3:'',b4:'',text2:message[1]},
	{name:'Foot Bridge',position:'-1115px -380px',spawn:'yes',text:'',b1:'3',b2:'1',b3:'',b4:''},
	{name:'Great Cavern',position:'-1046px -550px',spawn:'yes',text:'',b1:'4',b2:'2',b3:'',b4:''},
	{name:'Shallow Ford',position:'-972px -702px',spawn:'yes',text:'',b1:'5',b2:'3',b3:'',b4:''},
	{name:'Dark Tunnel',position:'-900px -857px',spawn:'yes',text:'',b1:'8',b2:'6',b3:'4',b4:''},
	{name:'North End of Garden',position:'-950px -1015px',spawn:'yes',text:'',b1:'7',b2:'5',b3:'',b4:''},
	{name:'Formal Garden',position:'-929px -1173px',spawn:'yes',text:'',b1:'8',b2:'9',b3:'6',b4:''},
	{name:'Path Near Stream',position:'-771px -1175px',spawn:'yes',text:'',b1:'10',b2:'7',b3:'5',b4:''},
	{name:'Toplary',position:'-872px -1321px',spawn:'yes',text:'',b1:'7',b2:'10',b3:'',b4:''},
	{name:'Carousel Room',position:'-617px -1332px',spawn:'',text:message[5],b1:'9',b2:'8',b3:'11',b4:'17',text2:message[1]},
	//Second wing
	{name:'Marble Hall',position:'-617px -1175px',spawn:'yes',text:message[11],b1:'12',b2:'10',b3:'',b4:''},
	{name:'Deep Ford',position:'-650px -1020px',spawn:'yes',text:'',b1:'13',b2:'11',b3:'',b4:''},
	{name:'Ledge in Ravine',position:'-650px -870px',spawn:'yes',text:'',b1:'14',b2:'12',b3:'',b4:''},
	{name:'End of Ledge',position:'-500px -870px',spawn:'yes',text:'',b1:'15',b2:'13',b3:'',b4:''},
	{name:'Dragon Room',position:'-400px -700px',spawn:'',text:message[8],b1:'16',b2:'14',b3:'',b4:'',text2:message[1]},
	{name:"Dragon's Lair",position:'-411px -515px',spawn:'',text:message[9],b1:'15',b2:'',b3:'',b4:''},
	//Third wing
	{name:'Menhir Room',position:'-619px -1490px',spawn:'yes',text:'',b1:'18',b2:'10',b3:'',b4:''},
	{name:'Stairway',position:'-619px -1640px',spawn:'yes',text:'',b1:'19',b2:'17',b3:'',b4:''},
	{name:'Oddly Angled Rooms',position:'-695px -1790px',spawn:'yes',text:'',b1:'20',b2:'18',b3:'',b4:''},
	{name:'Cerberus Room',position:'-463px -1940px',spawn:'yes',text:'',b1:'21',b2:'19',b3:'',b4:''},
	{name:'Crypt Anteroom',position:'-625px -1940px',spawn:'yes',text:'',b1:'22',b2:'20',b3:'',b4:''},
	{name:'Crypt',position:'-625px -2090px',spawn:'yes',text:'',b1:'23',b2:'21',b3:'',b4:''},
	{name:'Landing',position:'-625px -2275px',spawn:'',text:message[7],b1:'',b2:'',b3:'',b4:''} ]

//Combat functions
function combat(input) {
	if (life === 0) {return}
	if (input === 'boss') {bossEncounter()}
	if (input === 'monster') {monsterEncounter()}
	gameState = 'stopped'
	document.getElementsByClassName('attack')[0].onclick = function() {combat()}
	var playerAttack = Math.floor((Math.random() * 11))
	var monsterAttack = Math.floor((Math.random() * 11))
	if (playerAttack <= 5) {
		monsterLife--
		textBox('You hit','green','18px')
	}
	else(textBox('You miss','yellow','15px'))
	if (monsterAttack <= 5) {
		life -= monsterDamage
		textBox('You got hit','red','18px')
		updateDisplay('no')
	}
	else (textBox('You dodged','blue','15px'))
	if (monsterLife <= 0) {
		textBox('The monster Died','green','25px')
		updateDisplay('leftcombat')
		gameState = 'started'
		monsterLife = 3
		changeBackground()
	}
	if (life <= 0) {
		changeBackground("url(images/dead.jpg)")
		textBox('You Died','red','30px')
	}
	function monsterEncounter() {
		monsterLife = 3
		monsterDamage = 1
		changeBackground("url('images/combat.jpg')")
	}
	function bossEncounter() {
		monsterLife = 5
		monsterDamage = 2
		changeBackground("url('images/dragon.jpg')")
		key = 'yes'
	}
}
function flee () {
	gameState = 'started'
}
//Change the look of stuff functions
function changeMap(position) {
	document.getElementsByClassName('mapimage')[0].style.backgroundPosition = position
	document.getElementsByClassName('roomnum')[0].innerHTML = rooms[currentRoom].name
}
function changeBackground(input) {
	var domBackground = document.getElementsByClassName('background')[0].style
	if (currentBackGround === 'wing1') {domBackground.backgroundImage = "url('images/wing1.jpg')"}
	if (currentBackGround === 'wing2') {domBackground.backgroundImage = "url('images/wing2.jpg')"}
	if (currentBackGround === 'wing3') {domBackground.backgroundImage = "url('images/wing3.jpg')"}
	domBackground.backgroundImage = input
}
function updateDisplay(input) {
	document.getElementsByClassName('life')[0].innerHTML = 'Life: ' + life
	if (input === 'leftcombat') {
		document.getElementsByClassName('attack')[0].onclick = function() {}
	}
	if (input === 'no') {}
		else{changeBackground()}
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
	 localStorage.setItem(('savedBackground'),currentBackGround );

 }
 function loadFunction() { //Load
	 if (typeof(Storage) !== "undefined") {
     life = JSON.parse(localStorage.getItem('savedLife') )
     roomSelecter(localStorage.getItem('savedRoom') )
     roomSelecter(localStorage.getItem('savedBackground') )
     updateDisplay()
	 } else {
     document.getElementById("loadMessage").innerHTML = "Sorry, your browser does not support Web Storage...";
	 }
 }