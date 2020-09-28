/**
 * 禁止函数在不同分支返回不同类型的值
 */

/*eslint consistent-return: "error"*/
function doSomething(condition) {
  if (condition) {
      return true;
  } else {
      return;
  }
}
doSomething()