const intervalIntersection = (intervalA, intervalB) => {
  if (intervalA.length === 0 || intervalB.length === 0) {
    return [];
  }

  // for each interval as rangeA in intervalA
  // for each interval as rangeB in intervalB
  // if minA <= minB && maxA <= maxB
  // add minA to the array
  // else if minA >= minB && maxA <= maxB
  // add [max(minA,)]

  const resultArray = [];

  for (const rangeA of intervalA) {
    for (const rangeB of intervalB) {
      const [aMin, aMax] = rangeA;
      const [bMin, bMax] = rangeB;
      if (aMin >= bMin && aMax <= bMax) {
        resultArray.push(rangeA);
      } else if (bMin >= aMin && bMax <= aMax) {
        resultArray.push(rangeB);
      } else if (aMin >= bMin && aMin <= bMax) {
        resultArray.push([aMin, bMax]);
      } else if (aMax >= bMin && aMax <= bMax) {
        resultArray.push([bMin, aMax]);
      }
    }
  }

  return resultArray;
};

module.exports = intervalIntersection;
