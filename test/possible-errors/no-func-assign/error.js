/**
 * 禁止将函数声明重新赋值
 */
const bar = 0
function foo() {}
foo = bar;
console.log(foo)