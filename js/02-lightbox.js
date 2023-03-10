import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);
galleryRef.innerHTML = markup;

function createMarkup(items) {
    return items
        .map(({preview, original, description}) => {
            return `
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
    `;
    }).join(' ');
};

var lightbox = new SimpleLightbox('.gallery__item', { captionsData: 'alt', captionsDelay: 250, });
