/**
 * 强制剩余和扩展运算符及其表达式之间无空格
 */

/*eslint rest-spread-spacing: ["error", "never"]*/

fn(... args)
[... arr, 4, 5, 6]
let [a, b, ... arr] = [1, 2, 3, 4, 5];