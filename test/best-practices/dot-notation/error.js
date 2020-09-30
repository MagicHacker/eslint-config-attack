/**
 * 强制使用点号访问对象属性
 * 设置 allowKeywords 为 false（默认为true），避免对是保留字的属性使用点号
 * 将 allowPattern设置为一个正则表达式字符串允许匹配这个模式的属性名使用括号
 * 具体规则： https://cn.eslint.org/docs/rules/dot-notation
 */

/*eslint dot-notation: "error"*/
// const foo = {}
// const x = foo["bar"];
// console.log(x)