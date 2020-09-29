/**
 * 必须使用 === 和 !==
 */
/*eslint eqeqeq: "error"*/
const x = 0
const text = 0
const obj = {}
if (x == 42) {
  //
}

if (text == "") {
  //
}

if (obj.getStuff() != undefined) {
  //
}