/**
 * render 方法中必须有返回值
 */
// "react/require-render-return": "error",
import React from 'react'
export default class Demo extends React.Component{
  render() {
    <div>Hello</div>;
  }
}