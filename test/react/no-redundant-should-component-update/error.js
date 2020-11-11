/**
 * 禁止在 React.PureComponent 中使用 shouldComponentUpdate
 */
// "react/no-redundant-should-component-update": "error",
import React from 'react';
export default class Foo extends React.PureComponent {
  shouldComponentUpdate() {
    // do check
  }
  render() {
    return <div>Radical!</div>
  }
}