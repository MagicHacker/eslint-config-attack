/**
 * 要求 generator 函数内有 yield
 */

/*eslint require-yield: "error"*/
/*eslint-env es6*/

function* foo() {
  return 10;
}
foo()