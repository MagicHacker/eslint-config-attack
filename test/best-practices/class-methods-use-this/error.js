/**
 * 类中可以出现不使用this的方法
 * 具体规则：https://cn.eslint.org/docs/rules/class-methods-use-this
 */
class A {
  foo() {
      console.log("Hello World")
}