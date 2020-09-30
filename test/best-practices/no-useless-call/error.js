/**
 * 禁止没必要的 call 或 apply
 */

/*eslint no-useless-call: "error"*/

// These are same as `foo(1, 2, 3);`
function foo() {}
foo.call(undefined, 1, 2, 3);