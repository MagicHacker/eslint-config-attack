/**
 * 禁止重复定义变量
 * 具体规则：https://cn.eslint.org/docs/rules/no-redeclare
 * webpack打包容易报错
 */

/*eslint no-redeclare: "error"*/
var a = 3;
var a = 10;