import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imageMarkUp = document.querySelector('.gallery');

const createGalleryItemMarkup = itemPicture => {
  return `
  <a class="gallery__link" href=${itemPicture.original}>
    <img
      class="gallery__image"
      src=${itemPicture.preview}
      data-source=${itemPicture.original}
      alt=${itemPicture.description}
    />
  </a>`;
};

const galleryAll = galleryItems.map(createGalleryItemMarkup).join('');

imageMarkUp.innerHTML = galleryAll;

let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250 } );