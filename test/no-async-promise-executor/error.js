/**
 * 禁止将async函数作为new promise的回调函数
 */
const foo = new Promise(async (resolve, reject) => {
  resolve();
});
foo();
