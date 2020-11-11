/**
 * 变量必须在定义的时候赋值
 */

/*eslint init-declarations: ["error", "always"]*/
/*eslint-env es6*/

function foo() {
  let bar;
  let baz;
}
foo()