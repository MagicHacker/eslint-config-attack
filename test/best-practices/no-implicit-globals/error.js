/**
 * 禁止在全局作用域下定义变量或声明函数
 * 具体规则：https://cn.eslint.org/docs/rules/no-implicit-globals
 */

/*eslint no-implicit-globals: "error"*/
const foo = 1;

function bar() {}
bar()
console.log(foo)