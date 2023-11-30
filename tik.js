// Add JavaScript code for the game here
const cells = document.querySelectorAll('[data-cell]');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const checkWinner = () => {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            gameActive = false;
            message.innerText = `Player ${gameBoard[a]} wins!`;
            cells[a].style.backgroundColor = cells[b].style.backgroundColor = cells[c].style.backgroundColor = '#90ee90';
        }
    }

    if (!gameBoard.includes('') && gameActive) {
        gameActive = false;
        message.innerText = "It's a draw!";
    }
};

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameBoard[index] === '' && gameActive) {
            cell.innerText = currentPlayer;
            gameBoard[index] = currentPlayer;
            cell.style.backgroundColor = currentPlayer === 'X' ? '#f0e68c' : '#ffa07a';
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            message.innerText = `Player ${currentPlayer}'s Turn`;
            checkWinner();
        }
    });
});

restartButton.addEventListener('click', () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    message.innerText = "Player X's Turn";
    cells.forEach((cell) => {
        cell.innerText = '';
        cell.style.backgroundColor = '';
    });
});
