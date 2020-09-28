/**
 * 禁止在 return, throw, break 或 continue 之后还有代码
 */
function foo() {
  return true;
  console.log("done");
}
foo();
