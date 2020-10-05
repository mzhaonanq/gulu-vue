<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>使用预览</strong>
    </p>
    <g-input></g-input>
    <g-input value="gulugulu"></g-input>
    <g-input value="gulugulu" disabled></g-input>
    <g-input value="gulugulu" readonly></g-input>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Input from '../../../src/input'
  export default {
    components: {'g-input' : Input },
    data () {
      return {
        selected: '1',
        content: `
          <g-input></g-input>
          <g-input value="gulugulu"></g-input>
          <g-input value="gulugulu" disabled></g-input>
          <g-input value="gulugulu" readonly></g-input>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>