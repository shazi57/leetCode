const removeCoveredIntervals = (intervals, ans = 0) => {
  const n = intervals.length;
  const coveredBy = (a, b) => b[0] <= a[0] && a[1] <= b[1];
  for (let i = 0; i < n; i += 1) {
    const a = intervals[i];
    let covered = false;
    for (let j = 0; j < n; j += 1) {
      if (j === i) continue;
      const b = intervals[j];
      if (coveredBy(a, b)) {
        covered = true;
        break;
      }
    }
    if (!covered) ans += 1;
  }
  return ans;
};

module.exports = removeCoveredIntervals;
