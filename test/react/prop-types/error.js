/**
 * 组件必须写 propTypes
 * @reason 类型相关的约束交给 TypeScript
 */
// "react/prop-types": "error",
export default function Hello({ name }) {
  return <div>Hello {name}</div>;
}