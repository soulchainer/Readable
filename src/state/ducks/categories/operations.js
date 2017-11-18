import {
  categoriesFetchError,
  categoriesAreLoading,
  categoriesFetched,
} from './actions';
import { createRequestInit } from '../../utils';

/**
 *
 * @param {string} hostname Hostname of the app, `window.location.hostname`.
 */
const fetchCategories = hostname => (dispatch) => {
  const url = `//${hostname}:3001/categories`;
  dispatch(categoriesAreLoading({ isLoading: true }));

  fetch(url, createRequestInit())
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(categoriesAreLoading({ isLoading: false }));
      return response;
    })
    .then(response => response.json())
    .then((payload) => {
      /** Transform `categories` in a more suitable data structure */
      const { categories } = payload;
      const cats = {};
      categories.forEach((category) => {
        cats[category.name] = category.path;
      });
      dispatch(categoriesFetched({ categories: cats }));
    })
    .catch(() => dispatch(categoriesFetchError({ loadHasFailed: true })));
};

export {
  fetchCategories,
};
