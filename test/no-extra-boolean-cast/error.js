/**
 * 禁止不必要的布尔类型转换
 * 在上下文中比如if语句中
 * 表达式结果已经被强制转换成了布尔值
 * 再通过!!或Boolean转化是不必要的
 */
const bar = false;
let foo = !!!bar;
foo = !!bar ? 1 : 0;
foo = new Boolean(!!bar);

console.log(foo);
