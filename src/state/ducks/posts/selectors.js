import { createCompareFunc, sortContent } from '../../utils';
import { sortingMethods } from './constants';

/**
 * Filter the `posts` from Redux `state` and return the posts from the given
 * category. So much less API calls doing it this way.
 */
const getPostsByCategory = (posts, category) => (
  posts.filter(post => post.category === category)
);

/**
 * Sort the `posts` by `sortingMethod` and `sortingDirection`
 */
const getSortedPosts = (posts, {
  sortingDirection = 'DESC',
  sortingMethod = 'voteScore',
}) => {
  if (sortingMethods.indexOf(sortingMethod) === -1) {
    throw new Error(`Unknown sorting method: ${sortingMethod}`);
  }
  if (['ASC', 'DESC'].indexOf(sortingDirection) === -1) {
    throw new Error(`Unknown sorting direction: ${sortingDirection}`);
  }

  const compareFunction = createCompareFunc(sortingDirection);

  return sortContent(posts, compareFunction, sortingMethod);
};

/**
 * Filter the `posts` from Redux `state` and return the post whose has their
 * `deleted` flag to `false`.
 */
const getVisiblePosts = posts => posts.filter(post => !post.deleted);

export default {
  getPostsByCategory,
  getSortedPosts,
  getVisiblePosts,
};
