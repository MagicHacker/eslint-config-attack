/**
 * 限制 jsx 层级
 */
// "react/jsx-max-depth": "off",
// [2, { "max": 1 }]
const App = () => {},
  Foo = () => {},
  Bar = () => {},
  Baz = () => {};
<App>
  <Foo>
    <Bar>
      <Baz />
    </Bar>
  </Foo>
</App>