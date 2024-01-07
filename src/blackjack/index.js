import { crearDeck, pedirCarta, turnoComputadora, crearCarta } from "./usecases";
import { acumularPuntos } from "./usecases/acumular-puntos";

const miModulo = (()=> {
  'use strict'
  let deck = [];
  const letters = ['C', 'D', 'H', 'S'],
  especials = ['A', 'J', 'K', 'Q']
  
  let puntosJugadores = [];

  const inicializarJuego = (numJugadores = 2) => {
      deck = crearDeck(letters, especials, deck);
      puntosJugadores = [];
      for(let i = 0; i < numJugadores; i++){
          puntosJugadores.push(0);
      }
  }
  
  // Eventos
  const d = document,
  btnPedir = d.querySelector("#btnPedir"),
  btnDetener = d.querySelector("#btnDetener"),
  btnNuevo = d.querySelector("#btnNuevo"),
    puntosHTML = d.querySelectorAll("small"),
  divCartas = d.querySelectorAll(".cards");


  const activeButtons = (bool) => {
      btnPedir.disabled = bool;
      btnDetener.disabled = bool;
  }
  
  btnPedir.addEventListener('click', e => {
      const carta = pedirCarta(deck);
      const puntosJugador = acumularPuntos(carta, 0, puntosJugadores);
  
      crearCarta(carta, 0);

      if(puntosJugador > 21){
          activeButtons(true);
          turnoComputadora(puntosJugador, puntosJugadores, deck);

      } else if( puntosJugador === 21 ){
          activeButtons(true);
          turnoComputadora(puntosJugador, puntosJugadores, deck);
      }
  
  });
  
  btnDetener.addEventListener("click", () => {
      activeButtons(true);
  
      turnoComputadora(puntosJugadores[0], puntosJugadores, deck);
  });
  
  btnNuevo.addEventListener("click", () => {
      inicializarJuego();
  
      puntosHTML[0].innerText = 0;
      puntosHTML[puntosJugadores.length -1].innerText = 0;
      divCartas[0].innerHTML = '';
      divCartas[puntosJugadores.length -1].innerHTML = '';
  
      activeButtons(false);
  
  });

  return {
      nuevoJuego : inicializarJuego
  };
  
})();