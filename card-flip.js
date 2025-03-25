document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', (event) => {
        const inner = card.querySelector('.flip-card-inner');
        inner.classList.toggle('flipped');

        // Prevents closing immediately if clicking inside
        event.stopPropagation();
    });
});

// Close when clicking outside
document.addEventListener('click', (event) => {
    document.querySelectorAll('.flip-card-inner.flipped').forEach(card => {
        if (!card.closest('.flip-card').contains(event.target)) {
            card.classList.remove('flipped');
        }
    });
});
