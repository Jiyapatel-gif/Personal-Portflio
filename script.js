var typed = new Typed('#element', {
    strings: ['Responsive Design', 'Web Developer'],
    typeSpeed: 60,
});

function toggleMenu() {
    const menu = document.querySelector("nav ul");
    menu.classList.toggle("active");
}

function showSection(id) {
    let sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.display = "none";
    });

    let active = document.getElementById(id);

    if (id === "home") {
        active.style.display = "flex";
    } else {
        active.style.display = "block";
    }

    const menu = document.querySelector("nav ul");
    menu.classList.remove("active");
}
