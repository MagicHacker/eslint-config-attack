/**
 * 禁止循环条件一直不变
 */

/*eslint no-unmodified-loop-condition: "error"*/
const node = 0
while (node) {
  //doSomething(node);
}