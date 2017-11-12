import {
  categoriesFetchError,
  categoriesAreLoading,
  categoriesFetched,
} from './actions';
import { createRequestInit } from '../../utils';

/**
 *
 * @param {string} hostname Hostname of the app, `window.location.hostname`
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
    .then(payload => dispatch(categoriesFetched(payload)))
    .catch(() => dispatch(categoriesFetchError({ hasFailed: true })));
};

export {
  fetchCategories,
};
