/**
 * 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
 */
/*eslint no-div-regex: "error"*/

// function bar() { return /=foo/; }
// bar()