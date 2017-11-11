import { createCompareFunc } from '../../utils';
import { sortingMethods } from './constants';

/**
 * Filter the `posts` from Redux `state` and return the posts from the given
 * category. So much less API calls doing it this way.
 */
const getPostsByCategory = (posts, category) => {
  return posts.filter(post => post.category === category)
};

/**
 * Sort the `posts` by `sortingMethod` and `sortingDirection`
 */
const getSortedPosts = (posts, {
  sortingDirection='DESC',
  sortingMethod='voteScore'
}) => {
  if (sortingMethods.indexOf(sortingMethod) === -1) {
    throw new Error(`Unknown sorting method: ${sortingMethod}`);
  }
  if (['ASC', 'DESC'].indexOf(sortingDirection) === -1) {
    throw new Error(`Unknown sorting direction: ${sorthingDirection}`);
  }

  const compareFunction = createCompareFunc(sortingDirection);

  // temporary array holds objects with position and sort-value
  let mapped = posts.map((post, index) => ({
    index,
    value: String(post[sortingMethod]).toLowerCase()
  }))
  // sorting the mapped array containing the reduced values
  mapped.sort(compareFunction);
  // container for the resulting order
  const sortedPosts = mapped.map(post => posts[post.index]);

  return sortedPosts;
};

/**
 * Filter the `posts` from Redux `state` and return the post whose has their
 * `deleted` flag to `false`.
 */
const getVisiblePosts = posts => posts.filter(post => !post.deleted);

export default {
  getPostsByCategory,
  getSortedPosts,
  getVisiblePosts
};
