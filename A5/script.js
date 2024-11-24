let startTime = Date.now();

function updateTimer() {
    let currentTime = Date.now();
    let elapsedTime = Math.floor((currentTime - startTime) / 1000);
    document.getElementById('timer').textContent = `Tiempo en la página: ${elapsedTime} segundos`;
}

setInterval(updateTimer, 1000);

function showDescription(img) {
    const description = img.nextElementSibling;
    description.style.display = 'block';
}

function hideDescription(img) {
    const description = img.nextElementSibling;
    description.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const largeImage = document.getElementById('large-image');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            largeImage.src = this.src;
            largeImage.style.display = 'block';
        });
    });
});