images =[
	{src:'images/cat.png', name:"Cat"},
	{src:'images/sunrise.png', name:"Sunrise"},
	{src:'images/rainbow.PNG', name:"Rainbow"}	]
var imageSelector = 0
var domNav = document.getElementsByClassName("featured__nav")
function featuredControll(input1,input2) {
	if (imageSelector === 0 && input1 === -1) {}
	else if (imageSelector === (images.length - 1) && input2 === 1) {}
	else {imageSelector += input1 + input2
		  changeFeatured()	}
}
function changeFeatured() {
	if (imageSelector === 0) {domNav[0].className = "featured__nav nav__color2 pull--left"}
	else {domNav[0].className = "featured__nav nav__color pull--left"}
	if (imageSelector === (images.length - 1)) {domNav[1].className = "featured__nav nav__color2 pull--right"}
	else {domNav[1].className = "featured__nav nav__color pull--right"}
	document.getElementsByClassName("featured__title")[0].innerHTML = images[imageSelector].name
	document.getElementsByClassName("featured__image")[0].setAttribute("src", images[imageSelector].src)
	document.getElementsByClassName("featured__link")[0].setAttribute("href", images[imageSelector].href)
}