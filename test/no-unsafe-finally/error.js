/**
 * 禁止在 finally 中出现 return, throw, break 或 continue语句
 */
const foo = function () {
  try {
    return 1;
  } finally {
    return 3;
  }
};
foo();
