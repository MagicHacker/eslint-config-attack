/**
 * 禁止直接调用 Object.prototypes 的内置属性如：hasOwnProperty，isPrototypeOf
 */
const foo = {}
const hasBarProperty = foo.hasOwnProperty("bar");
console.warn(hasBarProperty)