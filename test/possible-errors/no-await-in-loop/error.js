/**
 * 禁止将await写在循环里，因为这样就无法发送多个异步请求了，无法并发
 * 有时需要在循环中写 await，所以此规则暂时关闭
 */
function bar() {}
function baz() {}
async function foo(things) {
  const results = [];
  for (const thing of things) {
    // Bad: each loop iteration is delayed until the entire asynchronous operation completes
    results.push(await bar(thing));
  }
  return baz(results);
}
foo()