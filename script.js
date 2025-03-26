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

    if (modal) {
        modal.style.display = "none"; // Ensure the modal stays hidden on page load
    }

    // Ensure elements exist before adding event listeners to prevent errors
    if (browsLashesCard && modal) {
        browsLashesCard.addEventListener("click", function() {
            modal.style.display = "flex"; // Show the modal when card is clicked
        });
    }

    if (closeModal && modal) {
        closeModal.addEventListener("click", function() {
            modal.style.display = "none"; // Hide the modal when the close button is clicked
        });
    }

    if (modal) {
        modal.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none"; // Hide modal when clicking outside of modal-content
            }
        });
    }
});

