const summaryRanges = (nums) => {
  const resultArr = [];
  let min = nums.shift();
  let loc = min.toString();
  let temp = min;

  if (nums.length === 0) {
    resultArr.push(loc);
    return resultArr;
  }

  while (nums.length !== 0) {
    if (nums[0] === min + 1) {
      temp = nums.shift();
    } else {
      loc = `${min}->${temp}`;
      resultArr.push(loc);
      min = nums.shift();
    }
  }

  return resultArr;
};

module.exports = summaryRanges;
