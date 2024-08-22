function iniciaArena() {

    const armas = [espada, hacha, mazo, lanza, daga];
    const puntuaciones = [];

    renderizarArmas(armas);

    function obtenerArmaAleatoria() {
        const indiceAleatorio = Math.floor(Math.random() * armas.length);
        return armas[indiceAleatorio];
    }

    let armaJugadorSeleccionada = null;
    let rondaActual = 1;
    let puntajeJugador = 0;
    let derrotasJugador = 0;

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
            Swal.fire({
                icon: "warning",
                title: "Nombre requerido",
                text: "Por favor, ingresa tu nombre antes de iniciar la ronda."
            });
            return;
        }

        if (!armaJugadorSeleccionada) {
            Swal.fire({
                icon: "warning",
                title: "Arma no seleccionada",
                text: "Por favor, selecciona un arma antes de iniciar la ronda."
            });
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
            derrotasJugador++;
            resultadoDiv.innerHTML += "<p><strong>Resultado: Computadora gana esta ronda.</strong></p>";
        } else {
            resultadoDiv.innerHTML += "<p><strong>Resultado: Esta ronda es un empate.</strong></p>";
        }

        armaJugadorSeleccionada = null;
        rondaActual++;

        if (derrotasJugador >= 3) {
            finalizarJuego(nombreJugador, puntajeJugador);
        } else {
            Swal.fire({
                icon: "info",
                title: "Nueva Ronda",
                text: "Selecciona tu arma para la próxima ronda."
            });
        }
    }

    function finalizarJuego(nombreJugador, puntajeJugador) {
        const resultadoDiv = document.getElementById('resultado');

        resultadoDiv.innerHTML += `<p><strong>Resultado Final:</strong></p>
                                    <p>Jugador ganó ${puntajeJugador} rondas</p>
                                    <p>Computadora ganó ${derrotasJugador} rondas</p>`;

        if (derrotasJugador >= 3) {
            resultadoDiv.innerHTML += "<p><strong>¡La computadora gana el juego!</strong></p>";
            Swal.fire({
                icon: "error",
                title: "Perdiste",
                text: "Has perdido 3 rondas. La computadora gana el juego."
            });
        }

        // Guardar la puntuación del jugador
        puntuaciones.push({ nombre: nombreJugador, rondasGanadas: puntajeJugador });

        // Mostrar la tabla de puntuaciones
        mostrarPuntuaciones();
    }

    function mostrarPuntuaciones() {
        const puntuacionesDiv = document.getElementById('puntuaciones');
        puntuacionesDiv.innerHTML = '<h3>Puntuaciones:</h3>';

        puntuaciones.sort((a, b) => b.rondasGanadas - a.rondasGanadas);

        puntuaciones.forEach((puntuacion, index) => {
            puntuacionesDiv.innerHTML += `<p>${index + 1}. ${puntuacion.nombre}: ${puntuacion.rondasGanadas} rondas ganadas</p>`;
        });

        Swal.fire({
            icon: "info",
            title: "Puntuaciones",
            html: puntuacionesDiv.innerHTML
        });
    }

    window.iniciarJuego = function() {
        const nombreJugador = document.getElementById('nombreJugador').value;
        if (!nombreJugador) {
            Swal.fire({
                icon: "warning",
                title: "Nombre requerido",
                text: "Por favor, ingresa tu nombre antes de iniciar el juego."
            });
            return;
        }

        rondaActual = 1;
        puntajeJugador = 0;
        derrotasJugador = 0;
        document.getElementById('resultado').innerHTML = "";

        Swal.fire({
            icon: "info",
            title: "¡Comienza el juego!",
            text: "El juego ha comenzado. Selecciona un arma para la primera ronda."
        });
    }

    window.seleccionarArma = seleccionarArma;
}

iniciaArena();

function iniciarJuego() {
    const nombreJugador = localStorage.getItem('loggedInUser');
    if (!nombreJugador) {
        Swal.fire({
            icon: "warning",
            title: "Nombre requerido",
            text: "Por favor, inicia sesión antes de iniciar el juego."
        });
        return;
    }

    rondaActual = 1;
    puntajeJugador = 0;
    puntajeComputadora = 0;
    document.getElementById('resultado').innerHTML = "";

    Swal.fire({
        icon: "info",
        title: "¡Comienza el juego!",
        text: "El juego ha comenzado. Selecciona un arma para la primera ronda."
    });
}