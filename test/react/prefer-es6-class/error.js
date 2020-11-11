/**
 * 必须使用 Class 的形式创建组件
 */
/* react/prefer-es6-class: ['error', 'always'] */

import React, {createReactClass} from 'react';
createReactClass({
  render() { return <div />; }
})