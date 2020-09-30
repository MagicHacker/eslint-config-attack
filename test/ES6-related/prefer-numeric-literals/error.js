/**
 * 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
 * 由于 ES6 支持二进制，八进制，和十六进制字面量，所以该规则鼓励使用这些数字字面量而不是 parseInt()
 */

/*eslint prefer-numeric-literals: "error"*/

// parseInt("111110111", 2) === 503;
// parseInt("767", 8) === 503;
// parseInt("1F7", 16) === 503;
// Number.parseInt("111110111", 2) === 503;
// Number.parseInt("767", 8) === 503;
// Number.parseInt("1F7", 16) === 503;