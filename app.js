
const startButton = document.getElementById('start-button');
const statsButton = document.getElementById('stats-button');

startButton.addEventListener('click', () => {
    location.href = './game-page';
})

statsButton.addEventListener('click', () => {
    location.href = './results';
})