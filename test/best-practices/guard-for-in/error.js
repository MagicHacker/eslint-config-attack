/**
 * for in循环内部必须有hasOwnProperty
 */

 /*eslint guard-for-in: "error"*/
const foo = {}
let key = ''
for (key in foo) {
  doSomething(key);
}