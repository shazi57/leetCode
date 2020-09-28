const kidsWithCandies = (candies, extraCandies) => (
  candies.map((kid) => {
    const isMax = kid + extraCandies >= Math.max(...candies);
    return isMax;
  })
);

module.exports = kidsWithCandies;
