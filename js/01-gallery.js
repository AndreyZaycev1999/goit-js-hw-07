import { galleryItems } from './gallery-items.js';
// Change code below this line

const ESCAPE__BTN__CODE = 'Escape';

const galleryRef = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);
galleryRef.innerHTML = markup;

function createMarkup(items) {
    return items
        .map(({preview, original, description}) => {
            return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" title="${description}" data-source="${original}" alt="${description}">
            </a>
        </div>
    `;
    }).join(' ');
};

galleryRef.addEventListener('click', (e) => {
    blockStandartAction(e);
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    
    const instance = basicLightbox.create(
        `<img src="${e.target.dataset.source}">`,
    {
        onShow: (_instance) => {
            galleryRef.addEventListener('keydown', onEscBtn);
        },
        onCloce: (_instance) => {
            galleryRef.removeEventListener('keydown', onEscBtn);
        },
    });
    instance.show();

    function onEscBtn(e) {
        if (e.code === ESCAPE__BTN__CODE) {
            instance.close();
        }
        
    }
});

function blockStandartAction(e) {
    e.preventDefault()
};
