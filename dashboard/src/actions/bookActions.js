import { FETCH_BOOKS_SUCCESS } from './bookActionTypes';
import booksData from './books.json'; // Import the local JSON file

export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      // Simulate an API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Use the imported JSON data
      const data = booksData;
       const datechange = data.slice(2,8)


      // Ensure data is an array and not empty
      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('Fetched data is not an array or is empty');
      }
      dispatch(fetchBooksSuccess(datechange));
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };
};
