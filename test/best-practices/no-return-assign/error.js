/**
 * 禁止在 return 语句里赋值
 */

/*eslint no-return-assign: ["error", "always"]*/

function doSomething() {
  return foo = bar + 2;
}
doSomething()