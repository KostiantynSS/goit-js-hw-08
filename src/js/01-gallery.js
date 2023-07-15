// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const refs = {
  galleryList: document.querySelector('.gallery'),
};

const galleryListImages = galleryItems.map(image => {
  const li = document.createElement('li');
  li.classList.add('gallery__item');
  li.innerHTML = `< a class="gallery__link" href="${image.original}">
    <img class='gallery__image'  src='${image.preview}' alt='${image.description}' /> </a>`;

  return li;
});

refs.galleryList.append(...galleryListImages);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
