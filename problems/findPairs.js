const findPairs = (nums, k) => {
  const usedPairs = {};
  let counter = 0;
  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      const bigger = Math.max(nums[i], nums[j]);
      const smaller = Math.min(nums[i], nums[j]);
      const diff = bigger - smaller;
      if (diff === k && usedPairs[bigger] !== smaller) {
        usedPairs[bigger] = smaller;
        counter += 1;
      }
    }
  }
  return counter;
};

module.exports = findPairs;
