/**
 * Espera a que el DOM se cargue completamente antes de ejecutar el código.
 * @event DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Lista de rutas de las imágenes a mostrar.
     * @type {string[]}
     */
    const images = [
        './images/imagen1.png',
        './images/imagen2.jpg',
        './images/imagen3.png'
    ];

    /**
     * Índice de la imagen actualmente mostrada.
     * @type {number}
     */
    let currentIndex = 0;

    /**
     * Elemento de imagen para mostrar las imágenes.
     * @type {HTMLImageElement}
     */
    const imageElement = document.createElement('img');

    // Establece la fuente de la imagen inicial
    imageElement.src = images[currentIndex];

    // Agrega la imagen al elemento con clase 'content'
    document.querySelector('.content').appendChild(imageElement);

    /**
     * Cambia la imagen cuando se hace clic en ella.
     */
    const changeImage = () => {
        /**
         * Incrementa el índice y asegura que esté dentro del rango de imágenes.
         * @type {number}
         */
        currentIndex = (currentIndex + 1) % images.length;

        // Actualiza la fuente de la imagen para mostrar la siguiente imagen
        imageElement.src = images[currentIndex];
    };

    /**
     * Agrega un evento de escucha para el clic en la imagen.
     * @listens click
     */
    imageElement.addEventListener('click', changeImage);
});
