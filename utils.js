
export function makePokemonSelection(label) {
    const selectionLabel = document.createElement('label');
    selectionLabel.setAttribute('for', label);

    const image = document.createElement('img');
    image.classList.add('pokemon-image')

    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'pokemon');
    input.setAttribute('id', label);
    input.setAttribute('autocomplete', 'off');
    input.classList.add('hidden');

    const title = document.createElement('span');

    selectionLabel.append(image, input, title);

    return selectionLabel;
};