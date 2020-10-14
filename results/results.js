import {
    renderCatchRow,
    renderEncounterRow
} from '../utils.js';


const catchesAndEncounters = JSON.parse(localStorage.getItem('catches-and-encounters'))



const catchesTable = document.getElementById('catches-table');
const encountersTable = document.getElementById('encounters-table');

for (const pokemon of catchesAndEncounters) {
    if (pokemon.catches) {
        catchesTable.append(renderCatchRow(pokemon));
    } else {
        encountersTable.append(renderEncounterRow(pokemon));
    }
}

console.log(catchesAndEncounters[0]);
