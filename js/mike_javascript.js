function factDos() {
	var no = Number(document.getElementById('n').value);
	var fact = 1;
	var i = 1;
	for(i = 1; i <= no; i ++) {
		fact = fact * i;
	}
	document.getElementById('facAnswer').value = fact;
	console.log(fact);
}

function fib() {
	var f = document.getElementById('f');
	var f = f.value;
	var g = f - 1;
	var f = (parseInt(f)) + (parseInt(g));
	document.getElementById('fibAnswer').value = f;
}