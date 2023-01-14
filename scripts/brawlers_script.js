function ready() {
    fetch('https://api.brawlapi.com/v1/brawlers')
        .then((response) => response.json())
        .then((data) => {
            setTimeout(function () {
                document.getElementById("loading_indicator").classList.add("hidden")
                renderPosts(data["list"])
            }, 2500);
        })
        .catch((error) => {
            document.getElementById("brawlers").innerHTML = '<div class="brawlers_error"> Something went wrong :( </div>'
            console.log(error)
        })
}

function renderPosts(data) {
    let brawlers = "";
    data.sort((a, b) => a.rarity.id - b.rarity.id);
    brawlers += '<div style="display: grid;\n' +
        '    grid-template-columns: 1fr 1fr;\n' +
        '    gap: 10px;\n' +
        '    grid-template-areas:\n' +
        '    "section section"\n' +
        '    "section section";""\n' +
        ' ">'
    data.forEach(item => {
        brawlers += '<div style="display: flex; ' +
            'flex-direction: row;' +
            ' justify-content: center;' +
            ' align-items: center;">'
            + '<img src="' + item.imageUrl + '" alt="?" style="' +
            '    height: 100px;\n' +
            '    padding: 0.2em 0.4em 0.2em 0.2em;">'
            + '<div>' +
            '<div style="font-size: 1.5rem;\n' +
            '    font-weight: bold;\n' +
            '    color: ' + item.rarity.color + ';\n' +
            '    padding: 0.2em 0 0 0;">' + item.name + '</div>' +
            '<div style="\n' +
            '    font-size: 1rem;\n' +
            '    font-weight: lighter;\n' +
            '    color: white;">' + item.description + '</div>'
            + '</div>'
            + '</div>'
    })
    brawlers += '</div>'
    document.getElementById("brawlers").innerHTML = brawlers
}

document.addEventListener("DOMContentLoaded", ready);

function goToStartPage() {
    if (window.location.href === '"http://localhost:63342/web_project/index.html') {
        event.target.classList.remove("selected-nav-item")
    }
    event.target.classList.add("selected-nav-item")
    window.location.href = "http://localhost:63342/web_project/index.html";
}

function goToGameModes(event) {
    window.location.href = "http://localhost:63342/web_project/game_modes.html";
}

function goToProfile(event) {
    window.location.href = "http://localhost:63342/web_project/profile.html";
}