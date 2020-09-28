<template>
  <div class="row" :style="{marginRight: -gutter/2 + 'px', marginLeft: -gutter/2 + 'px'}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props:{
    gutter:{
      type: [Number,String]
    }
  },
  mounted() {
    this.$children.forEach(vm=>{
      vm.gutter = this.gutter
    })
  }
}
</script>
<style lang="scss" scoped>
  .row{
    display: flex;
    margin: 0 -10px;
  }
</style>