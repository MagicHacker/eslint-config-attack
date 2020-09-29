/**
 * 禁用 arguments.caller 或 arguments.callee
 */
/*eslint no-caller: "error"*/

function foo(n) {
  if (n <= 0) {
      return;
  }
  arguments.callee(n - 1);
}
foo()