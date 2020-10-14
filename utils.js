import {
    default as pokemonArray
} from './pokemon.js';

export function createPokemonSelection(label) {
    const selectionLabel = document.createElement('label');
    selectionLabel.setAttribute('for', label);

    const image = document.createElement('img');
    image.classList.add('pokemon-image');

    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'pokemon');
    input.setAttribute('id', label);
    input.setAttribute('autocomplete', 'off');
    input.classList.add('hidden');

    const title = document.createElement('span');
    const catchesAndEncounters = document.createElement('p');

    selectionLabel.append(image, input, title, catchesAndEncounters);

    return selectionLabel
};


export function getDistinctRandomNumbers(range, number) {
    const array = [];
    
    // Generate an array consisting of 0, 1, 2, ..., range - 1
    while (array.length < range) {
        array.push(array.length);
    }

    // Take out random elements of the array until the array has the given number of elements
    while (array.length > number) {
        const randomIndex = Math.floor(Math.random() * array.length);

        array.splice(randomIndex, 1);
    }

    return array
};


export function getPokemonByIndex(index) {
    return {
        name: pokemonArray[index]['pokemon'],
        image: pokemonArray[index]['url_image']
    };
};


export function populateRadioButton(radio, pokemonObject) {
    const image = getChildType(radio, 'img');
    image.src = pokemonObject.image;

    const name = getChildType(radio, 'span');
    name.textContent = pokemonObject.name;
};


export function getAllChildren(element) {
    return [...element.childNodes]
};


export function getChildType(element, string) {
    const children = [];
    for (const child of getAllChildren(element)) {
        if (child.tagName === string.toUpperCase()){
            children.push(child);
        }
    }

    if (children.length === 1) {
        return children[0]
    } else {
        return children
    }
};


export function findPokemonByName(array, string) {
    for (const object of array) {
        if (object.name === string) {
            return object
        }
    }
    return null
};


export function getTotalCatches(pokemonData) {
    let total = 0;

    for (const pokemon of pokemonData) {
        total += pokemon.catches;
    }

    return total;
};


export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};


export function renderCatchRow(pokeObject) {
    const row = document.createElement('tr');

    const name = document.createElement('td');
    name.textContent = pokeObject.name;

    const encounters = document.createElement('td');
    encounters.textContent = pokeObject.encounters;

    const catches = document.createElement('td');
    catches.textContent = pokeObject.catches;

    row.append(name, encounters, catches);

    return row;
};


export function renderEncounterRow(pokeObject) {
    const row = document.createElement('tr');

    const name = document.createElement('td');
    name.textContent = pokeObject.name;

    const encounters = document.createElement('td');
    encounters.textContent = pokeObject.encounters;

    row.append(name, encounters);

    return row
};


// export function getRootDir(location) {
//     if (location.path === '/') {
//         return location.href;
//     } else {
//         let newPath = location.href.slice(0, location.href.length - 1);

//         while (newPath[newPath.length] !== '/') {
//             newPath = newPath.slice(0, newpath.length - 1)
//         }

//         return newPath;
//     }
// }