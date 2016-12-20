function fadeInFunction() {
	setTimeout(function(){ 
		document.getElementsByClassName('content')[0].style.opacity = "1"
		console.log('hit')
	}, 3000);
}