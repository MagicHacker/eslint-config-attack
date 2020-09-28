/**
 * 禁止将catch的第一个参数error对象重新赋值
 */
try {
  // do something
} catch (err) {
  err = 10
}