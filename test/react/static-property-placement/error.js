/**
 * 类的静态属性必须使用 static 关键字定义
 */
/* react/static-property-placement: 'error' */
import React from 'react';
import PropTypes from 'prop-types';

class Demo extends React.Component {
  render() { return <div />; }
}
Demo.propTypes = {
  enabled: PropTypes.number
}