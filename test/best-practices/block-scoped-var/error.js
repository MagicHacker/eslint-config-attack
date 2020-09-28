/**
 * 将 var 定义的变量视为块作用域，禁止在块外使用
 * 有禁用var的规则
 * 具体规则：https://cn.eslint.org/docs/rules/block-scoped-var
 */
const x = 0
function doIf() {
  if (x === 0) {
      var build = true;
  }

  console.log(build);
}
doIf()

function dos() {
  let build;

  if (x === 0) {
      build = true;
  }

  console.log(build);
}
dos()