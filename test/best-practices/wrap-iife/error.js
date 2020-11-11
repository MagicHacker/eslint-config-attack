/**
 * 强制立即执行的函数使用括号包裹起来
 * 具体规则：https://cn.eslint.org/docs/rules/wrap-iife
 */

/*eslint wrap-iife: ["error", "outside"]*/

// var x = function () { return { y: 1 };}();