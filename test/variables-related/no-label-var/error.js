/**
 * 禁止 label 名称与已定义的变量重复
 */

/*eslint no-label-var: "error"*/

const x = foo;
function bar() {
x:
  for (;;) {
    break;
  }
}