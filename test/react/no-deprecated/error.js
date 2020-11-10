/**
 * 禁止使用已废弃的 api
 */
// "react/no-deprecated": "error",

import React, { PropTypes } from 'react';

React.render(<MyComponent />, root);

React.unmountComponentAtNode(root);

React.findDOMNode(this.refs.foo);

React.renderToString(<MyComponent />);

React.renderToStaticMarkup(<MyComponent />);

React.createClass({ /* Class object */ });

const propTypes = {
  foo: PropTypes.bar,
};

//Any factories under React.DOM
React.DOM.div();


// old lifecycles (since React 16.9)
export default class Demo extends React.Component{
componentWillMount() { }
componentWillReceiveProps() { }
componentWillUpdate() { }
}
