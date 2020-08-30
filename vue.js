/**
 * attack ESLint规则
 * https://github.com/MagicHacker/eslint-config-attack
 *
 * 依赖版本：
 *     "eslint": "^7.4.0"
 *     "babel-eslint": "^10.1.0"
 *     "vue-eslint-parser": "^7.1.0"
 *     "eslint-plugin-vue": "^6.2.2"
 */
module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 开启全局 script 模式
      impliedStrict: true,
      jsx: true,
    },
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false,
  },
  plugins: ["vue"],
  // 指定脚本的运行环境
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
  // globals全局配置
  globals: {},
  rules: {
    /**
     * 支持在模版中使用 eslint-disable-next-line 等注释
     */
    "vue/comment-directive": "error",
    /**
     * 修复 no-unused-vars 不检查 jsx 的问题
     */
    "vue/jsx-uses-vars": "error",
    /**
     * 自定义事件名不必使用 kebab-case 形式
     */
    "vue/custom-event-name-casing": "off",
    /**
     * 允许在watch中使用箭头函数
     */
    "vue/no-arrow-functions-in-watch": "off",
    /**
     * 禁止在计算属性中使用异步方法
     */
    "vue/no-async-in-computed-properties": "error",
    /**
     * 禁用已废弃的scope属性
     */
    "vue/no-deprecated-scope-attribute": "error",
    /**
     * 使用 v-slot 替代已废弃的 slot
     */
    "vue/no-deprecated-slot-attribute": "error",
    /**
     * 禁用已废弃的 slot-scope
     */
    "vue/no-deprecated-slot-scope-attribute": "error",
    /**
     * 禁止重复的键名
     */
    "vue/no-dupe-keys": "error",
    /**
     * 禁止在一个v-if / v-else-if 链中使用相同的判断条件
     */
    "vue/no-dupe-v-else-if": "error",
    /**
     * 禁止出现重复的属性
     */
    "vue/no-duplicate-attributes": [
      "error",
      {
        allowCoexistClass: false,
        allowCoexistStyle: false,
      },
    ],
    /**
     * 允许在生命周期钩子中使用异步函数
     */
    "vue/no-lifecycle-after-await": "off",
    /**
     * 禁止直接修改props
     */
    "vue/no-mutating-props": "error",
    /**
     * 禁止出现语法错误
     */
    "vue/no-parsing-error": "error",
    /**
     * 禁止重写保留字
     */
    "vue/no-reserved-keys": "error",
    /**
     * 组件的 data 属性的值必须是一个函数
     */
    "vue/no-shared-component-data": "error",
    /**
     * 禁止在计算属性中对属性修改
     */
    "vue/no-side-effects-in-computed-properties": "off",
    /**
     * 禁止 <template> 使用 key 属性
     */
    "vue/no-template-key": "off",
    /**
     * 禁止在 <textarea> 中出现模版语法 {{message}}
     */
    "vue/no-textarea-mustache": "warn",
    /**
     * 禁止定义在 components 中的组件未使用
     */
    "vue/no-unused-components": "error",
    /**
     * 模版中已定义的变量必须使用
     */
    "vue/no-unused-vars": "error",
    /**
     * 禁止在同一个元素上使用 v-if 和 v-for 指令
     */
    "vue/no-use-v-if-with-v-for": "error",
    /**
     * <component> 绑定组件必须使用v-bind:is或者:is
     */
    "vue/require-component-is": "error",
    /**
     * render 函数必须有返回值
     */
    "vue/require-render-return": "error",
    /**
     * v-for 指令的元素必须有 v-bind:key
     */
    "vue/require-v-for-key": "error",
    /**
     * prop 的默认值必须匹配它的类型
     */
    "vue/require-valid-default-prop": "error",
    /**
     * 计算属性必须有返回值
     */
    "vue/return-in-computed-property": "error",
    /**
     * 当一个节点上出现两个 v-on:click 时，其中一个必须为 exact
     */
    "vue/use-v-on-exact": "error",
    /**
     * 必须使用有效的template跟标签
     */
    "vue/valid-template-root": "error",
    /**
     * 必须使用有效的v-bind指令
     */
    "vue/valid-v-bind": "error",
    /**
     * 必须使用有效的v-cloak指令
     */
    "vue/valid-v-cloak": "error",
    /**
     * v-else-if 指令必须合法
     */
    "vue/valid-v-else-if": "error",
    /**
     * v-else 指令必须合法
     */
    "vue/valid-v-else": "error",
    /**
     * v-for 指令必须合法
     */
    "vue/valid-v-for": "error",
    /**
     * v-html 指令必须合法
     */
    "vue/valid-v-html": "error",
    /**
     * v-if 指令必须合法
     */
    "vue/valid-v-if": "error",
    /**
     * v-is指令必须合法
     */
    "vue/valid-v-is": "error",
    /**
     * v-model 指令必须合法
     */
    "vue/valid-v-model": "error",
    /**
     * v-on 指令必须合法
     */
    "vue/valid-v-on": "error",
    /**
     * v-once 指令必须合法
     */
    "vue/valid-v-once": "error",
    /**
     * v-pre 指令必须合法
     */
    "vue/valid-v-pre": "error",
    /**
     * v-show 指令必须合法
     */
    "vue/valid-v-show": "error",
    /**
     * v-slot 指令必须合法
     */
    "vue/valid-v-slot": "error",
    /**
     * v-text 指令必须合法
     */
    "vue/valid-v-text": "error",
    /**
     * 限制自定义组件的属性风格
     */
    "vue/attribute-hyphenation": "off",
    /**
     * 组件的 name 属性必须符合 PascalCase或者"kebab-case"
     */
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    /**
     * html标签必须有闭合标签
     */
    "vue/html-end-tags": "error",
    /**
     * 标签属性必须按规则排序
     */
    "vue/attributes-order": "warn",
    /**
     * 变量名必须是 camelcase 风格的
     */
    "vue/camelcase": "off",
    /**
     * 限制组件名的风格
     */
    "vue/component-name-in-template-casing": "off",
    /**
     * 组件中必须按照 <template>, <script>, <style> 排序
     */
    "vue/component-tags-order": [
      "error",
      {
        order: ["template", "script", "style"],
      },
    ],
    /**
     * 必须使用 === 或 !==，禁止使用 == 或 !=
     */
    "vue/eqeqeq": ["error", "always"],
    /**
     * 限制组件的 name 属性的值的风格
     */
    "vue/name-property-casing": "warn",
    /**
     * 禁止给布尔值 props 添加默认值
     */
    "vue/no-boolean-default": "off",
    /**
     * 禁止在<template>表达式中解构赋值出现空 {} 或 []
     */
    "vue/no-empty-pattern": "error",
    /**
     * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式、模版字符串中或 HTML 内容中
     */
    "vue/no-irregular-whitespace": [
      "error",
      {
        skipStrings: true,
        skipComments: false,
        skipRegExps: true,
        skipTemplates: true,
        skipHTMLTextContents: true,
      },
    ],
    /**
     * 组件的 name 属性禁止使用保留字
     */
    "vue/no-reserved-component-names": "error",
    /**
     * 禁止在<template>表达式中调用函数
     */
    "vue/no-restricted-syntax": "warn",
    /**
     * 禁止使用 行内style 属性
     */
    "vue/no-static-inline-styles": "off",
    /**
     * 模版中的变量名禁止与前一个作用域重名
     */
    "vue/no-template-shadow": "warn",
    /**
     * 当你的 vue 版本较老时，禁用还未支持的语法
     */
    "vue/no-unsupported-features": "off",
    /**
     * 组件的属性必须为一定的顺序
     */
    "vue/order-in-components": "off",
    /**
     * props 必须用驼峰式
     */
    "vue/prop-name-casing": "off",
    /**
     * props 如果不是 required 的字段，必须有默认值
     */
    "vue/require-default-prop": "off",
    /**
     * props 的取值必须是基本类型的构造函数，而不是字符串
     */
    "vue/require-prop-type-constructor": "off",
    /**
     * prop 必须有类型限制
     */
    "vue/require-prop-types": "off",
    /**
     * props 的键名必须排好序
     */
    "vue/sort-keys": "off",
    /**
     * class 的值必须按字母排序
     */
    "vue/static-class-names-order": "off",
    /**
     * 禁止在模版中用 this
     */
    "vue/this-in-template": "error",
    /**
     * 禁止在 v-on 的值中调用函数
     */
    "vue/v-on-function-call": "error",
    /**
     * v-bind:foo.sync 指令必须合法
     */
    "vue/valid-v-bind-sync": "error",
  },
};
