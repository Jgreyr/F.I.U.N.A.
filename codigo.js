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

function moveSlidePreguntas(direction) {
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

// Crear un objeto para almacenar los índices de cada slider
let slideIndices = {};

function desplazarSlideInformacion(direction, sliderId) {
    if (!slideIndices[sliderId]) {
        slideIndices[sliderId] = 0; // Inicializar el índice si no existe
    }

    const contenedor = document.querySelector(`#${sliderId} .infoPreguntas`);
    const diapositivas = document.querySelectorAll(`#${sliderId} .masInfo`);
    const anchoContenedor = contenedor.parentElement.offsetWidth;
    const anchoDiapositiva = diapositivas[0].offsetWidth;
    const margenDiapositiva = parseFloat(getComputedStyle(diapositivas[0]).marginRight);

    const anchoTotal = diapositivas.length * anchoDiapositiva + (diapositivas.length - 1) * margenDiapositiva;
    const indiceMaximoDiapositiva = Math.ceil(anchoTotal / anchoContenedor) - 1;

    slideIndices[sliderId] += direction;

    if (slideIndices[sliderId] > indiceMaximoDiapositiva) {
        slideIndices[sliderId] = indiceMaximoDiapositiva;
    } else if (slideIndices[sliderId] < 0) {
        slideIndices[sliderId] = 0;
    }

    contenedor.style.transform = `translateX(-${slideIndices[sliderId] * anchoContenedor}px)`;
}
