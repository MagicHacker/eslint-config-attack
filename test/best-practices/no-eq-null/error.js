/**
 * 禁止使用 foo == null，必须使用 foo === null
 */
/*eslint no-eq-null: "error"*/
const foo = 0

if (foo == null) {
  //
}