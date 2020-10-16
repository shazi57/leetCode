const rotate = (nums, k) => {
  if (k === 0) {
    return nums;
  }
  const lastElem = nums.pop();
  nums.unshift(lastElem);
  return rotate(nums, k - 1);
};

module.exports = rotate;
