# 一个Vue UI 组件

[![Build Status](https://travis-ci.org/mzhaonanq/gulu-vue.svg?branch=master)](https://travis-ci.org/mzhaonanq/gulu-vue) 

## 介绍

## 开始使用

1. 添加CSS样式

使用本组件前，需要在css中添加border-box

```css
*{box-sizing: border-box}
*::before{box-sizing: border-box}
*::after{box-sizing: border-box}
```
此样式支持IE 8 及以上浏览器 

目前还需设置默认颜色等变量，后续会改为SCSS变量
```css
    :root{
      --button-height:32px;
      --font-size:14px;
      --button-background:#fff;
      --button-active-background:#eee;
      --border-radius:4px;
      --color:#333;
      --border-color:#999;
      --border-color-hover:#666 ;
    }
```
 
 IE 15 及以上浏览器支持此样式

2. 安装 gulu

``` 
npm i --save mzhaonanq-test-gulu
```

3. 引入 gulu

```vue
import {Button ,ButtonGroup,ICon} from 'mzhaonanq-test-gulu'
import 'mzhaonanq-test-gulu/dist/index.css'

export default {
...
components:{
  Button,
  ButtonGroup,
  Icon  
  },
...
}
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
