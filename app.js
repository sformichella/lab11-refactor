import {
    handlePlayButton,
    handleStatsButton
} from './buttons/button-handlers.js'

const startButton = document.getElementById('start-button');
const statsButton = document.getElementById('stats-button');

startButton.addEventListener('click', handlePlayButton);
statsButton.addEventListener('click', handleStatsButton);