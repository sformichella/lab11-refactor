import {
    renderCatchRow,
    renderEncounterRow
} from '../utils.js';

import {
    handleHomeButton,
    handlePlayButton,
} from '../buttons/button-handlers.js'


const catchesAndEncounters = JSON.parse(localStorage.getItem('catches-and-encounters'))

const catchesTable = document.getElementById('catches-table');
const encountersTable = document.getElementById('encounters-table');

const homeButton = document.getElementById('home-button');
homeButton.addEventListener('click', handleHomeButton);

const playButton = document.getElementById('new-session');
playButton.addEventListener('click', handlePlayButton);

const allTimeStatsButton = document.getElementById('all-time-stats');
allTimeStatsButton.addEventListener('click', () => {
    
})


for (const pokemon of catchesAndEncounters) {
    if (pokemon.catches) {
        catchesTable.append(renderCatchRow(pokemon));
    } else {
        encountersTable.append(renderEncounterRow(pokemon));
    }
}

console.log(catchesAndEncounters[0]);
