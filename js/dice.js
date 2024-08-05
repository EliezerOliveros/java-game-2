document.getElementById('rollButton').addEventListener('click', function() {
    var resultDiv = document.getElementById('result');

    // Agrega la clase de animación
    resultDiv.classList.add('rolling');

    // Genera un número aleatorio entre 1 y 6
    var diceRoll = Math.floor(Math.random() * 6) + 1;

    // Muestra el resultado después de la animación
    setTimeout(function() {
        resultDiv.innerText = diceRoll;
        resultDiv.classList.remove('rolling');
    }, 1000); // La duración de la animación es de 1 segundo
});
