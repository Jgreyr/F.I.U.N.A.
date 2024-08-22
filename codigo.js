function showSection(sectionId) {
    // Oculta todas las secciones
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Muestra la sección seleccionada
    var section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
    }
}
let currentIndex = 0;

function moveSlide(direction) {
    const container = document.querySelector('.preguntas');
    const totalSlides = document.querySelectorAll('.pregunta').length;
    const slideWidth = document.querySelector('.pregunta').offsetWidth;
    const maxIndex = totalSlides - Math.floor(container.parentElement.offsetWidth / slideWidth);

    currentIndex += direction;

    if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    } else if (currentIndex < 0) {
        currentIndex = 0;
    }

    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
