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

function goToGameModes(event) {
    window.location.href = "http://localhost:63342/web_project/game_modes.html";
}

if (localStorage.getItem("friends") === null) {
    localStorage.setItem("friends", JSON.stringify([]))
}
const friends = JSON.parse(localStorage.getItem("friends"))

function buildFriends() {
    const friendContainer = document.getElementById("friend-container")
    let newContent = ""
    for (let interest in friends) {
        newContent += "<div class=\"friend-container-friend\">"+ friends[interest] +"</div>"
    }
    friendContainer.innerHTML = newContent
}

function saveFriend(event) {
    event.preventDefault()
    const friendField = document.getElementById("friend-field")
    if (friendField.value !== "") {
        friends.push(friendField.value)
        localStorage.setItem("friends", JSON.stringify(friends))
        friendField.value = ""
        buildFriends()
    }
}

function ready() {
    const form = document.querySelector('form')
    form.addEventListener('submit', saveFriend)
    buildFriends()
}

document.addEventListener("DOMContentLoaded", ready);