/**
 * 禁止在循环内的函数内部使用循环体条件语句中定义的变量
 * 闭包的问题
 * 具体规则：https://cn.eslint.org/docs/rules/no-loop-func
 */

/*eslint no-loop-func: "error"*/
/*eslint-env es6*/

for (var i=10; i; i--) {
  (function() { return i; })();
}