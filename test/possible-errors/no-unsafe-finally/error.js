/**
 * 禁止在 finally 中出现 return, throw, break 或 continue语句
 * finally 中的语句会在 try 之前执行
 * 具体规则: https://cn.eslint.org/docs/rules/no-unsafe-finally
 */
const foo = function () {
  try {
    return 1;
  } finally {
    return 3;
  }
};
foo();
