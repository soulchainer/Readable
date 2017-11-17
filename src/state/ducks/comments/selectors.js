import { createCompareFunc } from '../../utils';
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

  const compareFunction = createCompareFunc(sortingDirection, sortingMethod);

  // temporary array holds objects with position and sort-value
  const mapped = comments.map((comment, index) => ({
    index,
    value: String(comment[sortingMethod]).toLowerCase(),
  }));
  // sorting the mapped array containing the reduced values
  mapped.sort(compareFunction);
  // container for the resulting order
  const sortedComments = mapped.map(comment => comments[comment.index]);

  return sortedComments;
};

/**
 * Filter the `comments` from Redux `state` and return the comment whose have
 * their `deleted` flag to `false`.
 */
const getVisibleComments = comments => (
  comments.filter(comment => !comment.deleted)
);

export default {
  getSortedComments,
  getVisibleComments,
};
