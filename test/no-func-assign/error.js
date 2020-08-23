/**
 * 禁止将函数声明重新赋值
 */
function foo() {}
foo = bar;

function foo() {
  foo = bar;
}
