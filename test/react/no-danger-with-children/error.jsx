/**
 * 禁止在使用了 dangerouslySetInnerHTML 的组件内添加 children
 */
// "react/no-danger-with-children": "error",
function Hello(){}
<>
<div dangerouslySetInnerHTML={{ __html: "HTML" }}>
  Children
</div>
<Hello dangerouslySetInnerHTML={{ __html: "HTML" }}>
  Children
</Hello>
</>