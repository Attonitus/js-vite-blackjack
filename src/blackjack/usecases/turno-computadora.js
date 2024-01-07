import {pedirCarta, crearCarta} from './index'
import {acumularPuntos} from './acumular-puntos'

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {Array<Number>} puntosJugadores 
 * @param {Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos, puntosJugadores, deck ) => {

    if(!puntosMinimos || !puntosJugadores || !deck) throw new Error('Puntos minimos, puntosJugadores y el deck son obligatorios');
    let puntosComputador = 0;
    do {

        const carta = pedirCarta(deck);
        puntosComputador  = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores);
        crearCarta(carta, puntosJugadores.length - 1);

        if(puntosMinimos > 21){
            break;
        }

    } while ((puntosComputador < puntosMinimos) && (puntosMinimos <= 21));

    setTimeout(()=> {
        if(puntosComputador === puntosMinimos){
            alert("Empate, nadie ganó!!");
        } else if(puntosComputador > 21) {
            alert("El jugador ganó!!")
        } else if(puntosMinimos > 21) {
            alert("La computadora ganó!!")
        } else {
            alert("Computadora gana")
        }
    }, 30)
}