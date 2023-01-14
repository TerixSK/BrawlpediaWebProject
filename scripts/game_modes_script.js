function goToStartPage() {
    if (window.location.href === '"http://localhost:63342/web_project/index.html') {
        event.target.classList.remove("selected-nav-item")
    }
    event.target.classList.add("selected-nav-item")
    window.location.href = "http://localhost:63342/web_project/index.html";
}

function goToBrawlers(event) {
    window.location.href = "http://localhost:63342/web_project/brawlers.html";
}

function goToProfile(event) {
    window.location.href = "http://localhost:63342/web_project/profile.html";
}