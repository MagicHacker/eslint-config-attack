/**
 * 禁用不必要的构造函数
 * ES2015 为没有指定构造函数的类提供了默认构造函数。因此，没有必要提供一个空的构造函数或只是简单的调用父类这样的构造函数
 */

/*eslint no-useless-constructor: "error"*/
class A {
  constructor () {
  }
}

class A extends B {
  constructor (...args) {
    super(...args);
  }
}