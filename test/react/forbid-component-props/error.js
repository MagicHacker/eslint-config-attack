/**
 * 禁止在自定义组件中使用指定的 props
 */
/* "react/forbid-component-props": "off" */

const Hello = () => {
  return <div/>
}
<Hello className='foo' style={{color: 'red'}} />