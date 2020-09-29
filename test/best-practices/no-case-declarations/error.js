/**
 * switch 的 case 内有let、const、function 和 class的时候，必须使用大括号将 case 内变成一个代码块
 */
/*eslint no-case-declarations: "error"*/
const foo = 0
switch (foo) {
  case 1:
      const x = 1;
      break;
  case 2:
      const y = 2;
      break;
  case 3:
      function f() {}
      break;
  default:
      class C {}
}