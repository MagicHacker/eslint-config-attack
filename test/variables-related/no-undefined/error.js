/**
 * 禁止使用 undefined
 */

/*eslint no-undefined: "error"*/

const foo = undefined;

var undefined = "foo";

if (foo === undefined) {
    // ...
}