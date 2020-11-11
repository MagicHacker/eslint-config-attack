/**
 * 要求使用剩余参数代替 arguments
 * 具体规则：https://cn.eslint.org/docs/rules/prefer-rest-params
 */

function foo() {
  console.log(arguments);
}

function foo(action) {
  var args = Array.prototype.slice.call(arguments, 1);
  action.apply(null, args);
}