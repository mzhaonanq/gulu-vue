<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>使用预览</strong>
    </p>
    <g-button>默认按钮</g-button>
    <g-button name="setting">设置按钮</g-button>
    <g-button :loading='true' >默认按钮</g-button>
    <g-button :loading='loadingStatus1' @click="loadingStatus1=!loadingStatus1">触发加载</g-button>
    <g-button disabled>默认按钮</g-button>
    <g-buttonGroup>
      <g-button name='left' :loading='loadingStatus2' @click="loadingStatus2=!loadingStatus2">上一页</g-button>
      <g-button name='right' iconPosition="right" :loading='loadingStatus3' @click="loadingStatus3=!loadingStatus3">下一页</g-button>
    </g-buttonGroup>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>

    <h2>图标</h2>
    <p>
      <strong>当前可使用图标</strong>
      <img src="../../images/available.jpg" alt="当前可使用图标">
    </p>

    <p>
      <strong>使用方法</strong>
      <pre><code>{{content2}}</code></pre>
    </p>
      <p>
      <strong>使用预览</strong>
      <g-button name="praise">点赞</g-button>
    </p>
  </div>

  
</template>
<script>
  import Button from '../../../src/Button/button'
  import ButtonGroup from '../../../src/Button/buttonGroup'
  export default {
    components: {
      'g-button': Button,
      'g-buttonGroup': ButtonGroup
    },
    data () {
      return {
        loadingStatus1:false,
        loadingStatus2:false,
        loadingStatus3:false,
        content: `
          <g-button>默认按钮</g-button>
          <g-button name="setting">设置按钮</g-button>
          <g-button :loading='true' >默认按钮</g-button>
          <g-button :loading='loadingStatus1' @click="loadingStatus1=!loadingStatus1">触发加载</g-button>
          <g-button disabled>默认按钮</g-button>
          <g-buttonGroup>
            <g-button name='left' :loading='loadingStatus2' @click="loadingStatus2=!loadingStatus2">上一页</g-button>
            <g-button name='right' iconPosition="right" :loading='loadingStatus3' @click="loadingStatus3=!loadingStatus3">下一页</g-button>
          </g-buttonGroup>
      `.replace(/^ {8}/gm, '').trim(),
      content2:`
          <g-button name="praise">点赞</g-button>
      `.replace(/^ {8}/gm, '').trim(),
      
      }
    }
  }
</script>