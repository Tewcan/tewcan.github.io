//factorial function
function factDos() {  
	document.getElementById('facIter').innerHTML = '';
	var no = Number(document.getElementById('n').value);
	var fact = 1;
	var i = 1;
	for(i = 1; i <= no; i ++) {
		fact = fact * i;
		document.getElementById('facIter').innerHTML += i;
		document.getElementById('facIter').innerHTML += ' * ';
	}
	var temp = document.getElementById('facIter').innerHTML.slice(0, -2);
	console.log(temp);
	document.getElementById('facIter').innerHTML = temp + '= ';
	document.getElementById('facAnswer').value = fact;
	document.getElementById('facIter').innerHTML += fact;
}

// fibonacci function
function fib() {   
	var f = document.getElementById('f');
	var f = f.value;
	var g = f - 1;
	var h = (parseInt(f)) + (parseInt(g));
	document.getElementById('fibAnswer').value = h;
	document.getElementById('fibIter').innerHTML = f + ' + ' + g + ' = ' + h;
}


