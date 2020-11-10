/**
 * 组件内方法必须按照一定规则排序
 */
// "react/sort-comp": "error",

/*
1.static methods and properties
2.lifecycle methods: displayName, propTypes, contextTypes, childContextTypes, mixins, statics, defaultProps, 
  constructor, getDefaultProps, state, getInitialState, getChildContext, getDerivedStateFromProps, componentWillMount, 
  UNSAFE_componentWillMount, componentDidMount, componentWillReceiveProps, UNSAFE_componentWillReceiveProps, 
  shouldComponentUpdate, componentWillUpdate, UNSAFE_componentWillUpdate, getSnapshotBeforeUpdate, componentDidUpdate, 
  componentDidCatch, componentWillUnmount (in this order).
3.custom methods
4.render method
*/
import React from 'react'
export default class Demo extends React.Component{
  render() {
    return <div>Hello</div>;
  }
  displayName = 'Hello'
}