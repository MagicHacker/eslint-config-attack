/**
 * 禁止在 catch 中仅仅只是把错误 throw 出去
 */

/*eslint no-useless-catch: "error"*/

try {
  // doSomethingThatMightThrow();
} catch (e) {
  throw e
}