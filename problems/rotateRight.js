const rotateRight = (head, k) => {
  if (head === null || head.next === null) {
    return head;
  }

  let size = 1;
  let ptr = head;

  while (ptr.next !== null) {
    ptr = ptr.next;
    size += 1;
  }

  let rotationNumber = size - (k % size);
  ptr.next = head;
  while (rotationNumber > 0) {
    head = head.next;
    ptr = ptr.next;
    rotationNumber -= 1;
  }
  ptr.next = null;
  return head;
};

module.exports = rotateRight;
