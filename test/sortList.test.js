const { expect } = require('chai');
const LinkedList = require('../dataStructures/LinkedList');
const sortList = require('../problems/sortList');

describe('Given the head of a linked list, return the list after sorting it in ascending order.', function () {
  it('4->2->1->3', function () {
    const ll = new LinkedList(4, new LinkedList(2, new LinkedList(1, new LinkedList(3))));
    const expected = [1, 2, 3, 4];
    const actual = sortList(ll).toArray();
    expect(actual).to.eql(expected);
  });

  it('-1 -> 5 -> 3 -> 4 -> 0', function () {
    const ll = new LinkedList(-1,
      new LinkedList(5, new LinkedList(3, new LinkedList(4, new LinkedList(0)))));
    const expected = [-1, 0, 3, 4, 5];
    const actual = sortList(ll).toArray();
    expect(actual).to.eql(expected);
  });
});
