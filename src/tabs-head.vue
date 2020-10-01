<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="action"></slot>
    </div>

  </div>
</template>
<script>
export default {
  name: 'GuluTabsHead',
  inject:['eventBus'],
  created() {
    this.eventBus.$on('update:selected',(item)=>{
      console.log(item);
    })
  }
}
</script>
<style lang="scss" scoped>
$tab-height:40px;
.tabs-head{
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  border:1px solid red;
  position: relative;
  > .line{
    position: absolute;
    bottom: 0;
    border-bottom:3px solid blue;
    width: 100px;
  }
  > .actions-wrapper{
    margin-left: auto;
  }
}
</style>