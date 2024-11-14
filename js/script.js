document.addEventListener('DOMContentLoaded', () =>  {
    const overlayImage = document.getElementById('overlayImage');
    const images = document.querySelectorAll('img.clickable');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('close');

    for (const image of images) {
        image?.addEventListener('click', () =>  {
            overlayImage.src = image.src;
            overlay.style.display = 'flex';
            setTimeout(() =>  overlay.classList.add('show'), 10);

            overlayImage.style.width = (image.clientWidth * 2) + 'px';
            overlayImage.style.height = (image.clientHeight * 2) + 'px';
        });
    }

    closeBtn?.addEventListener('click', () =>  {
        overlay.classList.remove('show');
        setTimeout(() =>  overlay.style.display = 'none', 300);
    });

    overlay?.addEventListener('click', (event) => {
        if (event.target === overlay) {
            overlay.classList.remove('show');
            setTimeout(() =>  overlay.style.display = 'none', 300);
        }
    });

    document?.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            overlay.classList.remove('show');
            setTimeout(() =>  overlay.style.display = 'none', 300);
        }
    });
});
