/**
 * 数组中的 jsx 必须有 key
 */
// "react/jsx-key": [
//   "error",
//   {
//     checkFragmentShorthand: true,
//   },
// ],
function Hello(){}
const data = [<Hello />, <Hello />, <Hello />];
data.map(x => <Hello>{x}</Hello>);