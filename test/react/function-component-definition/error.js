/**
 * 限制函数式组件的函数形式（函数声明、函数表达式或箭头函数）
 * @reason 一些场景还不能覆盖，如 export default function，自动修复功能在 ts 中有些问题
 */
// "react/function-component-definition": "off",

// function expression for named component
const component1 = function (props) {
  return <div>{props.content}</div>;
};

// arrow function for named component
const component2 = (props) => {
  return <div>{props.content}</div>;
};

// arrow function for unnamed component
function getComponent() {
  return (props) => {
    return <div>{props.content}</div>;
  };
}
console.log(component1, component2, getComponent)