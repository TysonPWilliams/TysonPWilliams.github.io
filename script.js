document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector("nav ul");
    const closeMenu = document.querySelector("#close-menu");

    // Toggle the visibility of the menu
    hamburger.addEventListener("click", function() {
        menu.classList.toggle("show");
    });

    // Close the menu when the close icon is clicked
    closeMenu.addEventListener("click", function() {
        menu.classList.remove("show");
    });
});
