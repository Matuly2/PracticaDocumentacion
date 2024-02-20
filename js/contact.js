/**
 * Maneja el formulario de contacto.
 * @param {Event} e - El evento de envío del formulario.
 */
const handleFormSubmission = function(e) {
    e.preventDefault(); // Previene la recarga de la página

    // Obtiene los valores del formulario
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Verifica si el nombre y el mensaje no están vacíos
    if (name.trim() !== '' && message.trim() !== '') {
        alert(`¡Gracias por tu mensaje, ${name}!`);
        contactForm.reset(); // Resetea el formulario después del envío
    } else {
        alert('Por favor, completa todos los campos.');
    }
};

/**
 * Elemento del formulario de contacto.
 * @type {HTMLFormElement}
 */
const contactForm = document.getElementById('contactForm');

/**
 * Espera a que el DOM se cargue completamente antes de ejecutar el código.
 * @event DOMContentLoaded
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * Agrega un evento de escucha para el envío del formulario.
     */
    contactForm.addEventListener('submit', handleFormSubmission);
});
