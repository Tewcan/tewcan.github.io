// Date function
var d = new Date()
var hour = d.getHours()
function output (text,id) {
	if (id === undefined) id = 'time__msg'
	document.getElementsByClassName(id)[0].innerHTML = text

}
function checkTime (a,b) {
	return hour >= a && hour < b
}
function time () {
	output(d.toDateString(),'time__button');
	if ( checkTime(5,11) ) output("Good Morning");
	else if ( checkTime(11,16) ) output("Good Afternoon");
	else if ( checkTime(16,20) ) output("Good Evening");
	else output("Have a good night");
}
// Count function
var n = 0
function count() {
	n++
	document.getElementsByClassName("count__number")[0].innerHTML = n
}
// Text Creator function
function textCreator() {
	var element = document.createElement('h3');
	var text = document.getElementsByClassName('text__box')[0].value;
	var textNode = document.createTextNode(text);
	element.appendChild(textNode)
	element.onclick = strikeThrough
	var textDiv = document.getElementsByClassName('text__div')[0]
	textDiv.insertBefore(element, textDiv.childNodes[0]);
}

function strikeThrough () {
	if(this.style.textDecoration == 'none'){
	this.style.textDecoration = 'line-through'
	} else {
	this.style.textDecoration = 'none'
	}
}
// Calculator
var firstNumber = '',
	operator,
	changeNumber = true,
	secondNumber = '',
	comma,
	total;

function numberInput(input) {
	if (changeNumber === true) {
		firstNumber += input
		numberDisplay(firstNumber)
	}
	if (changeNumber === false) {
		secondNumber += input
		numberDisplay(secondNumber)
	}
}
function numberDisplay(input) {
	document.getElementsByClassName('calculator__number--2')[0].innerHTML = input
}
function squareRoot() {
	total = Math.sqrt(JSON.parse(firstNumber)).toFixed(2)
	numberDisplay(total)
}
function chooseOperator(input) {
	if (input === '+') {operator = '+'}
	if (input === '-') {operator = '-'}
	if (input === '*') {operator = '*'}
	if (input === '/') {operator = '/'}
	if (input === '^') {operator = '^'}
	changeNumber = false
	numberDisplay(secondNumber)
	document.getElementsByClassName('calculator__number--1')[0].innerHTML = firstNumber + operator
}
function operationFunction() {
	if (operator === '+')total = JSON.parse(firstNumber) + JSON.parse(secondNumber)
	if (operator === '-')total = JSON.parse(firstNumber) - JSON.parse(secondNumber)
	if (operator === '*')total = JSON.parse(firstNumber) * JSON.parse(secondNumber)
	if (operator === '/')total = JSON.parse(firstNumber) / JSON.parse(secondNumber)
	if (operator === 'sqrt')total = Math.sqrt(firstNumber)
	numberDisplay(total)
	document.getElementsByClassName('calculator__number--1')[0].innerHTML = '<br>'
}
function clearEverything() {
	changeNumber = true
	firstNumber = ''
	secondNumber = ''
	document.getElementsByClassName('calculator__number--1')[0].innerHTML = '<br>'
	numberDisplay('')
}