/**
 * 强制正则表达式中使用命名捕获组
 */

/*eslint prefer-named-capture-group: "error"*/

const foo = /(ba[rz])/
console.log(foo)