/**
 * 禁止直接修改 this.state
 */
// "react/no-direct-mutation-state": "error",
import React from 'react';
export default class Hello extends React.Component {
  componentDidMount() {
    this.state.name = '123';
  }
  render() {
    return <div>Hello {this.state.name}</div>;
  }
}