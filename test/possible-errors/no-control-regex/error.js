/**
 * 禁止在正则表达式中使用控制字符
 */
const pattern1 = /\x1f/;
const pattern2 = new RegExp("\x1f");

console.log(pattern1, pattern2)