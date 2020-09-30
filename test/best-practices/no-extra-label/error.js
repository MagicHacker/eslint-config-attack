/**
 * 禁用不必要的标签 比如 A: while (a) {break A;}
 * 具体规则： https://cn.eslint.org/docs/rules/no-extra-label
 */

/*eslint no-extra-label: "error"*/

A: while (a) {
  break;
}