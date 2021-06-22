import isValid from ".";
const chalk = require("chalk");

console.log('Case: Input: s = "()"');
if (isValid("()") === true) {
  console.log(chalk.green("  Test passed!"));
} else {
  console.log(chalk.red("  Test failed!"));
}

console.log('Case: Input: s = "()[]{}"');
if (isValid("()[]{}") === true) {
  console.log(chalk.green("  Test passed!"));
} else {
  console.log(chalk.red("  Test failed!"));
}

console.log('Case: Input: s = "(]"');
if (isValid("(]") === false) {
  console.log(chalk.green("  Test passed!"));
} else {
  console.log(chalk.red("  Test failed!"));
}

console.log('Case: Input: s = "([)]"');
if (isValid("([)]") === false) {
  console.log(chalk.green("  Test passed!"));
} else {
  console.log(chalk.red("  Test failed!"));
}

console.log('Case: Input: s = "{[]}"');
if (isValid("{[]}") === true) {
  console.log(chalk.green("  Test passed!"));
} else {
  console.log(chalk.red("  Test failed!"));
}

console.log('Case: Input: s = "){"');
if (isValid("){") === false) {
  console.log(chalk.green("  Test passed!"));
} else {
  console.log(chalk.red("  Test failed!"));
}

console.log('Case: Input: s = "([])"');
if (isValid("([])") === true) {
  console.log(chalk.green("  Test passed!"));
} else {
  console.log(chalk.red("  Test failed!"));
}

console.log('Case: Input: s = "(}{)"');
if (isValid("(}{)") === false) {
  console.log(chalk.green("  Test passed!"));
} else {
  console.log(chalk.red("  Test failed!"));
}

console.log('Case: Input: s = "(("');
if (isValid("((") === false) {
  console.log(chalk.green("  Test passed!"));
} else {
  console.log(chalk.red("  Test failed!"));
}
