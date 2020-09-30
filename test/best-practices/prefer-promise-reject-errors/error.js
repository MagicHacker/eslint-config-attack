/**
 * Promise 的 reject 中必须传入 Error 对象，而不是字面量
 */

/*eslint prefer-promise-reject-errors: "error"*/

Promise.reject("something bad happened");