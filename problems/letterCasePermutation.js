const permute = (soFar, rest, output) => {
  if (rest.length === 0) {
    output.add(soFar);
  } else {
    const ch = rest.charAt(0);

    permute(soFar + ch.toLowerCase(), rest.substr(1), output);
    permute(soFar + ch.toUpperCase(), rest.substr(1), output);
  }
};

const letterCasePermutation = (s) => {
  const output = new Set();
  permute('', s, output);
  return [...output];
};
module.exports = letterCasePermutation;
