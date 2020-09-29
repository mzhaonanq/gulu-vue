<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluToast'
}
</script>
<style scoped lang="scss">
 $toast-font-size: 14px;
 $toast-line-height: 1.8;
 $toast-height: 40px;
 $toast-background:rgba(0,0,0,0.75);
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $toast-font-size;
  line-height: $toast-line-height;
  height: $toast-height;
  display: flex;
  align-items: center;
  background: $toast-background;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0,0,0,0.5);
  color: #fff;
  padding:0 16px;
}
</style>