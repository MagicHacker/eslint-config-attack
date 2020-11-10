/**
 * 禁止将 children 作为一个 prop
 */
// "react/no-children-prop": "error",
import React from 'react';
function MyComponent(){}
function AnotherComponent(){}
<>
<div children='Children' />
<MyComponent children={<AnotherComponent />} />
<MyComponent children={['Child 1', 'Child 2']} />
</>
React.createElement("div", { children: 'Children' })