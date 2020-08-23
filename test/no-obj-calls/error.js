/**
 * 禁止把全局对象Math，JSON，Reflect当做函数进行调用
 */
const math = Math();
console.log(math);
