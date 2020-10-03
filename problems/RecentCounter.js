const RecentCounter = function () {
  this.requests = [];
};

RecentCounter.prototype.ping = function (t) {
  this.requests.push(t);
  let counter = 0;
  for (let req of this.requests) {
    if (req <= t && req >= t - 3000) {
      counter += 1;
    }
  }
  return counter;
};

module.exports = RecentCounter;
