window.sr = ScrollReveal();

sr.reveal('.header', {
    duration: 2800,
    origin: 'bottom',
    distance: '-150px'
});


sr.reveal('.menu', {
    delay: 1300,
    duration: 2800,
    origin: 'left',
    distance: '50px'
});

sr.reveal('.contacto', {
    duration: 2800,
    origin: 'bottom',
    distance: '-20px'
});


sr.reveal('.footer', {
    duration: 2800,
    rotate: {
        x: 0,
        y: 100
    }
});

sr.reveal('.hr', {
    duration: 2800,
    origin: 'right',
    distance: '-2000px'

});

sr.reveal('.txtProjects', {
    duration: 2000,
    origin: 'right',
    distance: '-80px'

});


sr.reveal('.imgStarWars', {
    duration: 2000,
    delay: 1000,
    rotate: {
        x: 100,
        y: 1,
        z: 30
    }
});

/* Panel desplegable */
let elementoDesplegable = document.getElementsByClassName("h3SobreMi");


/* Añade los dos listeners a todos los elementos con la clase h3SobreMi */
for (let i = 0; i < elementoDesplegable.length; i++) {
    elementoDesplegable[i].addEventListener("mouseover", mouseover);
    elementoDesplegable[i].addEventListener("click", click);
}

function mouseover () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;

    if (panel.style.display == "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

function click () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;

    if (panel.style.display == "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}