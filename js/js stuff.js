// Date function
var d = new Date()
var hour = d.getHours()
function output (text,id) {
	if (id === undefined) id = 'time__msg'
	document.getElementById(id).innerHTML = text

}
function checkTime (a,b) {
	return hour >= a && hour < b
}
function time () {
	output(d.toDateString(),'block__button');
	if ( checkTime(5,11) ) output("Good Morning");
	else if ( checkTime(11,16) ) output("Good Afternoon");
	else if ( checkTime(16,20) ) output("Good Evening");
	else output("Have a good night");
}
// Count function
var n = 0
function count() {
	n++
	document.getElementById("count__number").innerHTML = n
}
// Text Creator function
function textCreator() {
	var txt = document.getElementById('text__box').value;
	var para = document.createElement('h3');
	var text = document.createTextNode(txt);
	para.appendChild(text)
	document.getElementById('text__div').insertBefore(para, document.getElementById('text__div').childNodes[0]);
}