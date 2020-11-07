/**
 * 禁止在 componentDidUpdate 里使用 setState
 */
// "react/no-did-update-set-state": "error",
import React from 'react'
export default class Demo extends React.Component {
  componentDidUpdate() {
    this.setState({
      name: 123
    });
  }
  render() {
    return <div>Hello {this.state.name}</div>;
  }
}