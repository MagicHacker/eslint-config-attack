/**
 * 禁止使用 ReactDOM.render 的返回值
 */
// "react/no-render-return-value": "error",
import { ReactDOM } from "react";
function App() {}
return ReactDOM.render(<App />, document.body);

