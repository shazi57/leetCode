const removeDuplicateLetters = (s) => {
  const hashMap = {};
  let string = [];
  for (let i = 0; i < s.length; i += 1) {
    const char = s[i];
    if (hashMap[char]) {
      continue;
    } else {
      hashMap[char] = true;
      string.push(char);
    }
  }
  return string.sort().join('');
};

module.exports = removeDuplicateLetters;
