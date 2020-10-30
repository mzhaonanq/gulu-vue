<template>
  <div style="padding-top: 16px;">
    <h2>将触发方式改为 hover</h2>
    <p>
      <strong>使用预览</strong>
    </p>

    <g-popover trigger="hover">
      <g-button>上方弹出</g-button>
      <template slot="content">
       <strong style="color:blue">支持HTML</strong>
      </template>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
      <g-button>下方弹出</g-button>
      <template slot="content">
        Hi
      </template>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <g-button>左边弹出</g-button>
      <template slot="content">
        Hi
      </template>
    </g-popover>
    <g-popover position="right" trigger="hover">
      <g-button>右边弹出</g-button>
      <template slot="content">
        Hi
      </template>
    </g-popover>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
  import Button from '../../../src/Button/button'
  import Popover from '../../../src/popover'
  export default {
    components: {'g-button':Button, 'g-popover':Popover},
    data () {
      return {
        content: `
          <g-popover trigger="hover">
            <g-button>上方弹出</g-button>
            <template slot="content">
              <strong style="color:blue">支持HTML</strong>
            </template>
          </g-popover>
          <g-popover position="bottom" trigger="hover">
            <g-button>下方弹出</g-button>
            <template slot="content">
              Hi
            </template>
          </g-popover>
          <g-popover position="left" trigger="hover">
            <g-button>左边弹出</g-button>
            <template slot="content">
              Hi
            </template>
          </g-popover>
          <g-popover position="right" trigger="hover">
            <g-button>右边弹出</g-button>
            <template slot="content">
              Hi
            </template>
          </g-popover>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
  }
</script>