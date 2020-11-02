const insertionSortList = (head) => {
  const before = { val: -Number.MAX_VALUE, next: null };

  while (head) {
    let prev = before;

    // find prev
    while (prev.next && prev.next.val < head.val) {
      prev = prev.next;
    }

    const { next } = head;
    head.next = prev.next;
    prev.next = head;
    head = next;
  }

  return before.next;
};

module.exports = insertionSortList;
