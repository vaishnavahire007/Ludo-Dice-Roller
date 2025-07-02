const dice = document.getElementById('dice');
const face = document.getElementById('face');
const rollBtn = document.getElementById('rollBtn');
const playerTurn = document.getElementById('playerTurn');
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

const players = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];
let currentPlayerIndex = 0;

// Initialize the first player's turn
playerTurn.textContent = `${players[currentPlayerIndex]}'s Turn`;

// Dice Roll Logic
rollBtn.addEventListener('click', () => {
    dice.classList.add('rolling');
    face.textContent = '...';

    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        face.textContent = randomNumber;
        dice.classList.remove('rolling');

        if (randomNumber !== 6) {
            // Move to the next player only if not 6
            currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        }
        
        // Update player turn display
        playerTurn.textContent = `${players[currentPlayerIndex]}'s Turn`;
    }, 500);
});

// Dark Mode Toggle Logic
themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeBtn.textContent = body.classList.contains('dark-mode') 
        ? '☀️ Light Mode' 
        : '🌙 Dark Mode';
});
