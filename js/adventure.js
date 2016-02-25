var room = 1
function textCreator() {
	var element = document.createElement('h4');
	var text = document.getElementsByClassName('textinput')[0].value;
	var textNode = document.createTextNode(text);
	element.appendChild(textNode)
	var textField = document.getElementsByClassName('textbox--input')[0]
	textField.insertBefore(element, textField.childNodes[0]);
	roomSelecter()
	document.getElementsByClassName('roomnum')[0].innerHTML = 'Room ' + room

	function roomSelecter () {
		if (room === 1) {firstRoom()}
		else if (room === 2) {secondRoom()}
		else if(room === 3) {thirdRoom()}
		else if(room === 4) {fourthRoom()}
	}
	function firstRoom () {
		room = 1
		document.getElementsByClassName('mapimage')[0].setAttribute('src','images/adventure/r1.jpg')
		console.log(room)
		if (text === '2') {secondRoom()}
		else if (text === '3') {thirdRoom()}
	}
	function secondRoom () {
		room = 2
		document.getElementsByClassName('mapimage')[0].setAttribute('src','images/adventure/r2.jpg')
		console.log(room)
		if (text === '1') {firstRoom()}
	}
	function thirdRoom () {
		room = 3
		document.getElementsByClassName('mapimage')[0].setAttribute('src','images/adventure/r3.jpg')
		console.log(room)
		if (text === '1') {firstRoom()}
		else if (text === '4') {fourthRoom()}
	}
	function fourthRoom () {
		room = 4
		document.getElementsByClassName('mapimage')[0].setAttribute('src','images/adventure/r4.jpg')
		console.log(room)
		if (text === '3') {thirdRoom()}
	}
}
