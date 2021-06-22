// https://leetcode.com/problems/valid-parentheses/

const isValid = (s: string): boolean => {
  const arr = s.split("");
  if (arr.length % 2 !== 0) {
    return false;
  }

  const OpenBrackets: {
    [index: string]: number;
  } = {
    "(": 1,
    "[": 2,
    "{": 3,
  };
  const ClosingBrackets: {
    [index: string]: number;
  } = {
    ")": 1,
    "]": 2,
    "}": 3,
  };

  let isValid = true;
  let openBracket = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (OpenBrackets[arr[i]]) {
      openBracket.push(arr[i]);
    } else {
      if (
        OpenBrackets[openBracket[openBracket.length - 1]] !==
        ClosingBrackets[arr[i]]
      ) {
        isValid = false;
        break;
      } else {
        openBracket.pop();
      }
    }
  }

  if (openBracket.length !== 0) {
    isValid = false;
  }

  return isValid;
};

export default isValid;
