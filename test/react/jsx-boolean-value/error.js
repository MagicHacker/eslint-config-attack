/**
 * 布尔值的属性必须显式的声明值为 true
 */
// "react/jsx-boolean-value": "off",

function Hello(){}
// { "never": ["personal"] }
<Hello personal={true} />;

// { "always": ["personal"] }
<Hello personal />;