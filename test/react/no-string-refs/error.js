/**
 * 禁止使用字符串 ref
 */
// "react/no-string-refs": "error",
export default function Foo(props) {
  return (
    <div ref="hello"/>
  );
}