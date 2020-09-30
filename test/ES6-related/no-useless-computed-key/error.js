/**
 * 禁止在对象中使用不必要的计算属性
 * 具体规则：https://cn.eslint.org/docs/rules/no-useless-computed-key
 */

/*eslint no-useless-computed-key: "error"*/
/*eslint-env es6*/

var a = { '0': 0 };
var a = { '0+1,234': 0 };
var a = { 0: 0 };
var a = { 'x': 0 };
var a = { 'x'() {} };