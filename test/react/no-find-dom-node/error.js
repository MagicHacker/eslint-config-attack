/**
 * 禁止使用 findDOMNode
 */
// "react/no-find-dom-node": "error",
import React from 'react'
export default class MyComponent extends React.Component {
  componentDidMount() {
    findDOMNode(this).scrollIntoView();
  }
  render() {
    return <div />
  }
}