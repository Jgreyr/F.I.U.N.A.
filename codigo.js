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

function toggleMenu() {
    var navItems = document.querySelector('.nav-items');
    var menuBtn = document.getElementById('menu-btn');

    navItems.classList.toggle('show');

    if (navItems.classList.contains('show')) {
        console.clear();
        menuBtn.classList.add('close');
        menuBtn.innerText = '✖'; // Cambia a "X"
    } else {
        menuBtn.innerHTML = '&#9776;'; // Cambia al icono de menú
        menuBtn.classList.remove('close');
    }
}

function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
}

if (isTouchDevice()) {
    document.querySelectorAll('.dropbtn, .submenu').forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Evitar el salto de anclaje
            // if (item.classList.contains('submenu-toggle')) {
                toggleSubmenu(this);
            // } else {
            //     toggleDropdown(this);
            // }
        });
    });
}

function toggleSubmenu(element) {
    var submenuContent = element.nextElementSibling;
    submenuContent.classList.toggle('show');
}
document.querySelector('.menu').addEventListener('touchstart', function(e) {
    // Tu código aquí
});
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function redirectToMobile() {
    if (isMobile()) {
        window.location.href = "www.google.com";  // Redirigir al HTML para móviles
    }
}

// Llama a la función cuando la página se carga
redirectToMobile();