const gt = (a, b) => a.value > b.value;
const lt = (a, b) => a.value < b.value;

const ASC = [gt, lt];
const DESC = [lt, gt];
const sortingDirections = { ASC, DESC };

const createCompareFunc = (sortingDirection) => {
  const comparisons = sortingDirections[sortingDirection];
  return (a, b) => {
    if (comparisons[0](a, b)) return 1;
    if (comparisons[1](a, b)) return -1;
    return 0;
  };
};

export default createCompareFunc;
