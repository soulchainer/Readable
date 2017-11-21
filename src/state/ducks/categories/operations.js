import debounce from 'lodash.debounce';
import { constants, createRequestInit } from 'state/utils';
import {
  categoriesFetchError,
  categoriesAreLoading,
  categoriesFetched,
} from './actions';

/**
 * Recover all categories from the server.
 */
/* eslint-disable no-underscore-dangle */
const _fetchCategories = () => (dispatch) => {
  /** Hostname of the app */
  const { hostname } = window.location;
  console.log(Date()); // eslint-disable-line
  const url = `//${hostname}:3001/categories`;
  dispatch(categoriesAreLoading({ isLoading: true }));

  fetch(url, createRequestInit())
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      dispatch(categoriesAreLoading({ isLoading: false }));
      return response;
    })
    .then(response => response.json())
    .then((response) => {
      /** Transform `categories` in a more suitable data structure */
      const { categories } = response;
      const cats = {};
      categories.forEach((category) => {
        cats[category.name] = category.path;
      });
      dispatch(categoriesFetched({ categories: cats }));
    })
    .catch(() => dispatch(categoriesFetchError({ loadHasFailed: true })));
};

const { CALL_DELAY, DEBOUNCE_OPTS } = constants;

const fetchCategories = debounce(_fetchCategories, CALL_DELAY, DEBOUNCE_OPTS);

export {
  fetchCategories,
};
