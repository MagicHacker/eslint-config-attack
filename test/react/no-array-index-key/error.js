/**
 * 禁止使用数组的索引作为 key
 */
// "react/no-array-index-key": "off",
[1,2].map((thing, index) => (
  <div key={index} />
));