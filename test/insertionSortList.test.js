const { expect } = require('chai');
const insertionSortList = require('../problems/insertionSortList');
const LinkedList = require('../dataStructures/LinkedList');

describe('Sort a linked list using insertion sort.', function () {
  it('Input: 4->2->1->3', function () {
    const ll = new LinkedList(4,
      new LinkedList(2,
        new LinkedList(1,
          new LinkedList(3))));
    const actual = insertionSortList(ll).toArray();
    const expected = [1, 2, 3, 4];
    expect(actual).to.eql(expected);
  });

  it('Input: -1->5->3->4->0', function () {
    const ll = new LinkedList(-1,
      new LinkedList(5,
        new LinkedList(3,
          new LinkedList(4,
            new LinkedList(0)))));
    const actual = insertionSortList(ll).toArray();
    const expected = [-1, 0, 3, 4, 5];
    expect(actual).to.eql(expected);
  });
});
