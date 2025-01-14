const discover = document.querySelector(".discover");
const download = document.querySelector(".download")

discover.addEventListener("click", () => {
    window.location.href = "/discover"
})

download.addEventListener("click", () => {
    alert("The game isn't available right now, but be sure to come back later to check it out!");
})