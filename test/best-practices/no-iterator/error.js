/**
 * 禁止使用 __iterator__ 该属性已经废弃
 */
/*eslint no-iterator: "error"*/

function FooIterator() {}
Foo.prototype.__iterator__ = function() {
  return new FooIterator(this);
};