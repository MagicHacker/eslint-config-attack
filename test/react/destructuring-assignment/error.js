/**
 * props, state, context 必须用解构赋值
 */
/* react/destructuring-assignment: "off" */

const MyComponent = (props) => {
  return (<div id={props.id} />)
};
console.log(MyComponent);