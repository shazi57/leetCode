const binarySearch = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    const middle = low + Math.floor((high - low) / 2);
    if (nums[middle] === target) {
      return middle;
    }
    if (nums[middle] < target) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return -1;
};

module.exports = binarySearch;
