class LinkedList {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }

  toArray() {
    const array = [];
    let ptr = this;

    while (ptr !== null) {
      array.push(ptr.val);
      ptr = ptr.next;
    }

    return array;
  }
}

module.exports = LinkedList;
