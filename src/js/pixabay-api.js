import axios from "axios";

// Функція для отримання зображень з Pixabay

export async function getImages(keyword, page, perPage) {
  const API_KEY = "43314388-88f7122255793401969da564c";
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  try {
    const response = await axios.get(URL);
    const images = response.data.hits;
    return images;
  } catch (error) {
    console.error("Error fetching images:", error);
    return []; 
  }
}
