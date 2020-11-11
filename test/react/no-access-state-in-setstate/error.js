/**
 * 禁止在 setState 中使用 this.state
 */
// "react/no-access-state-in-setstate": "off",
import React from 'react';
export default class Demo extends React.Component{
  test(){
    this.setState({value: this.state.value + 1}) // 2
    this.setState({value: this.state.value + 1}) // 2, not 3
  }
}