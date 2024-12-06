const title = document.getElementById('title');
const emojiContainers = document.querySelectorAll('.emoji-container');

emojiContainers.forEach(container => {
    container.addEventListener('mouseenter', () => {
        const text = container.getAttribute('data-title');
        title.textContent = text;
        title.style.opacity = '1'; // Show the title
    });

    container.addEventListener('mouseleave', () => {
        title.style.opacity = '0'; // Hide the title when not hovering
    });
});
