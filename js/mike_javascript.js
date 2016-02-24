function fact() {
	var n = document.getElementById('n');
	var n = n.value;
	if (n == 0 || n == 1) {
		alert('1');
	} else {
		return n * fact(n - 1);
	}
}

function factDos() {
	var fact = 1;
	var no = document.getElementById('n');
	var no = n.value;
	var no = parseInt(n);
	var i = 1;
	for(i = 1; i <= no; i ++) {
		fact = fact * i;
	}
	console.log(i);
}

function fib() {
	var f = document.getElementById('f');
	var f = f.value;
	var g = f - 1;
	var f = (parseInt(f)) + (parseInt(g));
	document.getElementById('answer').value = f;
}