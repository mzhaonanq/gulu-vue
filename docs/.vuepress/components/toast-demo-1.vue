<template>
  <div style="padding-top: 16px;">
    <h2>自动关闭设置</h2>
    <p>
      <strong>使用预览</strong>
    </p>

    <div>
    <g-button @click="$toast('从顶部弹出',{autoClose:false})">上方弹出</g-button>
    <g-button @click="$toast('从中间弹出', {position:'middle',autoClose:3})">中间弹出</g-button>
    <g-button @click="$toast('从底部弹出', {position:'bottom',autoClose:3})">下方弹出</g-button>
    </div>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
  .gulu-toast {
    z-index: 30 !important;
  }
</style>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import plugin from '../../../src/Toast/plugin'
  import Button from '../../../src/Button/button'
  import Vue from 'vue'
  Vue.use(plugin)
  export default {
    components: {'g-button':Button},
    data () {
      return {
        content: `
          <style>
            .gulu-toast {
              z-index: 30;
            }
          </style>
          <div>
            <g-button @click="$toast('从顶部弹出',{autoClose:false})">上方弹出</g-button>
            <g-button @click="$toast('从中间弹出', {position:'middle',autoClose:3})">中间弹出</g-button>
            <g-button @click="$toast('从底部弹出', {position:'bottom',autoClose:3})">下方弹出</g-button>
          </div>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>