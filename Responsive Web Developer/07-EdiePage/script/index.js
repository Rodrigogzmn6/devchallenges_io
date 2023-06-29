const openMenuBtn = $("#hamburger-btn");

openMenuBtn.on('click', () => {
    $("header").toggleClass("open-menu");
    $("#title").toggleClass("hidden");
    $("#header-menu").toggleClass("hidden");
    $("#hamburger-btn").toggleClass("opened");
    $("#hamburger-btn").toggleClass("closed");
    $("#hamburger-btn div").toggleClass("open-btn");
    $("#hamburger-btn div").toggleClass("close-btn");
})