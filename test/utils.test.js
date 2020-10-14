import {
    createPokemonSelection,
    getRootDir
} from '../utils.js'

const test = QUnit.test;

test('createPokemonSelection should return a label element with an img, radio button, and span elements', (expect) => {

    const expected = '<label for="first-pokemon"><img class="pokemon-image"><input type="radio" name="pokemon" id="first-pokemon" autocomplete="off" class="hidden"><span></span></label>'

    const actual = createPokemonSelection('first-pokemon');

    expect.equal(actual.outerHTML, expected);
});


// test('getRootDir shold return the highest directory of a webpage', (expect) => {
//     const myPath = 'http://127.0.0.1:5500/results/';

//     const expected = 'http://127.0.0.1:5500/';

//     const actual = getRootDir(myPath);

//     expect.equal(actual, expected);
// })
