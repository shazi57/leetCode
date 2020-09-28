const sumOfArray = (inputArray) => {
  return inputArray.map((val, index) => {
    return localSum(inputArray.slice(0, index + 1));
  });
}

const localSum = (array) => {
  return array.reduce((memo, val) => (memo + val));
}

module.exports = sumOfArray
