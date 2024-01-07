/**
 * 
 * @param {Array<String>} deck 
 * @returns devuelve una carta
 */

export const pedirCarta = (deck) => {

    if(!deck) throw new Error('Deck es obligatorio');
    if(deck.length === 0){
        throw 'No hay más cartas'
    }
    return deck.pop();
}