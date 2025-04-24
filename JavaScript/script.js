function changeColor() {
    var body = document.body;
    var isDark = body.classList.toggle("dark-mode");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    var toggle = document.getElementById("themeToggle");
    if (toggle) {
        toggle.checked = isDark;
    }
}

function applyStoredTheme() {
    var theme = localStorage.getItem("theme");
    var body = document.body;
    var toggle = document.getElementById("themeToggle");

    if (theme === "dark") {
        body.classList.add("dark-mode");
        if (toggle) toggle.checked = true;
    } else {
        body.classList.remove("dark-mode");
        if (toggle) toggle.checked = false;
    }
}


function openDetailsFromHash(hash) {
    const id = hash.replace('#', '');
    const details = document.getElementById(id);
    if (details) {
        details.open = true;
    }
}

window.addEventListener("DOMContentLoaded", function () {
    applyStoredTheme();

    if (location.hash) {
        openDetailsFromHash(location.hash);
    }
});

function navigateToSection(hash) {
    openDetailsFromHash(hash);
}
