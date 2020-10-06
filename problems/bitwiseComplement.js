const bitwiseComplement = (N) => {
  const bitwiseComplementHelper = (n, powers) => {
    if (n < 2) {
      return (2 ** (powers + 1) - N) - 1;
    }
    return bitwiseComplementHelper(n / 2, powers + 1);
  };
  return bitwiseComplementHelper(N, 0);
};

module.exports = bitwiseComplement;
