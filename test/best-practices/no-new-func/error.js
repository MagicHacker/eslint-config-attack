/**
 * 禁止使用 new Function
 */

/*eslint no-new-func: "error"*/

const x = new Function("a", "b", "return a + b")
console.log(x)