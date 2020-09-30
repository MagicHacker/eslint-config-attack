 /**
 * 禁止变量名与上层作用域内的已定义的变量重复
 * 很多时候函数的形参和传参是同名的
 */

/*eslint no-shadow: "error"*/
/*eslint-env es6*/

const a = 3;
function b(a) {
    const a = 10;
}
b()