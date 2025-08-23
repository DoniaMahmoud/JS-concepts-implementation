export default function isBalancedBrackets(str) {
  const openBrackets = "({[";
  const mapping = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else {
      if (mapping[str[i]] !== stack[stack.length - 1]) return false;
      stack.pop();
    }
    console.log("iteration", i, stack);
  }
  if (stack.length === 0) return true;
  return false;
}

console.log(isBalancedBrackets("}"));
