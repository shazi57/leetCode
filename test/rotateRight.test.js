const { expect } = require('chai');
const LinkedList = require('../dataStructures/LinkedList');
const rotateRight = require('../problems/rotateRight');

describe('Given a linked list, rotate the list to the right by k places, where k is non-negative.', function () {
  it('test for toArray method', function () {
    const expected = [1, 2, 3, 4, 5];
    const list = new LinkedList(1,
      new LinkedList(2,
        new LinkedList(3,
          new LinkedList(4,
            new LinkedList(5)))));
    const actual = list.toArray();
    expect(expected).to.eql(actual);
  });

  it('should rotate linkedList by k places', function () {
    const list = new LinkedList(1,
      new LinkedList(2,
        new LinkedList(3,
          new LinkedList(4,
            new LinkedList(5)))));
    const actual = rotateRight(list, 2).toArray();
    const expected = [4, 5, 1, 2, 3];
    expect(expected).to.eql(actual);
  });

  it('should rotate linkedList by k places second', function () {
    const list = new LinkedList(0,
      new LinkedList(1,
        new LinkedList(2)));
    const actual = rotateRight(list, 4).toArray();
    const expected = [2, 0, 1];
    expect(expected).to.eql(actual);
  });
});
