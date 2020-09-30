/**
 * 要求在子构造函数中有 super() 的调用
 */

/*eslint constructor-super: "error"*/
/*eslint-env es6*/

class B {
  constructor() {
    //
  }
}

class A extends B {
  constructor() { }  // Would throw a ReferenceError.
}