/**
 * 禁止 jsx 中使用无用的引号
 */
// "react/jsx-curly-brace-presence": ["error", "never"],
function App(){}
<App>{'Hello world'}</App>;
<App prop={'Hello world'} attr={"foo"} />;