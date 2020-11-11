/**
 * 禁止在 componentDidMount 里使用 setState
 * @reason 同构应用需要在 didMount 里使用 setState 
 * 暂未有同构场景
 */
// "react/no-did-mount-set-state": "error",
import React from 'react'
export default class Demo extends React.Component {
  componentDidMount() {
    this.setState({
      name: 123
    });
  }
  render() {
    return <div>Hello {this.state.name}</div>;
  }
}