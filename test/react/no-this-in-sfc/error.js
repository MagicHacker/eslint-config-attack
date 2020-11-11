/**
 * 禁止在函数组件中使用 this
 */
// "react/no-this-in-sfc": "error",
export default function Foo(props) {
  return (
    <div>{this.props.bar}</div>
  );
}