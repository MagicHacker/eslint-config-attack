/**
 * 禁止条件语句中出现赋值操作
 * 除非这个赋值语句被括号包裹起来
 */
let x = {}
let someNode = {}
if (x = x.a) {
  // do something
}
if ((someNode = someNode.parentNode) !== null) {
  // do
}