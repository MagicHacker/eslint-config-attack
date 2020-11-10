/**
 * propTypes 的属性必须按照字母排序
 * @reason 类型相关的约束交给 TypeScript
 */
// "react/sort-prop-types": "off",
import React from 'react';
import PropTypes from 'prop-types';
export default class Component extends React.Component {
  static propTypes = {
    z: PropTypes.number,
    y: PropTypes.array,
    a: PropTypes.object
  }
  render() {
    return <div />;
  }
}