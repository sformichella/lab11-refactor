import {
    makePokemonSelection
} from '../utils.js'

const test = QUnit.test;

test('makePokemonSelection should return a label element with an img, radio button, and span elements', (expect) => {

    const expected = '<label for="first-pokemon"><img class="pokemon-image"><input type="radio" name="pokemon" id="first-pokemon" autocomplete="off" class="hidden"><span></span></label>'

    const actual = makePokemonSelection('first-pokemon');

    expect.equal(actual.outerHTML, expected);
});
