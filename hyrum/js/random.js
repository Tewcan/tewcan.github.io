var coinResults = []
var coinDom = document.getElementsByClassName("coin__image")[0]
var buttonDOM = document.getElementsByClassName("coin__button")[0]
function coinFlip() {
	buttonDOM.setAttribute ("onclick" ,"")
	buttonDOM.innerHTML = "Fliping"
	var coinResult = Math.floor(Math.random()*2)
	coinDom.className = "coin__image animation"
	setTimeout(	coinFinish, 1500)
	function coinFinish() {
		buttonDOM.setAttribute ("onclick" ,"coinFlip()")
		buttonDOM.innerHTML = "Flip Coin"
		coinDom.className = "coin__image"
		if (coinResult === 1) {coinResults.push("images/front.png")
			coinDom.setAttribute ("src" ,"images/front.png")	}
		else {coinResults.push("images/back.png")
			coinDom.setAttribute ("src" ,"images/back.png")	}
		var element = document.createElement("img")
		element.className = "result__image"
		element.setAttribute ("src", coinResults[coinResults.length-1])
		var resultsDiv = document.getElementsByClassName('coin__results')[0]
		resultsDiv.appendChild(element)
	}
}