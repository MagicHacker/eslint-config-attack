/**
 * 禁止只在 setTimeout 或 setInterval 中传入字符串
 */

/*eslint no-implied-eval: "error"*/
setTimeout("alert('Hi!');", 100);

setInterval("alert('Hi!');", 100);
