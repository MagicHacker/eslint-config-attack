/**
 * 禁止对 String，Number 和 Boolean 使用 new 操作符 防止typeof始终返回object
 */

/*eslint no-new-wrappers: "error"*/

const stringObject = new String("Hello world");
const numberObject = new Number(33);
const booleanObject = new Boolean(false);
console.log(stringObject, numberObject, booleanObject)