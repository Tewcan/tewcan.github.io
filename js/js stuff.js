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
	secondNumber = '',
	operator;
function numberInput(input) {
		firstNumber += input
		numberDisplay(firstNumber)
}
function numberDisplay(input,which) {
	if (which === 'top') {document.getElementsByClassName('calculator__number--1')[0].innerHTML = input}
	else {document.getElementsByClassName('calculator__number--2')[0].innerHTML = input}
}
function chooseOperator(input) {
	if (input === '+') {operator = '+'}
	if (input === '-') {operator = '-'}
	if (input === '*') {operator = '*'}
	if (input === '/') {operator = '/'}
	if (input === '^') {operator = '^'}
	secondNumber = firstNumber
	firstNumber = ''
	numberDisplay(firstNumber)
	numberDisplay(secondNumber + operator,'top')
}
function operationFunction() {
	if (operator === '+')firstNumber = JSON.parse(firstNumber) + JSON.parse(secondNumber)
	if (operator === '-')firstNumber = JSON.parse(firstNumber) - JSON.parse(secondNumber)
	if (operator === '*')firstNumber = JSON.parse(firstNumber) * JSON.parse(secondNumber)
	if (operator === '/')firstNumber = JSON.parse(firstNumber) / JSON.parse(secondNumber)
	if (operator === '^')firstNumber = Math.pow(JSON.parse(firstNumber),JSON.parse(secondNumber))
	numberDisplay(firstNumber.toFixed(2))
	secondNumber = '<br>'
	numberDisplay('<br>','top')
}
function squareRoot() {
	firstNumber = Math.sqrt(JSON.parse(firstNumber)).toFixed(2)
	numberDisplay(firstNumber)
}
function clearEverything() {
	firstNumber = ''
	secondNumber = ''
	numberDisplay('<br>','top')
	numberDisplay('')
}
//Age calculator
var ageCheck
var ageCheck2
function inputText() {
	if (document.getElementsByClassName('agetext')[0].value === '') {return}
	var birthDay = new Date(document.getElementsByClassName('agetext')[0].value)
	var today = new Date()
	var difference = today - birthDay

	var minutes = Math.floor(difference / 1000 / 60)
	var days = Math.floor(difference / 1000 / 60 / 60 / 24)
	var years = Math.floor(difference / 1000 / 60 / 60 / 24 / 365)

	var daysLeft = days % 365
	var yearsLeft50 = (Math.abs(years - 50))
	if (years < 50 ) {ageCheck = ' before '}
		else {ageCheck = ' since '}
	if (years < 100 ) {ageCheck2 = ' before '}
		else {ageCheck2 = ' since '}
	var yearsLeft100 = (Math.abs(years - 100))

	var dom = document.getElementsByClassName('ageoutput')
	dom[0].innerHTML = '<br>' + 'Age in Minutes: ' + minutes
	dom[1].innerHTML = 'Age in Days: ' + days
	dom[2].innerHTML = 'Age in Years: ' + years
	dom[3].innerHTML = '<br>' + 'Time' + ageCheck + '50 ' + 'Y: ' + yearsLeft50 + ' D: ' + daysLeft
	dom[4].innerHTML = 'Time' + ageCheck2 + '100 ' + 'Y: ' + yearsLeft100 + ' D: ' + daysLeft
}
