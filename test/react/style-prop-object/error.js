/**
 * style 属性的取值必须是 object
 */
// "react/style-prop-object": "error",

const styles = true;
<>
<div style="color: 'red'" />
<div style={true} />
<Hello style={true} />
<div style={styles} />
</>