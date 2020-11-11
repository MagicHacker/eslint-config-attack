/**
 * 禁止类成员中出现重复的名称
 */

/*eslint no-dupe-class-members: "error"*/
/*eslint-env es6*/

class Foo {
  bar() { }
  bar() { }
}