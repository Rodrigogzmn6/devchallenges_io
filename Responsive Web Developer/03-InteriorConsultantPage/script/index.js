const toggleButtonOpen = document.querySelector("#show-menu");
const toggleButtonClose = document.querySelector("#hide-menu");

toggleButtonOpen.addEventListener('click', () => {
    document.querySelector(".title").classList.toggle("invisible");
    document.querySelector(".menu").classList.toggle("invisible");
    document.querySelector("#show-menu").classList.toggle("invisible");
    document.querySelector("#hide-menu").classList.toggle("invisible");
    document.querySelector(".main-content").classList.toggle("invisible");
    document.querySelector("footer").classList.toggle("invisible");
    document.querySelector("header").classList.toggle("hide");
    document.querySelector("header").classList.toggle("show");
})

toggleButtonClose.addEventListener('click', () => {
    document.querySelector(".title").classList.toggle("invisible");
    document.querySelector(".menu").classList.toggle("invisible");
    document.querySelector("#show-menu").classList.toggle("invisible");
    document.querySelector("#hide-menu").classList.toggle("invisible");
    document.querySelector(".main-content").classList.toggle("invisible");
    document.querySelector("footer").classList.toggle("invisible");
    document.querySelector("header").classList.toggle("hide");
    document.querySelector("header").classList.toggle("show");
})