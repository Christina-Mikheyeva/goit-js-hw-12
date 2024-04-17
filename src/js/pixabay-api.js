import axios from "axios";

// Функція для отримання зображень з Pixabay
export async function getImages(keyword) {
  const API_KEY = "43314388-88f7122255793401969da564c";
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true`;

  const response = await fetch(URL);
  const data = await response.json();

  return data.hits;
}
