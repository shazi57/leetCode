const combinationSum = (candidates, target) => {
  const total = [];
  const combinationSumHelper = (index, sum, result) => {
    if (sum === target) {
      total.push([...result]);
    }
    if (sum > target) {
      return;
    }
    for (let i = index; i < candidates.length; i += 1) {
      result.push(candidates[i]);
      combinationSumHelper(i, sum + candidates[i], result);
      result.pop();
    }
  };
  combinationSumHelper(0, 0, []);
  return total;
};

module.exports = combinationSum;
