/**
 * 禁止在 componentWillUpdate 中使用 setState
 * @reason 已经禁止使用 componentWillUpdate 了
 */
// "react/no-will-update-set-state": "error",
import React from 'react'
export default class Demo extends React.Component {
  componentWillUpdate() {
    this.setState({
      name: 123
    });
    return true;
  }
  render() {
    return <div>Hello {this.state.name}</div>;
  }
}