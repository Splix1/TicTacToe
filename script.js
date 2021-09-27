class TicTacToe {
    clear(){
        board = ['', '', '', '', '', '', '', '', '']
        boardLength = 9
        let X = document.getElementById('X')
        let O = document.getElementById('O')
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
       if(board[0] === userSelected && board[1] === userSelected && board[2] === userSelected){
           winnerMessage.innerText = 'YOU WON'
           return
       } else if(board[0] === enemyCharacter && board[1] === enemyCharacter && board[2] === enemyCharacter){
           winnerMessage.innerText = 'YOU LOST'
           return
       }
       //check second row
       if(board[3] === userSelected && board[4] === userSelected && board[5] === userSelected){
           winnerMessage.innerText = 'YOU WON'
           return
       } else if(board[3] === enemyCharacter && board[4] === enemyCharacter && board[5] === enemyCharacter){
           winnerMessage.innerText = 'YOU LOST'
           return
       }
       //check third row
       if(board[6] === userSelected && board[7] === userSelected && board[8] === userSelected){
           winnerMessage.innerText = 'YOU WON'
           return
       } else if(board[6] === enemyCharacter && board[7] === enemyCharacter && board[8] === enemyCharacter){
           winnerMessage.innerText = 'YOU LOST'
           return
       }
       //check first column
       if(board[0] === userSelected && board[3] === userSelected && board[6] === userSelected){
           winnerMessage.innerText = 'YOU WON'
           return
       } else if(board[0] === enemyCharacter && board[3] === enemyCharacter && board[6] === enemyCharacter){
           winnerMessage.innerText = 'YOU LOST'
           return
       }
       //check second column
       if(board[1] === userSelected && board[4] === userSelected && board[7] === userSelected){
           winnerMessage.innerText = 'YOU WON'
           return
       } else if(board[1] === enemyCharacter && board[4] === enemyCharacter && board[7] === enemyCharacter){
           winnerMessage.innerText = 'YOU LOST'
           return
       }
       //check third column
       if(board[2] === userSelected && board[5] === userSelected && board[8] === userSelected){
           winnerMessage.innerText = 'YOU WON'
           return
       } else if(board[2] === enemyCharacter && board[5] === enemyCharacter && board[8] === enemyCharacter){
           winnerMessage.innerText = 'YOU LOST'
           return
       }
       //check for left diagonal win
       if(board[0] === userSelected && board[4] === userSelected && board[8] === userSelected){
           winnerMessage.innerText = 'YOU WON'
           return
       } else if(board[0] === enemyCharacter && board[4] === enemyCharacter && board[8] === enemyCharacter){
           winnerMessage.innerText = 'YOU LOST'
           return
       }
       //check for right diagonal win
       if(board[2] === userSelected && board[4] === userSelected && board[6] === userSelected){
           winnerMessage.innerText = 'YOU WON'
           return
       } else if(board[2] === enemyCharacter && board[4] === enemyCharacter && board[6] === enemyCharacter){
           winnerMessage.innerText = 'YOU LOST'
           return
       }
       //check for tie 
       else if(boardLength <= 0){
           winnerMessage.innerText = 'TIE'
           return
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
let boardLength = 9
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
    if(boardLength === 0){
        return
    }
    if(elementButton[r].innerText !== 'X' && elementButton[r].innerText !== 'O'){
        board[r] = enemyCharacter
        elementButton[r].innerText = enemyCharacter
        boardLength--
        tictactoe.checkBoard()
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
        boardLength--
        tictactoe.checkBoard()
        if(winnerMessage.innerText === ''){
            enemyUpdateArr()
        }
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

