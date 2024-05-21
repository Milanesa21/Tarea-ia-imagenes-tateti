document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const message = document.getElementById("message");
    let gameState = Array(9).fill(null);
    let currentPlayer = 'X';

    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function checkWinner(state) {
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
                return state[a];
            }
        }
        return state.includes(null) ? null : 'Draw';
    }

    function aiMove(state) {
        // Implement AI logic here using TensorFlow.js
        // For simplicity, a random empty cell is chosen here
        let emptyCells = state.map((val, idx) => val === null ? idx : null).filter(val => val !== null);
        return emptyCells[Math.floor(Math.random() * emptyCells.length)];
    }

    function makeMove(index) {
        if (gameState[index] || checkWinner(gameState)) {
            return;
        }
        gameState[index] = currentPlayer;
        renderBoard();
        let winner = checkWinner(gameState);
        if (winner) {
            message.textContent = winner === 'Draw' ? "It's a draw!" : `Player ${winner} wins!`;
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        if (currentPlayer === 'O') {
            let aiIndex = aiMove(gameState);
            makeMove(aiIndex);
        }
    }

    function renderBoard() {
        board.innerHTML = '';
        gameState.forEach((cell, idx) => {
            const cellDiv = document.createElement("div");
            cellDiv.className = "cell";
            cellDiv.textContent = cell;
            cellDiv.addEventListener("click", () => makeMove(idx));
            board.appendChild(cellDiv);
        });
    }

    renderBoard();
});
