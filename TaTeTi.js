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
        let bestScore = -Infinity;
        let move;
        for (let i = 0; i < state.length; i++) {
            if (state[i] === null) {
                state[i] = currentPlayer;
                let score = minimax(state, 0, false);
                state[i] = null;
                if (score > bestScore) {
                    bestScore = score;
                    move = i;
                }
            }
        }
        return move;
    }

    function minimax(state, depth, isMaximizing) {
        let result = checkWinner(state);
        if (result !== null) {
            if (result === 'O') {
                return 10 - depth;
            } else if (result === 'X') {
                return depth - 10;
            } else {
                return 0;
            }
        }

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < state.length; i++) {
                if (state[i] === null) {
                    state[i] = 'O';
                    let score = minimax(state, depth + 1, false);
                    state[i] = null;
                    bestScore = Math.max(score, bestScore);
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < state.length; i++) {
                if (state[i] === null) {
                    state[i] = 'X';
                    let score = minimax(state, depth + 1, true);
                    state[i] = null;
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }
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
