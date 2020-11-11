/**
 * 修复 no-unused-vars 不检查 jsx 的问题 
 * 该规则只有no-unused-vars可用的时候才生效
 */
/* eslint no-unused-vars: "error", "vue/jsx-uses-vars": "error" */
import Foo from './Foo';

<Foo />