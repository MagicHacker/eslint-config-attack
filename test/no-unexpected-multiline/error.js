/**
 * 禁止令人困惑的多行表达式
 * 具体规则： https://cn.eslint.org/docs/rules/no-unexpected-multiline
 */
const bar = 0
const foo = bar
(1 || 2).baz();
console.log(foo)