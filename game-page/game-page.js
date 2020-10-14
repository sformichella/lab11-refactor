import {
    getDistinctRandomNumbers,
    createPokemonSelection,
    getPokemonByIndex,
    populateRadioButton,
    getChildType,
    findPokemonByName,
    getTotalCatches,
    capitalize
} from '../utils.js';

import {
    default as pokemonArray
} from '../pokemon.js'

// DOM Elements
const numberOfCatchesDisplay = document.getElementById('caught-poke-number');
const catchDisplay = document.getElementById('catch-text');
const selectionSection = document.getElementById('selection-section');
const nextSet = document.getElementById('next-set-button');


// State
export const catchesAndEncounters = [];


// Initialize Buttons
const buttons = [
    createPokemonSelection('first-pokemon'),
    createPokemonSelection('second-pokemon'),
    createPokemonSelection('third-pokemon')
]

let randomIndices = getDistinctRandomNumbers(pokemonArray.length, 3);

for (const button of buttons) {
    const pokeObject = getPokemonByIndex(randomIndices[buttons.indexOf(button)]);

    populateRadioButton(button, pokeObject);

    selectionSection.append(button);
}


// Handle Selections and Next Button Click
selectionSection.addEventListener('change', (e) => {

    const catchName = getChildType(e.target.parentElement, 'span').textContent;

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
        let pokeEncounter = findPokemonByName(catchesAndEncounters, encounterName);

            // Increment Encounters
        if (pokeEncounter) {
            pokeEncounter.encounters ++;
        } else {
            catchesAndEncounters.push({
                name: encounterName,
                encounters: 1,
                catches: 0
            })
        }

            // Increment Catches
        if (input === e.target) {
            const catchName = getChildType(button, 'span').textContent;
            const pokeCatch = findPokemonByName(catchesAndEncounters, catchName);

            pokeCatch.catches ++;
        }
        // Work out catches and encounters
        pokeEncounter = findPokemonByName(catchesAndEncounters, encounterName);
        const encounters = pokeEncounter.encounters;
        const catches = pokeEncounter.catches;

        const encountersDisplay = getChildType(button, 'p');
        encountersDisplay.classList.remove('hidden');

        // encountersDisplay.textContent = `You've encountered ${capitalize(catchName)} ${encounters} times and caught it ${catches} times!`;
        encountersDisplay.textContent = `Encounters: ${encounters},  Catches: ${catches}`

    }
    
    
    // Display catch and total number
    const totalCatches = getTotalCatches(catchesAndEncounters);
    numberOfCatchesDisplay.textContent = totalCatches;

    catchDisplay.textContent = `Whoa! You caught ${capitalize(catchName)}!`
    catchDisplay.classList.toggle('hidden');


    nextSet.classList.remove('hidden');
})



nextSet.addEventListener('click', () => {
    nextSet.classList.add('hidden');
    catchDisplay.classList.add('hidden');


    // Reset buttons and get new pokemon
    randomIndices = getDistinctRandomNumbers(pokemonArray.length, 3);

    for (const button of buttons) {
        const input = getChildType(button, 'input');
        input.disabled = false;
        input.checked = false;

        const encountersDisplay = getChildType(button, 'p');
        encountersDisplay.classList.add('hidden');

        button.style.opacity = 1.0;
        button.classList.remove('blackground')

        const pokeObject = getPokemonByIndex(randomIndices[buttons.indexOf(button)]);
        populateRadioButton(button, pokeObject);
    }

    const totalCatches = getTotalCatches(catchesAndEncounters);

    if (totalCatches > 4) {
        location.href = '../results';

        localStorage.setItem('catches-and-encounters', JSON.stringify(catchesAndEncounters));
    }
})