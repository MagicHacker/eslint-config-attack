/**
 * 禁止出现空的语句块
 * 允许catch语句为空语句块
 */
const arr = ''
if (arr) {}

try {
  //doSomething();
}
catch (ex) {}