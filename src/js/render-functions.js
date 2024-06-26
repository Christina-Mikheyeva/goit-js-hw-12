import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const loader = document.querySelector('.loader');

 // Initialize SimpleLightbox for each image 
const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionDelay: "alt",
});

export function showLoader() {
  loader.classList.add('active');
}

export function hideLoader() {
  loader.classList.remove('active');
}

 export function createGalleryMarkup(arr) {
  const galleryMarkup = arr.map(image => `
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

  const gallery = document.querySelector('.gallery');
  gallery.insertAdjacentHTML("beforeend", galleryMarkup);
  
 // Initialize SimpleLightbox for each image 
  
   lightbox.refresh();

  return galleryMarkup;
}

export function showMessage(message) {
  iziToast.error({
    title: "Error",
    message: message,
    position: 'topRight',
  });
}

export function toggleLoadMoreButton(imagesCount) {
  const loadMoreButton = document.querySelector('.load-more-button');
  if (imagesCount > 0) {
    loadMoreButton.style.display = "block";
  } else {
    loadMoreButton.style.display = "none";
    showMessage("We're sorry, but you've reached the end of search results.");
  }
}

export function scrollToNextImages() {
  const galleryItem = document.querySelector('.gallery-item');
  if (galleryItem) {
    const itemHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({ top: 2 * itemHeight, behavior: 'smooth' });
  }
}