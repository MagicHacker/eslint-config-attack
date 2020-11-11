/**
 * 禁止对一个变量使用 delete
 * webpack和第三方包会用
 */

/*eslint no-delete-var: "error"*/

var x;
delete x;