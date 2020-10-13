const bulbSwitch = (n) => {
  // const bulbs = [...new Array(n)].map(() => false);

  // // [false false false false false]
  // // 0 1 2 3 4
  // // n = 1; +1 => 1 ; true
  // // n = 2; +1 => 1,2 (true, true)
  // for (let i = 1; i <= n; i += 1) {
  //   for (let j = 0; j < n; j += 1) {
  //     if ((j + 1) % i === 0) {
  //       bulbs[j] = !bulbs[j];
  //     }
  //   }
  // }
  // return bulbs.filter((val) => val === true).length;

  return parseInt(Math.sqrt(n));
};

module.exports = bulbSwitch;
