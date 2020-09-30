/**
 * 禁止对 function 的参数进行重新赋值
 * 具体规则：https://cn.eslint.org/docs/rules/no-param-reassign
 */

/*eslint no-param-reassign: "error"*/

function foo(bar) {
  bar = 13;
}
foo()