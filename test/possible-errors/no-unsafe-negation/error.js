/**
 * 禁止在 in 或 instanceof 操作符的左边使用感叹号
 */
const object = {};
const key = "";
if (!key in object) {
  // do something
}
