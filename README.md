# [eslint-config-attack](https://github.com/MagicHacker/eslint-config-attack)

English/[简体中文](https://github.com/MagicHacker/eslint-config-attack/blob/master/README.zh-CN.md)

## Project Description

The attack eslint config is a shareable config for JavaScript/Vue project.

## Dependency

Node, ESLint, babel-eslint, vue-eslint-parser, eslint-plugin-vue.

## Install

```
#npm
npm install eslint-config-attack --save-dev
#yarn
yarn add eslint-config-attack --dev
```

## Quick Start

### Base Rules Usage

```
#npm
npm install eslint babel-eslint eslint-config-attack --save-dev
#yarn
yarn add eslint babel-eslint eslint-config-attack --dev
```

​ create an .eslintrc.js in the root dictionary of your project,then copy the following content into it:

```
module.exports = {
  extends: [
    'attack',
  ],
  env: {
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
  },
  rules: {
  }
};
```

### Vue Rules Usage

```
#npm
npm install --save-dev eslint babel-eslint vue-eslint-parser eslint-plugin-vue eslint-config-attack
#yarn
yarn add eslint babel-eslint vue-eslint-parser eslint-plugin-vue eslint-config-attack --dev
```

​ create an .eslintrc.js in the root dictionary of your project,then copy the following content into it:

```
module.exports = {
  extends: [
    'attack',
    'attack/vue',
  ],
  env: {
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
  },
  rules: {
  }
};
```

## Issues

[issues](https://github.com/MagicHacker/eslint-config-attack/issues)

## License

[MIT](https://opensource.org/licenses/MIT)
