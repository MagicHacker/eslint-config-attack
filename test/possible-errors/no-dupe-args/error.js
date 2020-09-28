/**
 * 禁止在函数参数中出现重复名称的参数
 * 禁用后打包会出错
 */
function foo(a, b, a) {
  console.log("value of the second a:", a);
}
foo()