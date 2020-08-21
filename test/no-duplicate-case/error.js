/**
 * 禁止在switch语句中出现重复的case
 */
const foo = ''
switch (foo) {
  case '1':
    break;
  case '2':
    break;
  case '1':
    break;
}