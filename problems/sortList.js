const LinkedList = require('../dataStructures/LinkedList');

const sortList = (head) => {
  let ptr = head;
  const ret = [];
  while (ptr !== null) {
    ret.push(ptr.val);
    ptr = ptr.next;
  }

  ret.sort((a, b) => a - b);
  console.log(ret);

  const answer = new LinkedList('dummy');
  let ptr2 = answer;

  for (const val of ret) {
    const nextNode = new LinkedList(val);
    ptr2.next = nextNode;
    ptr2 = ptr2.next;
  }

  return answer.next;
};

module.exports = sortList;
