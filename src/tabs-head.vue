<template>
  <div>
    <slot></slot>
    <slot name="action"></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluTabsHead',
  inject:['eventBus'],
}
</script>
<style lang="scss" scoped></style>