/**
 * 禁止在if块内出现函数声明和变量声明
 */
const bar = false;
if (bar) {
  function foo() {}
}
