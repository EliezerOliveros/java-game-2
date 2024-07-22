function iniciaArena() {
    const nombreJugador = prompt("¡Bienvenido Gladiador! Ingresa tu nombre:");
  
    if (!nombreJugador) {
        console.log("No ingresaste un nombre válido. Refresca la página para intentarlo de nuevo.");
        return;
    }
  
    console.log(`Hola Gladiador, ${nombreJugador}! Vamos a la Arena.`);
  
    class Arma {
        constructor(nombre, descripcion, ganaContra, pierdeContra) {
          this.nombre = nombre;
          this.descripcion = descripcion;
          this.ganaContra = ganaContra;
          this.pierdeContra = pierdeContra;
        }
      
        esGanadoraContra(otraArma) {
          return this.ganaContra.includes(otraArma.nombre);
        }
      
        esPerdedoraContra(otraArma) {
          return this.pierdeContra.includes(otraArma.nombre);
        }
    }
      
    const espada = new Arma(
        "La espada",
        "Un arma versátil que le puede ganar fácilmente a las lanzas y dagas, pero contra las hachas y mazas no te irá tan bien.",
        ["La daga", "La lanza"],
        ["El hacha", "El mazo"]
    );
      
    const hacha = new Arma(
        "El hacha",
        "Un arma con un gran filo frontal, la cual le ganará a las espadas y a las lanzas, pero muy lenta contra dagas y sin defensa contra los mazos.",
        ["La espada", "La lanza"],
        ["La daga", "El mazo"]
    );
      
    const mazo = new Arma(
        "El mazo",
        "Un arma pesada capaz de destruir la armadura de tus enemigos, fuerte contra las espadas y las hachas, pero muy lenta contra las dagas y con un corto alcance contra las lanzas.",
        ["La espada", "El hacha"],
        ["La daga", "La lanza"]
    );
      
    const lanza = new Arma(
        "La lanza",
        "Un arma con una punta filosa y un gran alcance, perfecta para pelear contra las pequeñas dagas y los lentos mazos, pero no tan rápida contra las versátiles espadas y sin equilibrio contra las hachas.",
        ["La daga", "El mazo"],
        ["La espada", "El hacha"]
    );
      
    const daga = new Arma(
        "La daga",
        "Un arma rápida y versátil, muy eficiente contra las hachas y los lentos mazos, pero no puede contra el alcance de las lanzas y las espadas.",
        ["El hacha", "El mazo"],
        ["La espada", "La lanza"]
    );
      
    const armas = [espada, hacha, mazo, lanza, daga];
      
    function obtenerArmaAleatoria() {
        const indiceAleatorio = Math.floor(Math.random() * armas.length);
        return armas[indiceAleatorio];
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
      
    function jugarRonda(armaJugador) {
        const armaComputadora = obtenerArmaAleatoria();
        console.log(`Jugador eligió: ${armaJugador.nombre}`);
        console.log(`Computadora eligió: ${armaComputadora.nombre}`);
        const resultado = determinarGanador(armaJugador, armaComputadora);
        return resultado;
    }
      
    function jugarJuego() {
        let puntajeJugador = 0;
        let puntajeComputadora = 0;
      
        for (let ronda = 1; ronda <= 3; ronda++) {
          console.log(`Ronda ${ronda}`);
          const armaJugador = obtenerArmaAleatoria();
          const resultado = jugarRonda(armaJugador);
      
          if (resultado === "jugador") {
            puntajeJugador++;
            console.log("Jugador gana esta ronda.");
          } else if (resultado === "computadora") {
            puntajeComputadora++;
            console.log("Computadora gana esta ronda.");
          } else {
            console.log("Esta ronda es un empate.");
          }
          console.log('---');
        }
      
        console.log(`Resultado Final: Jugador ${puntajeJugador} - ${puntajeComputadora} Computadora`);
      
        if (puntajeJugador > puntajeComputadora) {
          console.log("¡Jugador gana el juego!");
        } else if (puntajeComputadora > puntajeJugador) {
          console.log("Computadora gana el juego.");
        } else {
          console.log("El juego termina en empate.");
        }
    }
      
    
    jugarJuego();
  }
  
  console.log('Bienvenido a Gladiator Arena, escoge tus armas. Gladiador te explica cómo funcionan. En esta arena, tenemos para escoger 5 tipos de armas: espadas, hacha, mazo, lanza y daga. Cada arma tiene ventaja y desventaja; en esto te dejo cuáles le ganan a cuáles y con cuáles pierde contra otras.');
  
  iniciaArena();
  