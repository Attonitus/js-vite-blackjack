const divCartas = document.querySelectorAll(".cards");

export const crearCarta = (carta, turno) => {
    const $img = document.createElement("img");
    $img.setAttribute("src", `assets/img/${carta}.png`)
    divCartas[turno].appendChild($img);
}