class TicTacToe {
    clear(){
        board = ['', '', '', '', '', '', '', '', '']
        boardLength = 7
        X = document.getElementById('X')
        O = document.getElementById('O')
        O.checked = false
        X.checked = false
        userSelected = ''
        enemyCharacter = ''
        winnerMessage.innerText = ''
        elementButton.forEach(button => {
            button.innerText = ''
        })
    }
    
    checkBoard(){
       //check first row
       if(board[0] === 'X' && board[1] === 'X' && board[2] === 'X'){
           winnerMessage.innerText = 'X WINS'
           return
       } else if(board[0] === 'O' && board[1] === 'O' && board[2] === 'O'){
           winnerMessage.innerText = 'O WINS'
           return
       }
       //check second row
       if(board[3] === 'X' && board[4] === 'X' && board[5] === 'X'){
           winnerMessage.innerText = 'X WINS'
           return
       } else if(board[3] === 'O' && board[4] === 'O' && board[5] === 'O'){
           winnerMessage.innerText = 'O WINS'
           return
       }
       //check third row
       if(board[6] === 'X' && board[7] === 'X' && board[8] === 'X'){
           winnerMessage.innerText = 'X WINS'
           return
       } else if(board[6] === 'O' && board[7] === 'O' && board[8] === 'O'){
           winnerMessage.innerText = 'O WINS'
           return
       }
       //check first column
       if(board[0] === 'X' && board[3] === 'X' && board[6] === 'X'){
           winnerMessage.innerText = 'X WINS'
           return
       } else if(board[0] === 'O' && board[3] === 'O' && board[6] === 'O'){
           winnerMessage.innerText = 'O WINS'
           return
       }
       //check second column
       if(board[1] === 'X' && board[4] === 'X' && board[7] === 'X'){
           winnerMessage.innerText = 'X WINS'
           return
       } else if(board[1] === 'O' && board[4] === 'O' && board[7] === 'O'){
           winnerMessage.innerText = 'O WINS'
           return
       }
       //check third column
       if(board[2] === 'X' && board[5] === 'X' && board[8] === 'X'){
           winnerMessage.innerText = 'X WINS'
           return
       } else if(board[2] === 'O' && board[5] === 'O' && board[8] === 'O'){
           winnerMessage.innerText = 'O WINS'
           return
       }
       //check for left diagonal win
       if(board[0] === 'X' && board[4] === 'X' && board[8] === 'X'){
           winnerMessage.innerText = 'X WINS'
           return
       } else if(board[0] === 'O' && board[4] === 'O' && board[8] === 'O'){
           winnerMessage.innerText = 'O WINS'
           return
       }
       //check for right diagonal win
       if(board[2] === 'X' && board[4] === 'X' && board[6] === 'X'){
           winnerMessage.innerText = 'X WINS'
           return
       } else if(board[2] === 'O' && board[4] === 'O' && board[6] === 'O'){
           winnerMessage.innerText = 'O WINS'
           return
       }
       //check for tie 
       else if(boardLength <= 0){
           winnerMessage.innerText = 'TIE'
       }
    }
}
const elementButton = document.querySelectorAll('[data-element]')
const clearButton = document.querySelector('[data-clear]')
const winnerMessage = document.getElementById('winner')
const xSel = document.getElementById('X')
const oSel = document.getElementById('O')
let userSelected
let enemyCharacter
let board = [,,,,,,,,]
let boardLength = 7
const tictactoe = new TicTacToe()
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
const userUpdateArr = (num) => {
    board[num] = userSelected
}
const enemyUpdateArr = () => {
    let r = getRandomIntInclusive(0, 8)
    if(elementButton[r].innerText !== 'X' && elementButton[r].innerText !== 'O'){
        board[r] = enemyCharacter
        elementButton[r].innerText = enemyCharacter
        boardLength -= 2
    } else {
        enemyUpdateArr()
    }
}
clearButton.addEventListener('click', button => {
    tictactoe.clear()
})
elementButton.forEach(button => {
    button.addEventListener('click', () => {
        if(oSel.checked === false && xSel.checked === false){
            return
        }
        if(winnerMessage.innerText === 'X WINS' || winnerMessage.innerText === 'O WINS'){
            return
        }
        if(button.innerText !== ''){
            return
        } else {
        button.innerText = userSelected
        enemyUpdateArr()
        tictactoe.checkBoard()
        }
    })
})
xSel.addEventListener('click', button => {
    if(oSel.checked === true){
        tictactoe.clear()
    }
    xSel.checked = true
    userSelected = 'X'
    enemyCharacter = 'O'
})
oSel.addEventListener('click', button => {
    if(xSel.checked === true){
        tictactoe.clear()
    }
    oSel.checked = true
    userSelected = 'O'
    enemyCharacter = 'X'
})

