import _ from 'underscore';

/**
 * @param {Array<String>} letters
 * @param {Array<String>} especials
 * @returns {Array<String>} retorna un array de cartas
 * 
*/

export const crearDeck = (letters, especials, deck) => {

    if(!letters || letters.length === 0) throw new Error("Letters es obligatorio!")

    if(!especials || especials.length === 0) throw new Error("Letters es obligatorio!")

    deck = [];

    for(let i = 2; i < 11; i++){
        for(let letter of letters){
            deck.push(i+letter)
        }
    }
    for(let i = 0; i < 4; i++){
        for(let letter of letters){
            deck.push(especials[i]+letter)
        }
    }

    return _.shuffle(deck);
}