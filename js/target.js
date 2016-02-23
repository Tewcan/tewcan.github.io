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
var speed = '3s'
var spawnRate = 1000
var circleSize = 40
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
	console.log(diffi)
	if (diffi === 'easy') {
		domButton[0].style.backgroundColor = 'teal'
		domButton[1].style.backgroundColor = 'blue'
		domButton[2].style.backgroundColor = 'blue'
		circleSize = 50
	}
	else if (diffi === 'medium') {
		domButton[0].style.backgroundColor = 'blue'
		domButton[1].style.backgroundColor = 'teal'
		domButton[2].style.backgroundColor = 'blue'
		circleSize = 40

	}
	else if (diffi === 'hard') {
		domButton[0].style.backgroundColor = 'blue'
		domButton[1].style.backgroundColor = 'blue'
		domButton[2].style.backgroundColor = 'teal'
		circleSize = 30

	}
}
function createCircles() {
	if (gState === 0) {return;}
	else if (lives <= 0 ) {return;}
	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", "100");
	svg.setAttribute("height", "100");
	svg.style.animationDuration = speed;
	svg.setAttribute("id", "circles")
	svg.onmousedown = clickCheck
	svg.addEventListener("animationend", endOfAnimation)
	document.getElementsByClassName("menudiv")[0].appendChild(svg);

	var randomHight = Math.floor((Math.random()* 630 ) + 60)
	var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("cx", "50");
	circle.setAttribute("cy", randomHight);
	circle.setAttribute("r", circleSize);
	circle.setAttribute("stroke", "black");
	circle.setAttribute("stroke-width", "5px");
	circle.setAttribute("fill", color);
	svg.appendChild(circle);
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
	if (lives === 0) {document.getElementsByClassName('dead')[0].innerHTML = 'Dead'}
	else {lives--}
	updateDisplay()
	this.remove()
}
function stageCheck() {
	if (count === 10) {
	stage++
	color = 'orange'
	speed = '2.8s'}
	else if (count === 20) {
	stage++
	color = '#ffff4d'
	speed = '2.6s'}
	else if (count === 30) {
	stage++
	color = 'blue'
	speed = '2.4s'}
	else if (count === 50) {
	stage++
	color = 'purple'
	speed = '2.2s'
	spawnRate = 700}
	else if (count === 75) {
	stage++
	color = 'green'
	speed = '2s'}
	else if (count === 100) {
	stage++
	color = 'lightgreen'
	speed = '1.8s'}
	else if (count === 150) {
	stage++
	color = "lightblue"
	speed = '1.6s'}
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