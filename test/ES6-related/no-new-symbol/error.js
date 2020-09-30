/**
 * 禁止 new Symbol()操作
 */

/*eslint no-new-symbol: "error"*/
/*eslint-env es6*/

const foo = new Symbol('foo');
console.log(foo)