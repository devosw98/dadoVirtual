document.getElementById('rollButton').addEventListener('click', function() {
    const dado = document.getElementById('dado');

    // Añade la clase de animación
    dado.classList.add('shaking');

    // Espera que termine la animación y luego aplica una rotación final
    setTimeout(() => {
        dado.classList.remove('shaking'); // Elimina la clase de animación

        // Genera números aleatorios para las rotaciones X e Y
        const randomX = Math.floor(Math.random() * 4) * 90;
        const randomY = Math.floor(Math.random() * 4) * 90;

        // Aplica rotación 3D al dado
        dado.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg)`;
    }, 1000); // Duración de la animación en milisegundos (debe coincidir con la duración de la animación CSS)
});
