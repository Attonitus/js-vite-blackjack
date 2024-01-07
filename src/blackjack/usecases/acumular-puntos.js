import {valorCarta} from './index'
const puntosHTML = document.querySelectorAll("small");

// Turno: último será la computadora
export const acumularPuntos = (carta, turno, puntosJugadores) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}