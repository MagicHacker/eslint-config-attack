/**
 * 禁止使用 isMounted
 * @reason 它是已废弃的语法
 */
// "react/no-is-mounted": "error",
import React from 'react';
export default class Demo extends React.Component{
  handleClick() {
    setTimeout(() => {
      if (this.isMounted()) {
        return;
      }
    });
  }
  render() {
    return <div onClick={this.handleClick.bind(this)}>Hello</div>
  }
}