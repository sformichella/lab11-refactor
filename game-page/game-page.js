import {
    getDistinctRandomNumbers,
    createPokemonSelection,
    getPokemonByIndex,
    populateRadioButton,
    getChildType,
    findPokemonByName,
    getTotalCatches
} from '../utils.js';

import {
    default as pokemonArray
} from '../pokemon.js'


const catchesDisplay = document.getElementById('caught-poke-number');
const selectionSection = document.getElementById('selection-section');
const nextSet = document.getElementById('next-set-button');

const catchesAndEncounters = [];


// Initialize Buttons
const buttons = [
    createPokemonSelection('first-pokemon'),
    createPokemonSelection('second-pokemon'),
    createPokemonSelection('third-pokemon')
]

const inputs = [];
for (const button of buttons) {
    inputs.push(getChildType(button, 'input'))
}

let randomIndices = getDistinctRandomNumbers(pokemonArray.length, 3);

for (const button of buttons) {
    const pokeObject = getPokemonByIndex(randomIndices[buttons.indexOf(button)]);

    populateRadioButton(button, pokeObject);

    selectionSection.append(button);
}


// Handle Selections and Next Button Click
selectionSection.addEventListener('change', (e) => {
    e.target.parentElement.classList.add('blackground');

    for (const button of buttons) {

        // Disable Buttons
        const input = getChildType(button, 'input');
        input.disabled = true;

        if (input !== e.target) {
            button.style.opacity = 0.4;
        }

        // Handle catchesAndEncounters data
        const encounterName = getChildType(button, 'span').textContent;
        const pokeEncounter = findPokemonByName(catchesAndEncounters, encounterName);

        if (pokeEncounter) {
            pokeEncounter.encounters ++;
        } else {
            catchesAndEncounters.push({
                name: encounterName,
                encounters: 1,
                catches: 0
            })
        }

        if (input === e.target) {
            const catchName = getChildType(button, 'span').textContent;
            const pokeCatch = findPokemonByName(catchesAndEncounters, catchName);

            pokeCatch.catches ++;
        }

        const totalCatches = getTotalCatches(catchesAndEncounters);
        catchesDisplay.textContent = totalCatches;
    }



    nextSet.classList.toggle('hidden');
})



nextSet.addEventListener('click', () => {
    nextSet.classList.toggle('hidden');

    // Reset buttons and get new pokemon
    randomIndices = getDistinctRandomNumbers(pokemonArray.length, 3);

    for (const button of buttons) {
        const input = getChildType(button, 'input');
        input.disabled = false;

        button.style.opacity = 1.0;
        button.classList.remove('blackground')

        const pokeObject = getPokemonByIndex(randomIndices[buttons.indexOf(button)]);
        populateRadioButton(button, pokeObject);
    }


})