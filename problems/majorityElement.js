const countOccurenceInArray = (array, num) => {
  let count = 0;
  array.forEach((value) => {
    if (value === num) {
      count += 1;
    }
  });

  return count;
};

// BOyer-Moore's voting algorithm
const majorityElement = (nums) => {
  const n = nums.length;
  if (n < 1) return [];
  if (n < 2) return nums;

  let count1 = 0;
  let count2 = 0;
  let candidate1 = 0;
  let candidate2 = 1;

  for (let i = 0; i < n; i += 1) {
    if (nums[i] === candidate1) count1 += 1;
    else if (nums[i] === candidate2) count2 += 1;
    else if (count1 === 0) {
      candidate1 = nums[i];
      count1 = 1;
    } else if (count2 === 0) {
      candidate2 = nums[i];
      count2 = 1;
    } else {
      count1 -= 1;
      count2 -= 1;
    }
  }

  const x = [];
  if (countOccurenceInArray(nums, candidate1) > n / 3) x.push(candidate1);
  if (countOccurenceInArray(nums, candidate2) > n / 3) x.push(candidate2);

  return x;
};

module.exports = majorityElement;
