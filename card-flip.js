document.addEventListener("DOMContentLoaded", function () {
    const browsLashesCard = document.getElementById("brows-lashes");

    browsLashesCard.addEventListener("click", function () {
        browsLashesCard.classList.toggle("flipped");
    });
});
