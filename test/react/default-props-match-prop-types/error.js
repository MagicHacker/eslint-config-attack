/**
 * 一个 defaultProps 必须有对应的 propTypes
 */
/* react/default-props-match-prop-types : "error" */

import React from 'react';
import PropTypes from 'prop-types';

class Demo extends React.Component {
  static propTypes = {
    foo: PropTypes.string.isRequired
  }
  static defaultProps = {
    foo: 'foo',
    bar: 'bar'
  }
  render() { return <div />; }
}
console.log(Demo);