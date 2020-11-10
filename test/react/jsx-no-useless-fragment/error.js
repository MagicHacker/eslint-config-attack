/**
 * 禁止无意义的 Fragment 组件
 */
// "react/jsx-no-useless-fragment": "error",
<>
  <>{foo}</>
  <><Foo /></>
  <p><>foo</></p>
  <></>
  <Fragment>foo</Fragment>
  <React.Fragment>foo</React.Fragment>
  <section>
    <>
      <div />
      <div />
    </>
  </section>
</>