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
//Tip calculator
function tipFunction() {
	var numPeople = document.getElementsByClassName('numpeople')[0].value
	if (numPeople === '') {numPeople = 1}
	var occupation = document.getElementsByClassName('occupation')[0].value
	var bill = JSON.parse(document.getElementsByClassName('bill')[0].value)
	var tip = JSON.parse(document.getElementsByClassName('tip')[0].value)
	if (occupation === '' || bill === '' || tip === '') {return}
	var prcnt = tip * .01;
	var tipAmount = bill * prcnt / numPeople
	var total = tipAmount + bill / numPeople

	document.getElementsByClassName('tiptext')[0].innerHTML =
	'Tip the ' + occupation + ' $' + tipAmount.toFixed(2) + '<br>' + 'Total: $' + total.toFixed(2)
}
//Wage calculator
function wageFunction() {
	var payTotal
	var overTime = ''
	var hours = JSON.parse(document.getElementsByClassName('hours')[0].value)
	var rate = JSON.parse(document.getElementsByClassName('rate')[0].value)
	payTotal = hours * rate
	document.getElementsByClassName('wagetext')[1].innerHTML = ''
	if (hours > 40) {
		overTime = hours - 40
		payTotal += overTime * (rate * .5)
		document.getElementsByClassName('wagetext')[1].innerHTML = 'Overtime hours: ' + overTime
	}
	document.getElementsByClassName('wagetext')[0].innerHTML = 'Total: $' + payTotal.toFixed(2)
}
//Multiplicatiion table
function multiplicationTable() {
	var htmlTable, i, j;
	htmlTable = "<table border='1'>"
	for (i = 1; i <= 9; i++) {
		htmlTable += '<tr>'
		for (j = 1; j <= 9; j++) {
			htmlTable += '<td>'+ (i*j).toFixed(0) +'</td>'
		}
		htmlTable += '</tr>'
	}
	htmlTable += '</table'
	document.getElementsByClassName("multiTable")[0].innerHTML = htmlTable;
}
//FizzBuzz
function fizzBuzz() {
	var fizz = document.getElementsByClassName('fizz')[0].value
	var buzz = document.getElementsByClassName('buzz')[0].value
	var stopFB = JSON.parse(document.getElementsByClassName('stopFB')[0].value)
	var startFB = JSON.parse(document.getElementsByClassName('startFB')[0].value)
	var speed = document.getElementsByClassName('speedFB')[0].value
	var brokenThings
	(function next() {
	    if (startFB++ >= stopFB) return;
	    setTimeout(function() {
	        if (startFB % fizz === 0 && startFB % buzz === 0) {outputFB('FizzBuzz')}
			else if (startFB % fizz === 0) {outputFB('Fizz')}
			else if (startFB % buzz === 0) {outputFB('Buzz')}
			else {outputFB(startFB)}
	        next();
	    }, speed);
	})();
}
function outputFB(input) {
	var element = document.createElement('h3')
	var textNode = document.createTextNode(input)
	element.appendChild(textNode)
	var output = document.getElementsByClassName('outputFB')[0]
	output.insertBefore(element, output.childNodes[0])
}
// Password Checker
function passwordFunction() {
	var password = document.getElementsByClassName('passwordinput')[0].value,
	p1,p2,p3,p4,p5,p6;
	if (/(?=.*[_!?@&])/.test(password)) {p6 = true}
		else{outputMessage('Password must contain atleast 1 special character'+'<br>'+'( _ ! ? @ & )')
			p6 = false}
	if (/ /.test(password)) {outputMessage("Password can't contain spaces")
		p5 = false}
		else {p5 = true}
	if (/[A-Z]/.test(password.slice(0))) {p3 = true}
		else{outputMessage('First letter must be uppercase')
		p3 = false}
	if (/[a-z]/.test(password)) {p4 = true}
		else{outputMessage('Need atleast 1 lowercase letter')
		p4 = false}
	if (/[0-9]/.test(password.slice(6) && password.slice(7)) && /[a-zA-z]/.test(password.slice(0) &&
	password.slice(1) && password.slice(2) && password.slice(3) && password.slice(4) && password.slice(5))) {p2 = true}
		else{outputMessage('Must be atleast 6 letters followed by 2 numbers')
		p2 = false}
	if (password.length >= 6) {p1 = true}
		else{outputMessage('Password must be atleast 6 characters long')
		p1 = false}
	if (p1 && p2 && p3 && p4 && p5 && p6 === true) {outputMessage('You have a strong password')}
	function outputMessage(input) {
		document.getElementsByClassName('passwordoutput')[0].innerHTML = input
	}
}