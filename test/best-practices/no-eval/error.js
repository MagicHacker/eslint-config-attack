/**
 * 禁用 eval函数
 */
/*eslint no-eval: "error"*/

const obj = { x: "foo" },
    key = "x",
    value = eval(`obj.${  key }`);
console.log(obj, value)