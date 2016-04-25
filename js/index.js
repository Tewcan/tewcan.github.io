//------------------------------------featured controll----------------------------------
images =[
	{src:'images/sol_system.png', href:'mike/solar_system.html',name:"Solar System"},
	{src:'images/loothoard2.png', href:'loothoard.html',name:"LootHoard"},
	{src:'images/target.PNG', href:'hyrum/target.html',name:"Targets"}	]
var imageSelector = 0
function featuredControll(input1,input2) {
	console.log(imageSelector)
	if (imageSelector === 0 && input1 === -1) {}
	else if (imageSelector === (images.length - 1) && input2 === 1) {}
	else {imageSelector += input1 + input2
		  changeFeatured()	}
}
function changeFeatured() {
	document.getElementsByClassName("featured__title")[0].innerHTML = images[imageSelector].name
	document.getElementsByClassName("featured__image")[0].setAttribute("src", images[imageSelector].src)
	document.getElementsByClassName("featured__link")[0].setAttribute("href", images[imageSelector].href)
}
