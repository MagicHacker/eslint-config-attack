/**
 * 禁止使用另一个组件的 propTypes
 */

// "react/forbid-foreign-prop-types": "error",
import SomeComponent from './SomeComponent';
SomeComponent.propTypes;

const { propTypes } = SomeComponent;
console.log(propTypes);

SomeComponent['propTypes'];