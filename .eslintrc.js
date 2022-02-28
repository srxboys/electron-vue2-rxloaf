module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  globals: {
    "_hmt": true,
    "AMap": true,
    "WeixinJSBridge": true,
    "WXEnvironment": true,
    "WebViewJavascriptBridge": true,
    "ud": true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 要求或禁止尾随逗号, 关闭此规则 , vue 需要【方法】需要在尾部添加逗号，主要是方便阅读代码
    'comma-dangle': 0,
    // 方法名和刮号之间需要有一格空格, 关闭此规则
    'space-before-function-paren': 0,
    // 此规则在非空文件的末尾强制执行至少一个换行符, 关闭此规则
    'eol-last': 0,
    // 在行尾禁止尾随空格（无尾随空格）, 关闭此规则
    'no-trailing-spaces': 0,
  }
}
