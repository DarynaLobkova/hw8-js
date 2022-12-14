import images from "./app.js";

const refs = {
  gallery: document.querySelector(".js-gallery"),
  image: document.createElement("img"),
 lightbox: document.querySelector(".lightbox"),
 closeModalBtn: document.querySelector('[data-action="close-lightbox"]'),
  modal: document.querySelector(".lightbox__content"),
  lightbox__image: document.querySelector(".lightbox__image"),
  lightbox__overlay: document.querySelector('.lightbox__overlay'),
};

const createGalleryItem = ({ preview, original, index, description }) =>
  `<li class="gallery__item">
<a
  class="gallery__link"
  href=${original}
>
  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    data-index=${index}
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
refs.closeModalBtn.addEventListener('click', closeModal)
refs.lightbox__overlay.addEventListener('click' , closeModal)

function onImageClick(e) {
     e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
  
    const largeImageURL = e.target.dataset.source;

    refs.lightbox.classList.add('is-open')

   setLargeImage(largeImageURL)
   
  document.addEventListener("keydown", handleKeyDown);
    
}


function handleKeyDown(e) {
  e.preventDefault();
  if (e.code === "Escape") {
    closeModal()
  }
}

function setLargeImage(url) {
    refs.lightbox__image.src = url;
}


function closeModal() {
  refs.lightbox.classList.remove('is-open')
  refs.lightbox__image.src = ''
  document.removeEventListener("keydown", handleKeyDown);
 
    
}





