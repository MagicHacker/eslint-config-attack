/**
 * 正则表达式中必须要加上 u 标志
 */

/*eslint require-unicode-regexp: error */

const a = /aaa/
const b = /bbb/gi
const c = new RegExp("ccc")