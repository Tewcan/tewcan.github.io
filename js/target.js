//Game variables
var lives = 5
var count = 0
var color = 'red'
var stage = '1'
var gState = 0

function gameState(state) {
	if (state === 1) {
		gState = 1
		createCircles()
		//document.getElementsByClassName('container__button')[0].onclick = null
	}
	else if (state === 0) {
		lives = 5
		count = 0
		color = 'red'
		stage = '1'
		gState = 0
		//document.getElementsByClassName('container__button')[0].onclick = gameState(1)
		updateDisplay()
 	}
}
function createCircles() {
	if (gState === 0) {return;}
	else if (lives <= 0 ) {return;}
	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", "100");
	svg.setAttribute("height", "100");
	svg.setAttribute("id", "circles")
	svg.onmousedown = clickCheck
	svg.addEventListener("animationend", endOfAnimation)
	document.getElementsByClassName("menudiv")[0].appendChild(svg);

	var random = Math.floor((Math.random()* 650 ) + 40)
	var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("cx", "50");
	circle.setAttribute("cy", random);
	circle.setAttribute("r", "40");
	circle.setAttribute("stroke", "black");
	circle.setAttribute("stroke-width", "5px");
	circle.setAttribute("fill", color);
	svg.appendChild(circle);
	circleTimer()

	function circleTimer() {
		var random = Math.floor((Math.random()* 1500 ) + 1000)
		setTimeout(createCircles, random)
	}
};
function endOfAnimation () {
	if (lives === 0) {console.log('dead')}
	else {lives--}
	updateDisplay()
	this.remove()
}
function clickCheck() {
	this.remove()
	count++
	stageCheck()
	updateDisplay()
}
function stageCheck() {
	if (count === 10) {
	stage++
	color = 'orange'}
	else if (count === 20) {
	stage++
	color = '#ffff4d'}
	else if (count === 30) {
	stage++
	color = 'blue'}
	else if (count === 50) {
	stage++
	color = 'purple'}
	else if (count === 75) {
	stage++
	color = 'green'}
	else if (count === 100) {
	stage++
	color = 'lightgreen'}
	else if (count === 150) {
	stage++
	color = "lightblue"}
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
//fix the hight issue
//fix start and reset buttons
//add speed
//add different shapes
