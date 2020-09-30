/**
 * 禁止在子构造函数中，在调用 super() 之前使用 this 或 super
 */

/*eslint no-this-before-super: "error"*/
/*eslint-env es6*/

class A extends B {
  constructor() {
      this.a = 0;
      super();
  }
}