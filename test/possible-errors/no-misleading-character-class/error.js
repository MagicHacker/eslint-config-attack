/**
 * 禁止在正则表达式中出现无法区分的字符
 */
const str = /^[Á]$/u;

console.log(str);
