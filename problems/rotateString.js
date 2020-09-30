const rotateString = (stringA, stringB) => {
  const helperRotateString = (copyStr, strB, rotationCount) => {
    if (rotationCount === strB.length && copyStr !== strB) {
      return false;
    }
    if (copyStr === strB) {
      return true;
    }
    return helperRotateString(copyStr.substring(1) + copyStr[0], strB, rotationCount + 1);
  };

  return helperRotateString(stringA, stringB, 0);
};

// iterative
// const rotateString = (stringA, stringB) => {
//   if (stringA === '') {
//     if (stringB === '') {
//       return true;
//     }
//     return false;
//   }

//   let copyString = stringA;
//   let temp;

//   while (temp !== stringA) {
//     const firstChar = copyString[0];
//     temp = copyString.substring(1);
//     temp += firstChar;
//     if (temp === stringB) {
//       return true;
//     }
//     copyString = temp;
//   }

//   return false;
// };

module.exports = rotateString;
