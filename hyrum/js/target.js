//fix the hitbox
//fix the start button
//make the restart button remove
//add different shapes

//Game variables
var lives = 5
var count = 0
var color = 'red'
var stage = '1'
var gState = 0
var speed = '4s'
var spawnRate = 1000
var circleSize = '80px'
var hitTheThings
//DOM variables
var domButton = document.getElementsByClassName('container__button')

function gameState(state) {
	if (state === 1) {
		gState = 1
		createCircles()
		domButton[3].style.backgroundColor = 'teal'
	}
	else if (state === 0) {
		lives = 5
		count = 0
		color = 'red'
		stage = '1'
		gState = 0
		speed = '3s'
		document.getElementsByClassName('dead')[0].innerHTML = ''
		domButton[3].style.backgroundColor = 'blue'
		updateDisplay()
 	}
}
function difficulty (diffi) {
	if (diffi === 'easy') {
		domButton[0].style.backgroundColor = 'teal'
		domButton[1].style.backgroundColor = 'blue'
		domButton[2].style.backgroundColor = 'blue'
		circleSize = '120px'
	}
	else if (diffi === 'medium') {
		domButton[0].style.backgroundColor = 'blue'
		domButton[1].style.backgroundColor = 'teal'
		domButton[2].style.backgroundColor = 'blue'
		circleSize = '80px'

	}
	else if (diffi === 'hard') {
		domButton[0].style.backgroundColor = 'blue'
		domButton[1].style.backgroundColor = 'blue'
		domButton[2].style.backgroundColor = 'teal'
		circleSize = '50px'

	}
}
function createCircles() {
	if (gState === 0) {return;}
	else if (lives <= 0 ) {return;}
	var randomHight = Math.floor((Math.random()* 630 ) + 210) +'px'
	var div = document.createElement('div')
	div.style.width = circleSize
	div.style.height = circleSize
	div.style.backgroundColor = color
	div.style.top = randomHight
	div.style.animationDuration = speed;
	div.setAttribute("id", "circles")
	div.onmousedown = clickCheck
	div.addEventListener("animationend", endOfAnimation)
	document.getElementsByClassName("shootingField")[0].appendChild(div);
	circleTimer()

	function circleTimer() {
		var randomSpawnTime = Math.floor((Math.random()* 1000 ) + spawnRate)
		setTimeout(createCircles, randomSpawnTime)
	}
};
function clickCheck() {
	this.remove()
	count++
	stageCheck()
	updateDisplay()
}
function endOfAnimation () {
	if (lives <= 0) {}
	else {lives--}
	updateDisplay()
	this.remove()
}
function stageCheck() {
	if (count >= 10 && count < 20) {
	stage = 2
	color = 'orange'
	speed = '3.8s'}
	else if (count >= 20 && count < 30) {
	stage = 3
	color = '#ffff4d'
	speed = '3.6s'}
	else if (count >= 30 && count < 50) {
	stage = 4
	color = 'blue'
	speed = '3.4s'}
	else if (count >= 50 && count < 75) {
	stage = 5
	color = 'purple'
	speed = '3.2s'
	spawnRate = 700}
	else if (count >= 75 && count < 100) {
	stage = 6
	color = 'green'
	speed = '3s'}
	else if (count >= 100 && count < 150) {
	stage = 7
	color = 'lightgreen'
	speed = '2.8s'}
	else if (count >= 150) {
	stage = 8
	color = ""
	speed = '2.6s'}
}
function updateDisplay() {
	document.getElementsByClassName('lives')[0].innerHTML = "Lives " + lives
	document.getElementsByClassName('count')[0].innerHTML = count
	document.getElementsByClassName('stagedisplay')[0].innerHTML = "Stage " + stage + " of 8"
	var stageClass = document.getElementsByClassName('stage')
	for (var i = 0; i < stageClass.length; i++) {
		stageClass[i].style.color = color
	}
}
window.onbeforeunload = function() { //Save
	localStorage.setItem(('savedCount'),JSON.stringify(count) );
	localStorage.setItem(('savedLives'),JSON.stringify(lives) );

}
document.addEventListener('DOMContentLoaded', function() { //Load
	if (typeof(Storage) !== "undefined") {
    count = JSON.parse(localStorage.getItem('savedCount') );
    lives = JSON.parse(localStorage.getItem('savedLives') );
    stageCheck()
    updateDisplay()
	} else {
    document.getElementById("loadMessage").innerHTML = "Sorry, your browser does not support Web Storage...";
	}
}, false);