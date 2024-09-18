// Función para lanzar un dado individual
function lanzarDado(dadoElement) {
    // Añade la clase de animación
    dadoElement.classList.add('shaking');

    // Espera que termine la animación y luego aplica una rotación final
    setTimeout(() => {
        dadoElement.classList.remove('shaking'); // Elimina la clase de animación

        // Genera números aleatorios para las rotaciones X e Y
        const randomX = Math.floor(Math.random() * 4) * 90;
        const randomY = Math.floor(Math.random() * 4) * 90;

        // Aplica rotación 3D al dado
        dadoElement.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg)`;
    }, 2000); // Ajusta a la duración de la animación CSS (2000 ms)
}

// Función para lanzar ambos dados
function lanzarDados() {
    const dado1 = document.getElementById('dado1');
    const dado2 = document.getElementById('dado2');
    
    lanzarDado(dado1);
    lanzarDado(dado2);
}

// Asigna el evento de clic al botón
document.getElementById('rollButton').addEventListener('click', lanzarDados);

// Asigna eventos de clic y toque a cada dado
const dados = document.querySelectorAll('.dado');
dados.forEach(dado => {
    dado.addEventListener('click', () => lanzarDado(dado));
    dado.addEventListener('touchstart', () => lanzarDado(dado));
});