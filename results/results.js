import {
    renderCatchRow,
    renderEncounterRow,
    capitalize
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



// Chart
const ctx = document.getElementById('chart').getContext('2d');

const encountersData = catchesAndEncounters.map(pokemon => pokemon.encounters);
const catchData = catchesAndEncounters.map(pokemon => pokemon.catches);
const labels = catchesAndEncounters.map(pokemon => capitalize(pokemon.name));

const dataSets = [];

const labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [
            {
                label: 'Encounters',
                data: encountersData,
                backgroundColor: 'red'
            },
            {
                label: 'Catches',
                data: catchData,
                backgroundColor: 'blue'
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'yellow',
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'yellow',
                }
            }]
        },
        legend: {
            labels: {
                fontColor: 'yellow',
            }
        }
    }
});