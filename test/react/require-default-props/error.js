/**
 * 非 required 的 prop 必须有 defaultProps
 * @reason 类型相关的约束交给 TypeScript
 */
// "react/require-default-props": "error",
import PropTypes from 'prop-types'
function MyStatelessComponent({ foo, bar }) {
  return <div>{foo}{bar}</div>;
}
MyStatelessComponent.propTypes = {
  foo: PropTypes.string.isRequired,
  bar: PropTypes.string
};