/**
 * getter必须有返回值
 */
const obj = {
  get name() {
    return;
  }
}
console.error(obj)