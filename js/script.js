function iniciaArena() {

    const armas = [espada, hacha, mazo, lanza, daga];

    renderizarArmas(armas);

    function obtenerArmaAleatoria() {
        const indiceAleatorio = Math.floor(Math.random() * armas.length);
        return armas[indiceAleatorio];
    }

    let armaJugadorSeleccionada = null;
    let rondaActual = 1;
    let puntajeJugador = 0;
    let puntajeComputadora = 0;

    function seleccionarArma(arma) {
        armaJugadorSeleccionada = arma;
        console.log(`Has seleccionado: ${arma.nombre}`);
        jugarRonda();
    }

    function determinarGanador(armaJugador, armaComputadora) {
        if (armaJugador.esGanadoraContra(armaComputadora)) {
            return "jugador";
        } else if (armaComputadora.esGanadoraContra(armaJugador)) {
            return "computadora";
        } else {
            return "empate";
        }
    }

    function jugarRonda() {
        const nombreJugador = document.getElementById('nombreJugador').value;
        if (!nombreJugador) {
            alert("Por favor, ingresa tu nombre antes de iniciar la ronda.");
            return;
        }

        if (!armaJugadorSeleccionada) {
            alert("Por favor, selecciona un arma antes de iniciar la ronda.");
            return;
        }

        const armaComputadora = obtenerArmaAleatoria();
        const resultado = determinarGanador(armaJugadorSeleccionada, armaComputadora);
        const resultadoDiv = document.getElementById('resultado');

        resultadoDiv.innerHTML += `<p><strong>Ronda ${rondaActual}:</strong></p>
                                    <p>${nombreJugador} eligió: ${armaJugadorSeleccionada.nombre}</p>
                                    <p>Descripción: ${armaJugadorSeleccionada.descripcion}</p>
                                    <p>Computadora eligió: ${armaComputadora.nombre}</p>
                                    <p>Descripción: ${armaComputadora.descripcion}</p>`;

        if (resultado === "jugador") {
            puntajeJugador++;
            resultadoDiv.innerHTML += "<p><strong>Resultado: Jugador gana esta ronda.</strong></p>";
        } else if (resultado === "computadora") {
            puntajeComputadora++;
            resultadoDiv.innerHTML += "<p><strong>Resultado: Computadora gana esta ronda.</strong></p>";
        } else {
            resultadoDiv.innerHTML += "<p><strong>Resultado: Esta ronda es un empate.</strong></p>";
        }

        armaJugadorSeleccionada = null;
        rondaActual++;

        if (rondaActual > 3) {
            finalizarJuego();
        } else {
            alert("Selecciona tu arma para la próxima ronda.");
        }
    }

    function finalizarJuego() {
        const resultadoDiv = document.getElementById('resultado');

        resultadoDiv.innerHTML += `<p><strong>Resultado Final:</strong></p>
                                    <p>Jugador ${puntajeJugador} - ${puntajeComputadora} Computadora</p>`;

        if (puntajeJugador > puntajeComputadora) {
            resultadoDiv.innerHTML += "<p><strong>¡Jugador gana el juego!</strong></p>";
            alert("¡Felicidades! ¡Has ganado el juego!");
        } else if (puntajeComputadora > puntajeJugador) {
            resultadoDiv.innerHTML += "<p><strong>Computadora gana el juego.</strong></p>";
            alert("Lo siento, has perdido. La computadora gana el juego.");
        } else {
            resultadoDiv.innerHTML += "<p><strong>El juego termina en empate.</strong></p>";
            alert("El juego termina en empate.");
        }
    }

    window.iniciarJuego = function() {
        const nombreJugador = document.getElementById('nombreJugador').value;
        if (!nombreJugador) {
            alert("Por favor, ingresa tu nombre antes de iniciar el juego.");
            return;
        }

        rondaActual = 1;
        puntajeJugador = 0;
        puntajeComputadora = 0;
        document.getElementById('resultado').innerHTML = "";

        alert("El juego ha comenzado. Selecciona un arma para la primera ronda.");
    }

    // Hacer que `seleccionarArma` esté disponible globalmente
    window.seleccionarArma = seleccionarArma;
}

// Inicia la arena al cargar el script
iniciaArena();