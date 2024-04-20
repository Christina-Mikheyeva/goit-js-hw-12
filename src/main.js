import { showLoader, hideLoader, createGalleryMarkup, showMessage, toggleLoadMoreButton, scrollToNextImages } from "./js/render-functions.js";
import { getImages } from "./js/pixabay-api.js";
import iziToast from "izitoast";

// Main

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const loadMoreButton = document.querySelector('.load-more-button');

loadMoreButton.style.display = "none";
let currentKeyword = "";
const PER_PAGE = 15;
let page = 1;

// Event listener for load more button 
loadMoreButton.addEventListener('click', async () => {
  const PER_PAGE = 15;
  page++;

  try {
    loadMoreButton.style.display = 'none';
    
    const images = await getImages(currentKeyword, page);
    const arrayHits = images.hits;
    const totalHits = images.totalHits;
    const gallery = document.querySelector('.gallery');
    const galleryMarkup = createGalleryMarkup(arrayHits);
    gallery.innerHTML += galleryMarkup;

    toggleLoadMoreButton(arrayHits.length, totalHits > page * PER_PAGE);

    if (page * PER_PAGE >= totalHits) {
      showMessage("We are sorry, but you have reached the end of search results.");
      loadMoreButton.style.display = 'none';
    } else { scrollToNextImages() }

  } catch (error) {
    console.error('Error fetching more images:', error);
  }
});

// Search Form

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const keyword = searchInput.value.trim();
  page = 1;

  if (keyword === "") {
    showMessage("Start typing in")
    return
  }

  currentKeyword = keyword;

  // Loader and clear 

  showLoader();
  document.querySelector('.gallery').innerHTML = '';
   
  // Reset for new search

  try {
    const images = await getImages(currentKeyword, page);
    const arrayHits = images.hits;
    const totalHits = images.totalHits;

    if (arrayHits.length === 0) {
      loadMoreButton.style.display = "none";
      showMessage("Sorry, there are no images matching your search query. Please try again!");
      return;
    }

      // Create gallery markup and hide/show button
    createGalleryMarkup(arrayHits);
    toggleLoadMoreButton(arrayHits.length);
    
        if (page * PER_PAGE >= totalHits) {
      showMessage("We are sorry, but you have reached the end of search results.");
      loadMoreButton.style.display = 'none';
    } 
    
      // Hide loader
      hideLoader();

    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }
);
