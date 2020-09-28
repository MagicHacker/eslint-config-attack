/**
 * 禁止在对象字面量中出现重复键名
 */
const obj = {
  name: "Joe",
  age: 29,
  name: "Johnson",
};
console.log(obj);
