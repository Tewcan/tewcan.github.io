var board = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]
var turnColor = 1
var emptyCheck = 0
var redWins = 0
var yellowWins = 0
var gameStatus = 0

function game(col) {   
    emptyCheck = 0
    row = 0
    if (gameStatus === 0) {
        while (emptyCheck === 0 && row < 7) {
            if (board[col][row] === 0) {
                board[col][row] = turnColor
                emptyCheck = 1
                changeTurn()
            }
            else {
                row++
            }
        }
        updateBoard()
        winCheck(col, row)
        updateScore()
    }
}

function changeTurn() {
    if (turnColor === 1) {
        turnColor = 2
        document.getElementById("status").innerHTML = "Yellow's turn"
    }
    else if (turnColor === 2) {
        turnColor = 1
        document.getElementById("status").innerHTML = "Red's turn"
    }
}

function winCheck(col, row) {
    var myColor = board[col][row]    
    var l = 1
    var i = 1

    

    // Vertical Check
    while (board[col][row - i] === myColor && row - i >= 0) {
        l += 1
        i += 1
    }

    i = 1
    while (board[col][row + i] === myColor && row + i <= 5) {
        l += 1
        i += 1
    }

    if (l >= 4) {
        winner(myColor)
    }

    // Horizontal check
    i = 1
    l = 1
    while (col - i >= 0 && board[col - i][row] === myColor) {
        l += 1
        i += 1
    }

    i = 1
    while (col + i <= 6 && board[col + i][row] === myColor) {
        l += 1
        i += 1
    }

    if (l >= 4) {
        winner(myColor)
    }
        
    // Diagonal check (NW -- SE)
    i = 1
    l = 1
    while (col - i >= 0 && row + i <= 5 && board[col - i][row + i] === myColor) {
        l += 1
        i += 1
    }

    i = 1
    while (col + i <= 6 && row - i >= 0 && board[col + i][row - i] === myColor) {
        l += 1
        i += 1
    }

    if (l >= 4) {
        winner(myColor)
    }

    // Diagonal check (NE -- SW)
    i = 1
    l = 1
    while (col + i <= 6 && row + i <= 5 && board[col + i][row + i] === myColor) {
        l += 1
        i += 1
    }

    i = 1
    while (col - i >= 0 && row - i >= 0 && board[col - i][row - i] === myColor) {
        l += 1
        i += 1
    }

    if (l >= 4) {
        winner(myColor)
    }
}

function updateBoard() {
    var piece = ""
    for (i = 0; i < 7; i++) {
        for (c = 0; c < 6; c++) {
            piece = i.toString() + c.toString()
            if (board[i][c] === 0) {
                document.getElementById(piece).style.fill = "white"
            }
            else if (board[i][c] === 1) {
                document.getElementById(piece).style.fill = "red"
            }
            else if (board[i][c] === 2) {
                document.getElementById(piece).style.fill = "yellow"
            }            
        }
    }
}

function winner(winColor) {
    switch (winColor) {
        case 1:
            document.getElementById("status").innerHTML = "Red wins!"
            redWins += 1
            gameStatus = 1
            break;
        case 2:
            document.getElementById("status").innerHTML = "Yellow wins!"
            yellowWins += 1
            gameStatus = 1
            break;
    }
}

function updateScore() {
    document.getElementById("redScoreboard").innerHTML = redWins
    document.getElementById("yellowScoreboard").innerHTML = yellowWins
}

function newGame() {
    gameStatus = 0
    board = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]
    updateBoard()
    updateScore()
    switch (turnColor) {
        case 1:
            document.getElementById("status").innerHTML = "Red's turn"
            break;
        case 2:
            document.getElementById("status").innerHTML = "Yellow's turn"
            break;
    }

}

function reset() {
    redWins = 0
    yellowWins = 0
    newGame()
}