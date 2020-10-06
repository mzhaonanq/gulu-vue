---
title: Install - 安装
---

# 一个Vue UI 组件

[![Build Status](https://travis-ci.org/mzhaonanq/gulu-vue.svg?branch=master)](https://travis-ci.org/mzhaonanq/gulu-vue) 

# 介绍

这是一个简易的UI组件库

**注意：该UI组件尚未完成，请不要在生产环境中使用**

# 安装

1. 安装 gulu

``` 
npm install mzhaonanq-test-gulu
```

或

```
yarn add mzhaonanq-test-gulu
```

2. 引入 gulu

```javascript
import { Button, ButtonGroup, Icon, Input, Row, Column, Header, Layout, Sider,
    Footer, Content, Popover, TabsItem, Tabs, TabsHead, TabsBody, TabsPane, Toast, Plugin} 
    from 'mzhaonanq-test-gulu'

export default {
...
components:{
  'g-button':Button,
  'g-button-group':ButtonGroup,
  'g-input':input,
  ...  
  },
...
}
```

3. 添加样式

使用本组件前，需要在css中添加border-box

```css
*{box-sizing: border-box}
*::before{box-sizing: border-box}
*::after{box-sizing: border-box}
```
此样式支持IE 8 及以上浏览器 

## 文档
  详见组件官网   [组件官网](http://honghuada.top/gulu-vue/)
## 提问

## 变更记录

## 联系方式

## 贡献代码
