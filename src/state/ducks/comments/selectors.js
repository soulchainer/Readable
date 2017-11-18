import { createCompareFunc, sortContent } from '../../utils';
import { sortingMethods } from './constants';

/**
 * Sort the `comments` by `sortingMethod` and `sortingDirection`
 */
const getSortedComments = (comments, {
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

  return sortContent(comments, compareFunction, sortingMethod);
};

/**
 * Filter the `comments` from Redux `state` and return those whose their
 * `deleted` flag is set to `false`.
 */
const getVisibleComments = comments => (
  comments.filter(comment => !comment.deleted)
);

export {
  getSortedComments,
  getVisibleComments,
};
