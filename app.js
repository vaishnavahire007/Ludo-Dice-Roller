const dice = document.getElementById('dice');
const face = document.getElementById('face');
const rollBtn = document.getElementById('rollBtn');
const playerTurn = document.getElementById('playerTurn');
const themeBtn = document.getElementById('themeBtn');
const body = document.body;

const players = ['Player 1', 'Player 2', 'Player 3', 'Player 4'];
let currentPlayerIndex = 0;

// Dice Roll Logic
rollBtn.addEventListener('click', () => {
    dice.classList.add('rolling');
    face.textContent = '...';

    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        face.textContent = randomNumber;
        dice.classList.remove('rolling');

        // Update player turn
        currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
        playerTurn.textContent = `${players[currentPlayerIndex]}'s Turn`;
    }, 500);
});

// Dark Mode Toggle Logic
themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️ Light Mode';
    } else {
        themeBtn.textContent = '🌙 Dark Mode';
    }
});