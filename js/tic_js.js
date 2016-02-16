
var turn = 0
var gameStatus = 0
var blueWins = 0
var redWins = 0
var gameBoard = [0,0,0,0,0,0,0,0,0,0];

function tester(x, y) {
    if (gameStatus === 0) {
        if (gameBoard[y] === 0) {
            if (turn === 0) {
                document.getElementById(x).style = "background-color: blue;"
                gameBoard[y] = 1
                turn = 1
                document.getElementById("status").innerHTML = "Red's Turn"
            }
            else if (turn === 1) {
                document.getElementById(x).style = "background-color: red;"
                gameBoard[y] = 2
                turn = 0
                document.getElementById("status").innerHTML = "Blue's Turn"
            }
            drawCheck()
            blueCheck()
            redCheck()            
            updateScore()
        }        
    }
}

function blueCheck() {
    if (gameBoard[1] === 1 && gameBoard[2] === 1 && gameBoard[3] === 1) {
        document.getElementById("status").innerHTML = "Blue Wins!"
        gameStatus = 1
        blueWins += 1
    }
    else if (gameBoard[4] === 1 && gameBoard[5] === 1 && gameBoard[6] === 1) {
        document.getElementById("status").innerHTML = "Blue Wins!"
        gameStatus = 1
        blueWins += 1
    }
    else if (gameBoard[7] === 1 && gameBoard[8] === 1 && gameBoard[9] === 1) {
        document.getElementById("status").innerHTML = "Blue Wins!"
        gameStatus = 1
        blueWins += 1
    }
    else if (gameBoard[1] === 1 && gameBoard[4] === 1 && gameBoard[7] === 1) {
        document.getElementById("status").innerHTML = "Blue Wins!"
        gameStatus = 1
        blueWins += 1
    }
    else if (gameBoard[2] === 1 && gameBoard[5] === 1 && gameBoard[8] === 1) {
        document.getElementById("status").innerHTML = "Blue Wins!"
        gameStatus = 1
        blueWins += 1
    }
    else if (gameBoard[3] === 1 && gameBoard[6] === 1 && gameBoard[9] === 1) {
        document.getElementById("status").innerHTML = "Blue Wins!"
        gameStatus = 1
        blueWins += 1
    }
    else if (gameBoard[1] === 1 && gameBoard[5] === 1 && gameBoard[9] === 1) {
        document.getElementById("status").innerHTML = "Blue Wins!"
        gameStatus = 1
        blueWins += 1
    }
    else if (gameBoard[3] === 1 && gameBoard[5] === 1 && gameBoard[7] === 1) {
        document.getElementById("status").innerHTML = "Blue Wins!"
        gameStatus = 1
        blueWins += 1
    }
}

function redCheck() {
    if (gameBoard[1] === 2 && gameBoard[2] === 2 && gameBoard[3] === 2) {
        document.getElementById("status").innerHTML = "Red Wins!"
        gameStatus = 1
        redWins += 1
    }
    else if (gameBoard[4] === 2 && gameBoard[5] === 2 && gameBoard[6] === 2) {
        document.getElementById("status").innerHTML = "Red Wins!"
        gameStatus = 1
        redWins += 1
    }
    else if (gameBoard[7] === 2 && gameBoard[8] === 2 && gameBoard[9] === 2) {
        document.getElementById("status").innerHTML = "Red Wins!"
        gameStatus = 1
        redWins += 1
    }
    else if (gameBoard[1] === 2 && gameBoard[4] === 2 && gameBoard[7] === 2) {
        document.getElementById("status").innerHTML = "Red Wins!"
        gameStatus = 1
        redWins += 1
    }
    else if (gameBoard[2] === 2 && gameBoard[5] === 2 && gameBoard[8] === 2) {
        document.getElementById("status").innerHTML = "Red Wins!"
        gameStatus = 1
        redWins += 1
    }
    else if (gameBoard[3] === 2 && gameBoard[6] === 2 && gameBoard[9] === 2) {
        document.getElementById("status").innerHTML = "Red Wins!"
        gameStatus = 1
        redWins += 1
    }
    else if (gameBoard[1] === 2 && gameBoard[5] === 2 && gameBoard[9] === 2) {
        document.getElementById("status").innerHTML = "Red Wins!"
        gameStatus = 1
        redWins += 1
    }
    else if (gameBoard[3] === 2 && gameBoard[5] === 2 && gameBoard[7] === 2) {
        document.getElementById("status").innerHTML = "Red Wins!"
        gameStatus = 1
        redWins += 1
    }
}

function drawCheck() {
    if (gameBoard[1] != 0 && gameBoard[2] != 0 && gameBoard[3] != 0 && gameBoard[4] != 0 && gameBoard[5] != 0 && gameBoard[6] != 0 && gameBoard[7] != 0 && gameBoard[8] != 0 && gameBoard[9] != 0) {
        document.getElementById("status").innerHTML = "Draw"
    }
}

function updateScore() {
    document.getElementById("blueScoreboard").innerHTML = blueWins
    document.getElementById("redScoreboard").innerHTML = redWins
}

function newGame() {
    defaultColor = "lightgreen"
    gameStatus = 0
    gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    document.getElementById("T1").style = "background-color: " + defaultColor + ";"
    document.getElementById("T2").style = "background-color: " + defaultColor + ";"
    document.getElementById("T3").style = "background-color: " + defaultColor + ";"
    document.getElementById("M1").style = "background-color: " + defaultColor + ";"
    document.getElementById("M2").style = "background-color: " + defaultColor + ";"
    document.getElementById("M3").style = "background-color: " + defaultColor + ";"
    document.getElementById("B1").style = "background-color: " + defaultColor + ";"
    document.getElementById("B2").style = "background-color: " + defaultColor + ";"
    document.getElementById("B3").style = "background-color: " + defaultColor + ";"
    if (turn === 1) {
        document.getElementById("status").innerHTML = "Red's Turn"
    }
    else if (turn === 0) {
        document.getElementById("status").innerHTML = "Blue's Turn"
    }
}

function reset() {
    redWins = 0
    blueWins = 0
    updateScore()
    newGame()
}