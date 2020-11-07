/**
 * 必须在构造函数中初始化 state
 */
// "react/state-in-constructor": "off",
import React from 'react';
export default class Foo extends React.Component {
  state = { bar: 0 }
  render() {
    return <div>Foo</div>
  }
}