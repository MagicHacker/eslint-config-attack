/**
 * 除了forEach外，数组的回调函数必须有返回值
 */
const indexMap = [].reduce(function(memo, item, index) {
  memo[item] = index;
}, {});
console.log(indexMap)