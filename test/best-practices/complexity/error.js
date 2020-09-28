/**
 * 禁止函数的循环复杂度超过 20
 * 具体规则：https://cn.eslint.org/docs/rules/complexity
 * wiki解释：https://en.wikipedia.org/wiki/Cyclomatic_complexity
 */
/*eslint complexity: ["error", 2]*/

function a(x) {
  if (true) {
      return x;
  } else if (false) {
      return x+1;
  } else {
      return 4; // 3rd path
  }
}
a()