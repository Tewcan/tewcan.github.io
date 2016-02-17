function random() {
	var rand = Math.floor((Math.random()* 1500 ) + 1000)
	setTimeout(circleFunction, rand)
}



function circleFunction() {
	var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svg.setAttribute("width", "100");
	svg.setAttribute("height", "100");
	document.getElementById("circleDiv").appendChild(svg); 

	var att = document.createAttribute("class");
	att.value = "circles";
	svg.setAttributeNode(att);

	var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("cx", "50");
	circle.setAttribute("cy", "50");
	circle.setAttribute("r", "40");
	circle.setAttribute("stroke", "black");
	circle.setAttribute("stroke-width", "3px");
	circle.setAttribute("fill", "red");

	svg.appendChild(circle);
	random()
}
