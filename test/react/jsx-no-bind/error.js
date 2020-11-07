/**
 * jsx 中禁止使用 bind
 */
// "react/jsx-no-bind": "off",
import React from 'react'
function Foo(){}
export default class Demo extends React.Component{
  _handleClick(){}
  render(){
    return  <Foo onClick={this._handleClick.bind(this)} />
  }
} 