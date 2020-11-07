/**
 * 禁止出现未使用的 propTypes
 * @reason 类型相关的约束交给 TypeScript
 */
// "react/no-unused-prop-types": "error",
import React from 'react'
import PropTypes from 'prop-types';
export default class Demo extends React.Component {
  static propTypes = {
    name: PropTypes.string
  }
  render() {
    return <div>Hello</div>;
  }
}