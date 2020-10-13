const reverseParentheses = (s) => {
  const stack = [];
  for (const char of s) {
    if (char !== ')') {
      stack.push(char);
      continue;
    }
    let c = stack.pop();
    const queue = [];
    while (c !== '(') {
      queue.push(c);
      c = stack.pop();
    }
    while (queue.length) {
      stack.push(queue.shift());
    }
  }
  return stack.join('');
};

module.exports = reverseParentheses;
