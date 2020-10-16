const binarySearch = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    const middle = low + Math.floor((high - low) / 2);
    if (target === nums[middle]) {
      return true;
    }
    if (nums[middle] > target) {
      high = middle - 1;
    } else if (nums[middle] < target) {
      low = middle + 1;
    }
  }
  return false;
};

const searchMatrix = (matrix, target) => {
  // track middle index for each row
  // if target is less than middle row's first element
  // check searchMatrix(matrix[0:middle]));
  // if target is greater than middle row's last element
  // else check searchMatrix(matrix[middle+1: matrix.length]);
  // else :
  // perform binary search on the given array;
  const middle = Math.floor(matrix.length / 2);
  if (matrix[middle] === undefined) {
    return false;
  }

  const firstElem = matrix[middle][0];
  const lastElem = matrix[middle][matrix[middle].length - 1];

  if (target > lastElem) {
    return searchMatrix(matrix.slice(middle + 1), target);
  } if (target < firstElem) {
    return searchMatrix(matrix.slice(0, middle), target);
  } if (target <= lastElem || target >= firstElem) {
    return binarySearch(matrix[middle], target);
  }
  return false;
};

module.exports = searchMatrix;
