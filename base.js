/**
 * NG ESLint规则
 * https://github.com/MagicHacker/eslint-config-attack
 *
 * 依赖版本：
 *     "eslint": "^7.4.0"
 *     "babel-eslint": "^10.1.0"
 */

module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    // 指定想要使用的ECMAScript版本
    ecmaVersion: 2019,
    // ECMAScript modules 模式
    sourceType: "module",
    // 指定想使用的额外的语言特性
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 启用全局strict校验模式
      impliedStrict: true,
      // 启用JSX
      jsx: true,
    },
  },
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
  // rules规则
  rules: {
    /**
     * 与JS代码中错误相关规则
     */

    // 禁止方向错误的 for 循环
    "for-direction": "error",
    //  getter 必须有返回值
    "getter-return": [
      "error",
      {
        allowImplicit: false, // 禁止在 return 语句中隐式地返回 undefined
      },
    ],
    // 禁止将 async 函数做为 new Promise 的回调函数
    "no-async-promise-executor": "error",
    // 禁止将 await 写在循环里
    "no-await-in-loop": "off",
    // 禁止与 -0 进行比较
    "no-compare-neg-zero": "error",
    // 禁止条件表达式中出现赋值操作
    "no-cond-assign": ["error", "except-parens"],
    // 禁用console
    "no-console": "off",
    // 禁止在条件判断中使用常量表达式
    "no-constant-condition": [
      "error",
      {
        checkLoops: false, // 允许在循环中使用常量表达式
      },
    ],
    // 禁止在正则表达式中使用控制字符 ctrl shift之类的
    "no-control-regex": "off",
    // 禁止使用debugger
    "no-debugger": "off",
    // 禁止在函数参数中出现重复名称的参数
    "no-dupe-args": "off",
    // 禁止在对象字面量中出现重复的键名
    "no-dupe-keys": "error",
    // 禁止在 switch 语句中出现重复测试表达式的 case
    "no-duplicate-case": "error",
    // 禁止出现空的语句块
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true, // 允许 catch 为空代码块
      },
    ],
    // 禁止在正则表达式中使用空的字符集 []
    "no-empty-character-class": "error",
    // 禁止将 catch 的第一个参数 error 重新赋值
    "no-ex-assign": "error",
    // 禁止不必要的布尔类型转换
    "no-extra-boolean-cast": "error",
    // 禁止不必要的分号
    "no-extra-semi": "warn",
    // 禁止将函数声明重新赋值
    "no-func-assign": "error",
    // 禁止在 if 代码块内出现函数声明和变量声明
    "no-inner-declarations": ["error", "both"],
    // 禁止 RegExp 构造函数中出现无效的正则表达式
    "no-invalid-regexp": "error",
    // 禁止使用不规则的空白符
    "no-irregular-whitespace": [
      "error",
      {
        skipStrings: true, // 允许在字符串中出现任何空白字符
        skipComments: true, // 允许在注释中出现任何空白符
        skipRegExps: true, // 允许在正则表达式中出现空白符
        skipTemplates: true, // 允许在模板字面量中出现空白符
      },
    ],
    // 禁止在正则表达式中使用无法区分的字符
    "no-misleading-character-class": "error",
    // 禁止把全局对象Math，JSON，Reflect当做函数进行调用
    "no-obj-calls": "error",
    // 禁止直接调用 Object.prototypes 的内置属性如：hasOwnProperty，isPrototypeOf，propertyIsEnumerable
    "no-prototype-builtins": "off",
    // 禁止正则表达式中出现多个连续空格
    "no-regex-spaces": "error",
    // 禁止使用稀疏数组，即数组中出现连续的逗号
    "no-sparse-arrays": "error",
    // 禁止在常规字符串中出现模板字符串语法
    "no-template-curly-in-string": "error",
    // 禁止在 return, throw, break 或 continue 之后还有代码
    "no-unreachable": "error",
    // 禁止在 finally 中出现 return, throw, break 或 continue语句
    "no-unsafe-finally": "error",
    // 禁止在 in 或 instanceof 操作符的左边使用感叹号
    "no-unsafe-negation": "error",
    // 禁止将 await 或 yield 的结果做为运算符的第二项
    "require-atomic-updates": "off",
    // 必须使用 isNaN() 检查 NaN
    "use-isnan": "error",
    // typeof 操作符比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol', 或 'bigint'
    "valid-typeof": "error",
    /**
     * 代码中的最佳实践
     */

    // setter 必须有对应的 getter，getter 可以没有对应的 setter
    "accessor-pairs": [
      "error",
      {
        setWithoutGet: true,
        getWithoutSet: false,
      },
    ],
    // 除了forEach外，数组的回调函数必须有返回值
    "array-callback-return": "error",
    // 把var语句看作是在块级作用域范围之内
    "block-scoped-var": "off",
    // 类中可以出现不适用this的方法
    "class-methods-use-this": "off",
    // 禁止函数的循环复杂度超过20
    complexity: [
      "error",
      {
        max: 20,
      },
    ],
    // 禁止函数在不同分支返回不同类型的值
    "consistent-return": "off",
    // switch 语句必须有 default
    "default-case": "off",
    // 强制使用点号访问对象属性
    "dot-notation": "off",
    // 必须使用 === 和 !==
    eqeqeq: ["error", "always"],
    // for in循环内部必须有hasOwnProperty
    "guard-for-in": "error",
    // 限制一个文件中包含的类的最大数量
    "max-classes-per-file": "off",
    // 禁止alert、confirm 和 prompt
    "no-alert": "off",
    // 禁用 arguments.caller 或 arguments.callee
    "no-caller": "error",
    // switch 的 case 内有let、const、function 和 class的时候，必须使用大括号将 case 内变成一个代码块
    "no-case-declarations": "error",
    // 禁止在正则表达式中出现形似除法操作符的开头，如 let a = /=foo/
    "no-div-regex": "off",
    // 禁止 if 语句中 return 语句之后有 else 块
    "no-else-return": "off",
    // 禁止空函数
    "no-empty-function": "off",
    // 禁止解构赋值中出现空 {} 或 []
    "no-empty-pattern": "error",
    // 禁止使用 foo == null，必须使用 foo === null
    "no-eq-null": "error",
    // 禁用 eval函数
    "no-eval": "error",
    // 禁止修改原生对象属性
    "no-extend-native": "off",
    // 禁止没必要的 bind()调用
    "no-extra-bind": "error",
    // 禁用不必要的标签 比如while (a) {break A;}
    "no-extra-label": "error",
    // switch 的 case 内必须有 break, return 或 throw，空的 case 除外
    "no-fallthrough": "error",
    // 禁止对全局变量直接赋值
    "no-global-assign": "error",
    // 禁止使用 ~ 等难以理解的类型转换，仅允许使用 !!
    "no-implicit-coercion": [
      "error",
      {
        allow: ["!!"],
      },
    ],
    // 禁止在全局作用域下定义变量或声明函数
    "no-implicit-globals": "off",
    // 禁止只在 setTimeout 或 setInterval 中传入字符串
    "no-implied-eval": "error",
    // 禁止在类之外的地方使用 this
    "no-invalid-this": "warn",
    // 禁止使用 __iterator__ 该属性已经废弃
    "no-iterator": "error",
    // 禁止使用label语句
    "no-labels": "error",
    // 禁止不必要的{}代码块
    "no-lone-blocks": "error",
    // 禁止在循环内的函数内部使用循环体条件语句中定义的变量
    "no-loop-func": "off",
    // 禁止在代码中使用没有明确含义的数字
    "no-magic-numbers": "off",
    // 禁止使用 \ 来换行字符串
    "no-multi-str": "error",
    // 禁止直接 new 一个类构造器而不赋值
    "no-new": "error",
    // 禁止使用 new Function
    "no-new-func": "error",
    // 禁止对 String，Number 和 Boolean 使用 new 操作符 防止typeof始终返回object
    "no-new-wrappers": "error",
    // 禁止对 function 的参数进行重新赋值
    "no-param-reassign": "error",
    // 禁用 __proto__ 用Object.getPrototypeOf代替
    "no-proto": "error",
    // 禁止重复定义变量
    "no-redeclare": "off",
    // 禁止使用指定的对象属性
    "no-restricted-properties": "off",
    // 禁止在 return 语句里赋值
    "no-return-assign": ["error", "always"],
    // 禁止在 return 语句里使用 await
    "no-return-await": "off",
    // 禁止使用javascript:void(0)
    "no-script-url": "off",
    // 禁止自我赋值
    "no-self-assign": "error",
    // 禁止自身比较
    "no-self-compare": "error",
    // 禁止使用逗号操作符
    "no-sequences": "error",
    // 禁止 throw 字面量，必须 throw 一个 Error 对象
    "no-throw-literal": "error",
    // 禁止循环条件一直不变
    "no-unmodified-loop-condition": "error",
    // 禁止无用的表达式
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true, // 允许在表达式中使用逻辑短路求值
        allowTernary: true, // 允许在表达式中使用类似逻辑短路求值的三元运算符
        allowTaggedTemplates: true, // 将允许在表达式中使用带标签的模板字符串
      },
    ],
    // 禁止没必要的 call 或 apply
    "no-useless-call": "error",
    // 禁止在 catch 中仅仅只是把错误 throw 出去
    "no-useless-catch": "off",
    // 禁止没必要的字符串连接
    "no-useless-concat": "error",
    // 禁止没必要的转义
    "no-useless-escape": "off",
    // 禁止没必要的 return
    "no-useless-return": "off",
    // 禁止void操作符
    "no-void": "error",
    // 禁止注释中出现 TODO 和 FIXME
    "no-warning-comments": "off",
    // 禁止with语句
    "no-with": "off",
    // 正则表达式中使用命名捕获组
    "prefer-named-capture-group": "off",
    // Promise 的 reject 中必须传入 Error 对象，而不是字面量
    "prefer-promise-reject-errors": "error",
    // parseInt 必须传入第二个基数参数
    radix: "off",
    // async 函数中必须存在 await 语句
    "require-await": "off",
    // 正则表达式中必须要加上 u 标志
    "require-unicode-regexp": "off",
    // var 必须在作用域的顶部
    "vars-on-top": "off",
    // 要求 IIFE 使用括号括起来
    "wrap-iife": "off",
    // 必须使用 if (color === 'red') 而不是 if ('red' === color)
    yoda: [
      "error",
      "never",
      {
        onlyEquality: true, // 只对===判断进行报告
      },
    ],
    /**
     * 与变量声明相关的规则
     */

    // 变量必须在定义的时候赋值
    "init-declarations": "off",
    // 禁止对一个变量使用 delete
    "no-delete-var": "off",
    // 禁止 label 名称与已定义的变量重复
    "no-label-var": "off",
    // 禁止使用指定的全局变量
    "no-restricted-globals": "off",
    // 禁止变量名与外层作用域内的已定义的变量同名
    "no-shadow": "off",
    // 禁止使用关键字作为变量名
    "no-shadow-restricted-names": "error",
    // 禁止使用未定义的变量
    "no-undef": "error",
    // 禁止显式地将 undefined 赋值给变量
    "no-undef-init": "error",
    // 禁止将undefined作为标识符
    "no-undefined": "off",
    // 已定义的变量必须使用
    "no-unused-vars": [
      "error",
      {
        vars: "all", // 检测所有变量
        args: "none", // 不检查参数
        ignoreRestSiblings: false,
        caughtErrors: "none", // 不检查错误对象
      },
    ],
    // 变量必须先定义后使用
    "no-use-before-define": [
      "error",
      {
        variables: false, // 表示是否要在上层作用域内检测变量声明
        functions: false, // 表示该规则是否要检测函数的声明
        classes: false, // 表示是否要检测上层作用域中的类声明
      },
    ],
    /**
     * 与ES6有关的规则
     */
    // 要求箭头函数体使用大括号
    "arrow-body-style": ["error", "as-need"],
    // 要求箭头函数的参数使用圆括号
    "arrow-parens": ["error", "as-need"],
    // 强制箭头函数的箭头前后使用一致的空格
    "arrow-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    // 要求在子构造函数中有 super() 的调用
    "constructor-super": "error",
    // 禁止修改类声明的变量
    "no-class-assign": "error",
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数比如> =符号
    "no-confusing-arrow": [
      "error",
      {
        allowParens: true, // 使该规则不那么严格，将括号作为有效防止混淆的语法
      },
    ],
    // 禁止修改 const 声明的变量
    "no-const-assign": "error",
    // 禁止类成员中出现重复的名称
    "no-dupe-class-members": "error",
    // 禁止重复模块导入
    "no-duplicate-imports": "error",
    // 禁止 new Symbol()操作
    "no-new-symbol": "error",
    // 禁止使用指定的 import 加载的模块
    "no-restricted-imports": "off",
    // 禁止在子构造函数中，在调用 super() 之前使用 this 或 super
    "no-this-before-super": "error",
    // 禁止在对象中使用不必要的计算属性
    "no-useless-computed-key": "warn",
    // 禁用不必要的构造函数
    "no-useless-constructor": "warn",
    // 禁止在 import 和 export 和解构赋值时将引用的变量名重命名为相同的名字
    "no-useless-rename": [
      "error",
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    // 要求使用 let 或 const 而不是 var
    "no-var": "warn",
    // 强制对象字面量中方法和属性使用简写语法
    "object-shorthand": "off",
    // 要求回调函数使用箭头函数
    "prefer-arrow-callback": "off",
    // 要求使用 const 声明那些声明后不再被修改的变量
    "prefer-const": "error",
    // 优先使用数组和对象解构
    "prefer-destructuring": "warn",
    // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
    "prefer-numeric-literals": "off",
    // 要求使用剩余参数而不是 arguments
    "prefer-rest-params": "off",
    // 要求使用扩展运算符而非 .apply()
    "prefer-spread": "off",
    // 要求使用模板字面量而非字符串连接
    "prefer-template": "warn",
    // 要求 generator 函数内有 yield
    "require-yield": "error",
    // 强制剩余和扩展运算符及其表达式之间无空格
    "rest-spread-spacing": ["error", "never"],
    // 强制模块内的 import 排序
    "sort-imports": "off",
    // 要求 symbol 描述
    "symbol-description": "off",
    // 要求模板字符串中的嵌入表达式周围空格的使用
    "template-curly-spacing": ["error", "always"],
    // 强制在 yield* 表达式中 * 周围使用空格
    "yield-star-spacing": "off",
  },
};
