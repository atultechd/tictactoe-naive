const cells = document.querySelectorAll('[data-cell]');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

function handleCellClick(event) {
    const cell = event.target;
    console.log(cell)
    const index = Array.from(cells).indexOf(cell);

    if (gameBoard[index] === '' && !checkWinner()) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        cell.setAttribute('data-cell', currentPlayer);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    if (checkWinner()) {
        alert(`${currentPlayer === 'X' ? 'O' : 'X'} wins!`);
        cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
    }
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            return true;
        }
    }

    return false;
}
