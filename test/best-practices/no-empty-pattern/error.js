/**
 * 禁止解构赋值中出现空 {} 或 []
 */
/*eslint no-empty-pattern: "error"*/

const foo = {}
const {} = foo;