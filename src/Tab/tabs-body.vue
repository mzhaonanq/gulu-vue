<template>
  <div class="tabs-head">
    <slot></slot>
  </div>

</template>
<script>
export default {
  name: 'GuluTabsBody',
  inject:['eventBus'],
}
</script>
<style lang="scss" scoped></style>