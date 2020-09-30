/**
 * 禁止使用指定的全局变量
 */

/*eslint no-restricted-globals: ["error", "event", "fdescribe"]*/

function onClick() {
}

fdescribe("foo", function() {
});
onClick()