function renderizarArmas(armas) {
    let container_cards = document.querySelector('#container');
    container_cards.innerHTML = ''; 

    armas.forEach((arma) => {
        let copia = document.querySelector('#weapon-template').content.cloneNode(true);

        copia.querySelector('h5').innerText = arma.nombre;
        copia.querySelector('.weapon-description').textContent = arma.descripcion;
        copia.querySelector('.ganaContra').textContent = `Gana contra: ${arma.ganaContra.join(", ")}`;
        copia.querySelector('.pierdeContra').textContent = `Pierde contra: ${arma.pierdeContra.join(", ")}`;
        copia.querySelector('.select-weapon').onclick = () => seleccionarArma(arma);

        copia.querySelector('img').src = arma.img;

        container_cards.appendChild(copia);
    });
}