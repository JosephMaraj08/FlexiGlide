document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los enlaces del menú
    const menuLinks = document.querySelectorAll('.menu a');

    // Oculta todas las secciones inicialmente
    function hideAllSections() {
        document.querySelectorAll('.section').forEach(section => {
            section.style.display = 'none';
        });
    }

    // Muestra la sección correspondiente al hacer clic en el menú
    function showSection(event) {
        // Previene el comportamiento por defecto del enlace
        event.preventDefault();

        // Oculta todas las secciones
        hideAllSections();

        // Obtiene el texto del enlace clickeado y conviértelo a id válido
        const sectionId = event.target.textContent.toLowerCase().replace(/\s+/g, '-');
        const sectionToShow = document.getElementById(sectionId);

        // Muestra la sección relacionada con el enlace
        if (sectionToShow) {
            sectionToShow.style.display = 'block';
        } else {
            console.log('Sección no encontrada:', sectionId);
        }
    }

    // Añade el evento click a cada enlace
    menuLinks.forEach(link => {
        link.addEventListener('click', showSection);
    });

    // Muestra una sección por defecto al cargar la página
    hideAllSections(); // Oculta todas las secciones al inicio
    document.getElementById('inicio').style.display = 'block'; // Muestra la sección de inicio
});
