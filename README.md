# [eslint-config-attack](https://github.com/MagicHacker/eslint-config-attack)

## 项目简介

​ attack eslint 规则是一套适用于 JavaScript 项目的可共享的基础的配置规则。

## 依赖

​ Node，ESLint，babel-eslint

## 安装

```
#npm
npm install eslint-config-attack --save-dev
#yarn
yarn add eslint-config-attack --dev
```

## 快速使用

```
#npm
npm install eslint babel-eslint eslint-config-attack --save-dev
#yarn
yarn add eslint babel-eslint eslint-config-attack --dev
```

​ 在你的项目根目录下创建一个.eslintrc.js 文件，并将以下内容复制进去:

```
module.exports = {
  extends: [
    'attack',
  ],
  env: {
    // 你的环境变量（可包含多个全局变量）
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量
  },
  rules: {
    // 自定义你的规则
  },
};
```

## Issues

[issues](https://github.com/MagicHacker/eslint-config-attack/issues)

## 许可证协议

[MIT](https://opensource.org/licenses/MIT)
