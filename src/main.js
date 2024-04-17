import { showLoader, hideLoader, createGalleryMarkup, showMessage } from "./js/render-functions.js";
import { getImages } from "./js/pixabay-api.js";
import iziToast from "izitoast";

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const keyword = searchInput.value.trim();

  if (keyword === "") {
    return iziToast.error({
    title: 'Error',
    message: 'Start typing in',
});
  }

  showLoader();
  
  document.querySelector('.gallery').innerHTML = '';
    
  try {
    const images = await getImages(keyword);
    
    if (images.length === 0) {
    showMessage('Sorry, there are no images matching your search query. Please try again!');
    return;
  }
    createGalleryMarkup(images);
    
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    hideLoader();
  }

});
