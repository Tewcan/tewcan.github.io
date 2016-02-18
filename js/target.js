function random() {
	var rand = Math.floor((Math.random()* 1500 ) + 1000)
	setTimeout(circleFunction, rand)
}

function circleFunction() {
	var ran = Math.floor((Math.random()* 650 ) + 40)
	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", "100");
	svg.setAttribute("height", "100");
	document.getElementById("circleDiv").appendChild(svg);

	var att = document.createAttribute("id");
	att.value = "circles";
	svg.setAttributeNode(att);

	var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("cx", "50");
	circle.setAttribute("cy", ran);
	circle.setAttribute("r", "40");
	circle.setAttribute("stroke", "black");
	circle.setAttribute("stroke-width", "5px");
	circle.setAttribute("fill", "red");

	svg.appendChild(circle);
	random()

	var click = document.getElementById('circles');
	click.onclick = function remove() {
		document.getElementById('circles').remove();
		count()
	};
}


var c = 0
function count() {
	c++
	document.getElementById('count').innerHTML = c
	if (c === 10) {document.getElementById('level').innerHTML = 'Level 2'}
	else if (c === 20) {document.getElementById('level').innerHTML = 'Level 3'}
	else if (c === 30) {document.getElementById('level').innerHTML = 'Level 4'}
}


