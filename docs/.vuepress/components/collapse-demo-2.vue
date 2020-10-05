<template>
<div>
      <h2>单选模式</h2>
    <p>
      <strong>使用预览</strong>
    </p>

    <g-collapse :selected.sync='selectedTab' single>
        <g-collapse-item title="标题一" name='1'> 内容一</g-collapse-item>
        <g-collapse-item title="标题二" name='2'>内容二</g-collapse-item>
        <g-collapse-item title="标题三" name='3'>内容三</g-collapse-item>
    </g-collapse>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
</div>
</template>

<script>
import Collapse from '../../../src/Collapse/collapse'
import CollapseItem from '../../../src/Collapse/collapse-item'
export default {
    components:{
        'g-collapse':Collapse,
        'g-collapse-item':CollapseItem
    },
  data () {
    return {
        selectedTab:['1'],
        content:`
        <g-collapse :selected.sync='selectedTab' single>
        <g-collapse-item title="标题一" name='1'> 内容一</g-collapse-item>
        <g-collapse-item title="标题二" name='2'>内容二</g-collapse-item>
        <g-collapse-item title="标题三" name='3'>内容三</g-collapse-item>
        </g-collapse>
        `.replace(/^ {8}/gm, '').trim()
    };
  }
}
</script>

<style lang="scss" scoped>
</style>