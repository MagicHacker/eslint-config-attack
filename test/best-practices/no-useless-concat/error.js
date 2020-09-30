/**
 * 禁止没必要的字符串连接
 */

/*eslint no-useless-concat: "error"*/
/*eslint-env es6*/

const a = `some` + `string`
console.log(a)