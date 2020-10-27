const findAllFactors = (n) => {
  const res = [];
  let factor = 1;
  while (factor <= n) {
    if (n % factor === 0) {
      res.push(factor);
    }
    factor += 1;
  }
  return res;
};

const kthFactor = (n, k) => {
  // find all factors of n
  const factors = findAllFactors(n);
  // return kth index of element in all factors array
  if (factors[k - 1] === undefined) {
    return -1;
  }
  return factors[k - 1];
};

module.exports = kthFactor;
