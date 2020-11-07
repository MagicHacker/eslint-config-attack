/**
 * 布尔值类型的 propTypes 的 name 必须为 is 或 has 开头
 */
/* react/boolean-prop-naming: 'error' */
import React from 'react';
import PropTypes from 'prop-types';

class Demo extends React.Component {
  static propTypes = {
    enabled: PropTypes.bool
  }
  render() { return <div />; }
}
console.log(Demo);
