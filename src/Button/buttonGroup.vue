<template>
  <div class="g-buttongroup">
  <slot/>
  </div>
</template>
<script>
export default {
  mounted() {
    for(const node of this.$el.children){
      const name = node.nodeName.toLowerCase()
      if(name!=='button'){
        console.warn(`g-buttongroup的子元素应该全是Button，但你写的是${name}`)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
      $border-radius: 4px;
.g-buttongroup{
  display: inline-flex;
  vertical-align: middle;
  > .g-button{
    border-radius: 0;
    &:not(:first-child){
      margin-left: -1px;
    }
    &:first-child{
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child{
      border-top-right-radius: $border-radius;
      border-bottom-right-radius:$border-radius;
    }
    &:hover{
      position: relative;
      z-index: 1;
    }
  }
}
</style>