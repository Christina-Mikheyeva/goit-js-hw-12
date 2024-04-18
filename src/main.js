// Imports
import { showLoader, hideLoader, createGalleryMarkup, showMessage, toggleLoadMoreButton, scrollToNextImages } from "./js/render-functions.js";
import { getImages } from "./js/pixabay-api.js";
import iziToast from "izitoast";

// Main

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const loadMoreButton = document.querySelector('.load-more-button');

loadMoreButton.style.display = "none";
let currentKeyword = "";

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const keyword = searchInput.value.trim();

  if (keyword === "") {
    showMessage("Start typing in")
    return
  }

  currentKeyword = keyword;
  let page = 1;
  
  // Loader and clear 

  showLoader();
  document.querySelector('.gallery').innerHTML = '';
   
  // Reset for new search
  
  try {
    const images = await getImages(currentKeyword, page);
   
    if (images.length === 0) {
      loadMoreButton.style.display = "none";
      showMessage("Sorry, there are no images matching your search query. Please try again!");
      return;
    }

    // Create gallery markup and hide/show button
    createGalleryMarkup(images);
    toggleLoadMoreButton(images.length);

    // Hide loader
    hideLoader();
  } catch (error) {
    console.error('Error fetching images:', error);
  }

// Add an event and more pictures

page = page + 1; 
  
loadMoreButton.addEventListener('click', async () => {
  try {
    const images = await getImages(currentKeyword, page);

    const gallery = document.querySelector('.gallery');
    const galleryMarkup = createGalleryMarkup(images);
    gallery.innerHTML += galleryMarkup;

    toggleLoadMoreButton(images.length);
  } catch (error) {
    console.error('Error fetching more images:', error);
  }
});

  // End of collection

const PER_PAGE = 15; 

loadMoreButton.addEventListener('click', async () => {
  page++;
  
  try {
    const images = await getImages(currentKeyword, page);

    const gallery = document.querySelector('.gallery');
    const galleryMarkup = createGalleryMarkup(images);
    gallery.innerHTML += galleryMarkup;

    const totalHits = images.totalHits; 
    toggleLoadMoreButton(images.length, totalHits > page * PER_PAGE);

    if (page * PER_PAGE >= totalHits) {
      showMessage("We are sorry, but you have reached the end of search results.");
      loadMoreButton.style.display = 'none';
    } else {scrollToNextImages();}

  } catch (error) {
    console.error('Error fetching more images:', error);
  }
});
  
});


