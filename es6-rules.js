/**
 * 只与ES6有关的规则
 */
module.exports = {
    rules: {
        // 要求箭头函数体使用大括号
        'arrow-body-style': ['error', 'as-need'],
        // 要求箭头函数的参数使用圆括号
        'arrow-parens': ['error', 'as-need'],
        // 强制箭头函数的箭头前后使用一致的空格
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        // 要求在子构造函数中有 super() 的调用
        'constructor-super': 'error',
        // 禁止修改类声明的变量
        'no-class-assign': 'error',
        // 禁止在可能与比较操作符相混淆的地方使用箭头函数比如> =符号
        'no-confusing-arrow': [
            'error', 
            {
                'allowParens': true // 使该规则不那么严格，将括号作为有效防止混淆的语法
            }
        ],
        // 禁止修改 const 声明的变量
        'no-const-assign': 'error',
        // 禁止类成员中出现重复的名称
        'no-dupe-class-members': 'error',
        // 禁止重复模块导入
        'no-duplicate-imports': 'error',
        // 禁止 new Symbol()操作
        'no-new-symbol': 'error',
        // 禁止使用指定的 import 加载的模块
        'no-new-symbol': 'off',
        // 禁止在子构造函数中，在调用 super() 之前使用 this 或 super
        'no-this-before-super': 'error',
        // 禁止在对象中使用不必要的计算属性
        'no-useless-computed-key': 'warn',
        // 禁用不必要的构造函数
        'no-useless-constructor': 'warn',
        // 禁止在 import 和 export 和解构赋值时将引用的变量名重命名为相同的名字
        'no-useless-rename': [
            'error', 
            {
                ignoreDestructuring: false,
                ignoreImport: false,
                ignoreExport: false
            }
        ],
        // 要求使用 let 或 const 而不是 var
        'no-var': 'warn',
        // 强制对象字面量中方法和属性使用简写语法
        'object-shorthand': 'off',
        // 要求回调函数使用箭头函数
        'prefer-arrow-callback': 'off',
        // 要求使用 const 声明那些声明后不再被修改的变量
        'prefer-const': 'error',
        // 优先使用数组和对象解构
        'prefer-destructuring': 'warn',
        // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
        'prefer-numeric-literals': 'off',
        // 要求使用剩余参数而不是 arguments
        'prefer-rest-params': 'off',
        // 要求使用扩展运算符而非 .apply()
        'prefer-spread': 'off',
        // 要求使用模板字面量而非字符串连接
        'prefer-template': 'warn',
        // 要求 generator 函数内有 yield
        'require-yield': 'error',
        // 强制剩余和扩展运算符及其表达式之间无空格
        'rest-spread-spacing': ['error', 'never'],
        // 强制模块内的 import 排序
        'sort-imports': 'off',
        // 要求 symbol 描述
        'symbol-description': 'off',
        // 要求模板字符串中的嵌入表达式周围空格的使用
        'template-curly-spacing': ['error', 'always'],
        // 强制在 yield* 表达式中 * 周围使用空格
        'yield-star-spacing': 'off'
    }
}