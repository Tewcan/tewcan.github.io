var pScore = 0
var cScore = 0
var tScore = 0
var total = 0
var pWinRate = 0
var cWinRate = 0
var tRate = 0
var displayStatus = 1

function game(x) {
    var player = x
    var computer = Math.floor(Math.random() * 3) + 1
    var pResult
    var cResult
    total += 1
    document.getElementById("total").innerHTML = total

    switch (player) {
        case 1:
            pResult = "Rock"
            break;
        case 2:
            pResult = "Paper"
            break;
        case 3:
            pResult = "Scissors"
            break;
    }
    switch (computer) {
        case 1:
            cResult = "Rock"
            break;
        case 2:
            cResult = "Paper"
            break;
        case 3:
            cResult = "Scissors"
            break;
    }

    document.getElementById("player").innerHTML = pResult
    document.getElementById("computer").innerHTML = cResult
    
    var node = document.createElement("LI");                 
    var textnode = document.createTextNode("You picked " + pResult + ". I picked " + cResult);         
    node.appendChild(textnode);                              
    document.getElementById("feedlist").insertBefore(node, document.getElementById("feedlist").childNodes[0]);
    

    if (player === computer) {
        document.getElementById("status").innerHTML = "Tie"
        tScore += 1
        document.getElementById("tScore").innerHTML = tScore
        winRates()
        return
    }

    if (player === 1 && computer === 3) {
        document.getElementById("status").innerHTML = "You win"
        pScore += 1
        document.getElementById("pScore").innerHTML = pScore
        winRates()
        return
    }

    if (player === 2 && computer === 1) {
        document.getElementById("status").innerHTML = "You win"
        pScore += 1
        document.getElementById("pScore").innerHTML = pScore
        winRates()
        return 
    }

    if (player === 3 && computer === 2) {
        document.getElementById("status").innerHTML = "You win"
        pScore += 1
        document.getElementById("pScore").innerHTML = pScore
        winRates()
        return 
    }

    document.getElementById("status").innerHTML = "I win"
    cScore += 1
    document.getElementById("cScore").innerHTML = cScore
    winRates()
    return 
}

function randomGame(x) {
    var a = 0
    var i = 0
    while (i < x) {
        var a = Math.floor(Math.random() * 3) + 1
        game(a)
        i += 1
    }
}

function toggleDisplay() {
    if (displayStatus === 1) {
        document.getElementById("feed").style = "display: block;"
        displayStatus = 0
        return
    }
    if (displayStatus === 0) {
        document.getElementById("feed").style = "display: none;"
        displayStatus = 1
        return
    }
}

function clearAll() {
    pScore = 0
    cScore = 0
    tScore = 0
    pWinRate = 0
    cWinRate = 0
    tRate = 0
    total = 0
    document.getElementById("pScore").innerHTML = 0
    document.getElementById("cScore").innerHTML = 0
    document.getElementById("tScore").innerHTML = 0
    document.getElementById("feedlist").innerHTML = ""
    document.getElementById("player").innerHTML = ""
    document.getElementById("computer").innerHTML = ""
    document.getElementById("status").innerHTML = ""
    document.getElementById("pWinRate").innerHTML = 0
    document.getElementById("cWinRate").innerHTML = 0
    document.getElementById("tRate").innerHTML = 0
    document.getElementById("total").innerHTML = 0

}

function winRates() {
    pWinRate = pScore / total * 100
    document.getElementById("pWinRate").innerHTML = pWinRate.toFixed(2) + "%"
    cWinRate = cScore / total * 100
    document.getElementById("cWinRate").innerHTML = cWinRate.toFixed(2) + "%"
    tRate = tScore / total * 100
    document.getElementById("tRate").innerHTML = tRate.toFixed(2) + "%"
}