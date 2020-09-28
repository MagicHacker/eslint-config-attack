/**
 * 强制getter/setter成对出现
 * setter 必须有对应的 getter
 * getter 可以没有对应的 setter
 */

const o = {
  set a(value) {
      this.val = value;
  }
};
console.log(o)