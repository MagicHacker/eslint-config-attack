/**
 * handler 的名称必须是 onXXX 或 handleXXX
 */
// "react/jsx-handler-names": "off",
import React from 'react'
function MyComponent(){}
export default class Demo extends React.Component {
  handleChange(){}
  onChange(){}
  render(){
    return <>
      <MyComponent handleChange={this.handleChange} />
      <MyComponent onChange={this.onChange} />
    </>
  }
} 