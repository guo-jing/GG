# GG - 一个 Vue UI 组件

[![Build Status](https://travis-ci.org/guo-jing/GG.svg?branch=master)](https://travis-ci.org/guo-jing/GG)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用

1. 添加 css 样式

    使用本框架前，请在 CSS 中开启border-box
    
    ```
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    ```
    
    IE8 及以上浏览器都支持此样式。

2. 安装 GG
    ```
    npm i --save gg-ui-lib
    ```
    
3. 引入 GG
    ```
    import {Button, ButtonGroup, Icon} from 'gg-ui-lib'
    import 'gg-ui-lib/dist/index.css'
    
    export default {
      name: 'app',
      component: {
        'gg-button': Button,
        'gg-icon': Icon
      }
    }
    
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

## 安装
