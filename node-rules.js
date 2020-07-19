/**
 * Node.js和浏览器中commonjs的规则
 */
module.exports = {
    rules: {
        // 强制在回调函数中有return语句
        'callback-return': 'off',
        // 强制require()出现在顶层作用域中
        'global-require': 'off',
        // 强制在回调函数中处理error
        "handle-callback-err": ["error", "^(err|error)$" ], // 当参数名为err或error时，必须处理错误
        // 禁用Buffer()
        'no-buffer-constructor': 'off',
        // 禁止new require()操作
        'no-new-require': 'error',
        // 禁止对 __dirname 和 __filename 进行字符串连接
        'no-path-concat': 'off',
        // 禁用process.env
        'no-process-env': 'off',
        // 禁用 process.exit()
        'no-process-exit': 'off',
        // 禁用通过 require 加载的指定模块
        'no-restricted-modules': 'off',
        // 禁用Node的同步方法
        'no-sync': 'off'
    }
}