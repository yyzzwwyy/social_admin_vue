const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    // vue组件特有的规则
    'plugin:vue/vue3-recommended',
    // ts推荐的规则
    'plugin:@typescript-eslint/recommended',
    'prettier',
    // eslint-config-prettier 关闭与prettier冲突的规则，prettier接管代码风格。其依赖需要eslint-plugin-prettier
    // 一定要放在最后。因为 extends 中后引入的规则会覆盖前面的规则。
    'plugin:prettier/recommended'
  ],
  rules: {
    'vue/script-setup-uses-vars': 'error',
    'vue/no-reserved-component-names': 'off',
    'vue/custom-event-name-casing': 'off',
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',

    // typeScript (https://typescript-eslint.io/rules)

    '@typescript-eslint/no-unused-vars': 'off', // 禁止定义未使用的变量
    '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
    '@typescript-eslint/no-inferrable-types': 'off', // 可以轻松推断的显式类型可能会增加不必要的冗长
    '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
    '@typescript-eslint/explicit-function-return-type': 'off', // 不允许对初始化为数字、字符串或布尔值的变量或参数进行显式类型声明
    '@typescript-eslint/no-var-requires': 'off', // 不允许在 import 语句中使用 require 语句
    '@typescript-eslint/no-empty-function': 'off', // 禁止空函数
    '@typescript-eslint/no-use-before-define': 'off', // 禁止在变量定义之前使用它们
    '@typescript-eslint/ban-ts-comment': 'off', // 禁止 @ts-<directive> 使用注释或要求在指令后进行描述
    '@typescript-eslint/no-non-null-assertion': 'off', // 不允许使用后缀运算符的非空断言(!)
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 要求导出函数和类的公共类方法的显式返回和参数类型
    'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'space-before-function-paren': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-dupe-keys': 'off',
    'vue/no-parsing-error': 'error',
    'vue/no-template-key': 'off'
  }

  //  // @typescript-eslint
  //  '@typescript-eslint/explicit-function-return-type': 'off', // 需要函数和类方法的显式返回类型
  //  '@typescript-eslint/no-explicit-any': 'off', // 禁止使用该 any 类型
  //  '@typescript-eslint/no-var-requires': 'off', // 不允许使用 require 语句，除了在 import 语句中
  //  '@typescript-eslint/no-empty-function': 'off', // 禁止空函数
  //  '@typescript-eslint/no-use-before-define': 'off', // 在定义之前禁止使用变量
  //  '@typescript-eslint/ban-ts-comment': 'off', // 禁止 @ts-<directive> 使用评论或在指令后要求描述
  //  '@typescript-eslint/ban-types': 'off', // 禁止使用特定类型
  //  '@typescript-eslint/no-non-null-assertion': 'off', // '!'不允许使用后缀运算符的非空断言
  //  '@typescript-eslint/explicit-module-boundary-types': 'off', // 需要导出函数和类的公共类方法的显式返回和参数类型
  //  '@typescript-eslint/no-unused-vars': [
  //    'error',
  //    {
  //      argsIgnorePattern: '^_',
  //      varsIgnorePattern: '^_'
  //    }
  //  ], // 禁止未使用的变量
  //  // vue
  //  'vue/custom-event-name-casing': 'off', // 为自定义事件名称强制使用特定大小写
  //  'vue/attributes-order': 'off', // 强制执行属性顺序
  //  'vue/one-component-per-file': 'off', // 强制每个组件都应该在自己的文件中
  //  'vue/html-closing-bracket-newline': 'off', // 在标签的右括号之前要求或禁止换行
  //  'vue/multiline-html-element-content-newline': 'off', // 在多行元素的内容之前和之后需要换行符
  //  'vue/singleline-html-element-content-newline': 'off', // 在单行元素的内容之前和之后需要换行符
  //  'vue/attribute-hyphenation': 'off', // 对模板中的自定义组件强制执行属性命名样式
  //  'vue/require-default-prop': 'off', // 需要 props 的默认值
  //  'vue/html-indent': ['error', 2], // 在<template>中强制一致缩进
  //  'vue/html-self-closing': 'off', // 执行自闭合的风格
  //  'vue/max-attributes-per-line': 'off', // 强制每行属性的最大数量
  //  'vue/multi-word-component-names': 'off', // 是否开启组件命名规则校验（强制多个单词以驼峰或'-'链接的命名规则）
  //  // ESLint
  //  'no-use-before-define': 'off', // 禁止在变量定义之前使用它们
  //  'space-before-function-paren': 'off' // 强制在 function的左括号之前使用一致的空格,
  //  // quotes: [2, "double"], //双引号
  //  // semi: [2, 'always'] // 分号结尾
})
