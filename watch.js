const videoIndex = new URLSearchParams(window.location.search).get("video");

const video = videos[videoIndex];

if (video) {

    document.getElementById("watchTitle").textContent = video.title;

    document.getElementById("watchAuthor").textContent = video.author;

    document.getElementById("watchStats").textContent = video.stats;

    document.getElementById("watchProfile").src = video.profile;

    document.getElementById("watchProfile").alt = video.author;

}