/**
 * 禁止使用 PropTypes.any PropTypes.array 和 PropTypes.object
 */
// "react/forbid-prop-types": "error",
import React from 'react'
import PropTypes from 'prop-types'
export default class Component extends React.Component {
  static propTypes = {
    a: PropTypes.any,
    r: PropTypes.array,
    o: PropTypes.object
  }
}