document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add("fade-in"); // Añade la clase para mostrar el contenido cuando la página se carga
});

function transitionPage(url) {
    document.body.classList.remove("fade-in"); // Elimina la clase para comenzar a ocultar el contenido
    document.body.classList.add("fade"); // Añade la clase que inicia el desvanecimiento

    setTimeout(function() {
        window.location.href = url; // Redirige después de 2.5 segundo
    }, 2500); // Tiempo que dura la transición
}
