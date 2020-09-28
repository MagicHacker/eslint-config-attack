/**
 * 禁用debugger
 */
function isTruthy(x) {
  debugger;
  return Boolean(x);
}
isTruthy()