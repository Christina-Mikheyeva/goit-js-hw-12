import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const loader = document.querySelector('.loader');

export function showLoader() {
  loader.classList.add('active');
}

export function hideLoader() {
  loader.classList.remove('active');
}

 export function createGalleryMarkup(images) {
  const galleryMarkup = images.map(image => `
    <div class="gallery-item">
      <a href="${image.largeImageURL}" class="lightbox">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="info">
        <p>
        <b>Likes</b>
         ${image.likes}
        </p>
        <p>
        <b>Views</b>
       ${image.views}
        </p>
        <p>
        <b>Comments</b>
        ${image.comments}
        </p>
        <p>
        <b>Downloads</b>
        ${image.downloads}
        </p>
      </div>
    </div>
  `).join('');

  document.querySelector('.gallery').innerHTML = galleryMarkup;

  const lightbox = new SimpleLightbox('.lightbox');
  lightbox.refresh();
}

export function showMessage(message) {
  iziToast.show({
    title: 'Пошук зображень',
    message,
    position: 'topRight',
  });
}
