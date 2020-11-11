/**
 * 禁止with语句
 * webpack编译和打包阶段会报错
 * 三方库有可能在用
 */
/*eslint no-with: "error"*/

with (point) {
  r = Math.sqrt(x * x + y * y)
}