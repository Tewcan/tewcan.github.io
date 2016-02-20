var count = 0
var color = 'red'
var stage = '1'

function createCircle() {

	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", "100");
	svg.setAttribute("height", "100");
	svg.setAttribute("id", "circles")
	svg.onclick = clickCheck
	svg.addEventListener("animationstart", removeTime)
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

};

function circleTimer() {
	var random = Math.floor((Math.random()* 1500 ) + 1000)
	setTimeout(this.createCircle, random)
}

function removeTime () {
	var svg = this
	setTimeout(removeCircle, 2950)
	function removeCircle () {
		svg.remove()
	}

}

function clickCheck() {
	this.remove()
	count++
	checkstage()
	updateDisplay()
}

function checkstage() {
	if (count === 10) {
	stage++
	color = 'green'}
	else if (count === 20) {
	stage++
	color = 'purple'}
	else if (count === 30) {
	stage++
	color = 'orange'}
	else if (count === 50) {
	stage++
	color = '#ffff4d'}
	else if (count === 100) {
	stage++
	color = 'black'}
}

function updateDisplay() {
	document.getElementsByClassName('count')[0].innerHTML = count
	document.getElementsByClassName('stagedisplay')[0].innerHTML = "Stage " + stage
	var stageClass = document.getElementsByClassName('stage')
	for (var i = 0; i < stageClass.length; i++) {
		stageClass[i].style.color = color
	}
}


