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

document.addEventListener("DOMContentLoaded", function() {
    const browsLashesCard = document.getElementById("brows-lashes");
    const modal = document.getElementById("fullScreenModal");
    const closeModal = document.querySelector(".close-modal");

    // Open modal when clicking on the Brows and Lashes tile
    browsLashesCard.addEventListener("click", function() {
        modal.style.display = "flex";
    });

    // Close modal when clicking the "×" button
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the modal-content
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
