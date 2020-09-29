/**
 * 禁止没必要的 bind()调用
 * 具体规则：https://cn.eslint.org/docs/rules/no-extra-bind
 */
/*eslint no-extra-bind: "error"*/
/*eslint-env es6*/
// function foo() {}
// const bar = {}
// const x = function () {
//   foo();
// }.bind(bar);
// console.log(x)