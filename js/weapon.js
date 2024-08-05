class Arma {
    constructor(nombre, descripcion, ganaContra, pierdeContra) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.ganaContra = ganaContra;
        this.pierdeContra = pierdeContra;
        this.img = `./img/${nombre.toLowerCase()}.webp`; // Ruta de la imagen basada en el nombre
    }

    esGanadoraContra(otraArma) {
        return this.ganaContra.includes(otraArma.nombre);
    }

    esPerdedoraContra(otraArma) {
        return this.pierdeContra.includes(otraArma.nombre);
    }
}

// Creación de los objetos Arma
const espada = new Arma(
    "Espada",
    "Un arma versátil que le puede ganar fácilmente a las lanzas y dagas, pero contra las hachas y mazas no te irá tan bien.",
    ["Daga", "Lanza"],
    ["Hacha", "Mazo"]
);

const hacha = new Arma(
    "Hacha",
    "Un arma con un gran filo frontal, la cual le ganará a las espadas y a las lanzas, pero muy lenta contra dagas y sin defensa contra los mazos.",
    ["Espada", "Lanza"],
    ["Daga", "Mazo"]
);

const mazo = new Arma(
    "Mazo",
    "Un arma pesada capaz de destruir la armadura de tus enemigos, fuerte contra las espadas y las hachas, pero muy lenta contra las dagas y con un corto alcance contra las lanzas.",
    ["Espada", "Hacha"],
    ["Daga", "Lanza"]
);

const lanza = new Arma(
    "Lanza",
    "Un arma con una punta filosa y un gran alcance, perfecta para pelear contra las pequeñas dagas y los lentos mazos, pero no tan rápida contra las versátiles espadas y sin equilibrio contra las hachas.",
    ["Daga", "Mazo"],
    ["Espada", "Hacha"]
);

const daga = new Arma(
    "Daga",
    "Un arma rápida y versátil, muy eficiente contra las hachas y los lentos mazos, pero no puede contra el alcance de las lanzas y las espadas.",
    ["Hacha", "Mazo"],
    ["Espada", "Lanza"]
);