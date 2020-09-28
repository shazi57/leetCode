// optimized
const sumOfArray = (inputArray) => {
  const resultArray = [];
  for (let i = 0; i < inputArray.length; i += 1) {
    if (i === 0) {
      resultArray[i] = inputArray[i];
    } else {
      resultArray[i] = resultArray[i - 1] + inputArray[i];
    }
  }
  return resultArray;
};

// one-liner
// const sumOfArray = (inputArray) => (inputArray.map((val,index) =>
// (inputArray.slice(0, index + 1).reduce((memo,val) => (memo + val)))));

/* initial
const sumOfArray = (inputArray) => {
  return inputArray.map((val, index) => {
    return localSum(inputArray.slice(0, index + 1));
  });
}

const localSum = (array) => {
  return array.reduce((memo, val) => (memo + val));
}
*/

module.exports = sumOfArray;
