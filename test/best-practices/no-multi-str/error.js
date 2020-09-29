/**
 * 禁止使用 \ 来换行字符串
 */

/*eslint no-multi-str: "error"*/
const x = "Line 1 \
         Line 2"
console.log(x)