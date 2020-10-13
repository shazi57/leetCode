const buddyStrings = (A, B) => {
  if (A.length !== B.length) {
    return false;
  }
  const [dif, chars] = [[], new Set(A)];
  for (const i in A) {
    if (A[i] !== B[i]) {
      dif.push([A[i], B[i]]);
    }
  }
  return (dif.length === 2 && dif[0].join() === dif[1].reverse().join())
    || (dif.length === 0 && chars.size !== A.length);
};

module.exports = buddyStrings;
