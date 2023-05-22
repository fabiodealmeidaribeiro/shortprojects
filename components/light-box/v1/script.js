document.addEventListener("DOMContentLoaded", () => {
    const $imagesContainer = document.getElementById('container');
    const $lightbox = document.getElementById('lightbox');
    $imagesContainer.addEventListener('click', e => {
        const imageWrapper = e.target.closest('.wrapper');
        if (imageWrapper) {
            const image = imageWrapper.querySelector('img');
            if (image) {
                $lightbox.innerHTML = '<div class="close-lightbox"></div>' + image.outerHTML;
                $lightbox.classList.add('show');
            }
        }
    });
    $lightbox.addEventListener('click', (e) => {
        if (!e.target.hasAttribute('src')) {
            $lightbox.classList.remove('show');
        }
    });
    setTimeout(() => $imagesContainer.classList.remove('loading') , 1500);
});