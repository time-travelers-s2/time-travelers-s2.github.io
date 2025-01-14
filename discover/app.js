const back = document.querySelector(".back");
const download = document.querySelector(".download");

back.addEventListener("click", () => {
    window.location.href = "/";
})

download.addEventListener("click", () => {
    alert("The game isn't available right now, but be sure to come back later to check it out!");
})