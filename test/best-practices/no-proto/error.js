/**
 * 禁用 __proto__属性 用Object.getPrototypeOf代替
 */

/*eslint no-proto: "error"*/

const a = obj.__proto__
console.log(a)