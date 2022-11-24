import images from "./app.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  image: document.createElement("img"),
 lightbox: document.querySelector(".lightbox"),
 closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
  modal: document.querySelector(".lightbox__content"),
  lightbox__image: document.querySelector(".lightbox__image"),

};

const createGalleryItem = ({ preview, original, description }) =>
  `<li class="gallery__item">
<a
  class="gallery__link"
  href=${original}
>
  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />
</a>
</li>`;

const galleryMarkup = images.reduce(
  (acc, item) => acc + createGalleryItem(item),
  ""
);

refs.gallery.insertAdjacentHTML("afterbegin", galleryMarkup);
refs.image.classList.add("gallery__image");


refs.gallery.addEventListener('click', onImageClick)

function onImageClick(e) {
     e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
    const largeImageURL = e.target.dataset.source;

    refs.lightbox.classList.add('is-open')

   setLargeImage(largeImageURL)
    
    
}
function setLargeImage(url) {
    refs.lightbox__image.src = url;
}
function closeModal() {
      refs.lightbox.classList.remove('is-open')
    
}

refs.closeModalBtn.addEventListener('click', closeModal)