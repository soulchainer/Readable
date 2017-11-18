const sortContent = (content, sortingFunc, sortingKey) => (
  // temporary array holds objects with position and sort-value
  content.map((item, index) => ({
    index,
    value: String(item[sortingKey]).toLowerCase(),
  }))
    // sorting the mapped array containing the reduced values
    .sort(sortingFunc)
    // container for the resulting order
    .map(item => content[item.index])
);

export default sortContent;
