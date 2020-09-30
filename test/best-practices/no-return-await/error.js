/**
 * 禁止在 return 语句里使用 await
 * 具体规则：https://cn.eslint.org/docs/rules/no-return-await
 */

/*eslint no-return-await: error*/
function bar() {}
async function foo() {
  return await bar()
}
foo()