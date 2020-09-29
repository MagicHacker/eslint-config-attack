/**
 * switch 的 case 内必须有 break, return 或 throw，空的 case 除外
 */

 /*eslint no-fallthrough: "error"*/
const foo = 0
switch(foo) {
  case 1:
    //
  case 2:
    //
}

switch(foo) {
  case 1:
}