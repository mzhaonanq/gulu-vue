<template>
<div>
    <g-button>点击按钮</g-button>
    <g-button name="setting">设置</g-button>
    <g-button :loading='true'>点击按钮</g-button>
    <g-button disabled>点击按钮</g-button>

    <pre>
      <code>
        {{content}}
      </code>
    </pre>
</div>
</template>

<script>
import Button from '../../../src/Button/button.vue'
export default {
  data(){
    return{
      content:`
    <g-button>点击按钮</g-button>
    <g-button name="setting">设置</g-button>
    <g-button :loading='true'>点击按钮</g-button>
    <g-button disabled>点击按钮</g-button>
    `
    }
  },
  components:{
      'g-button':Button
  }
}
</script>
