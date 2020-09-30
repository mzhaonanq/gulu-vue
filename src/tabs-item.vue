<template>
  <slot></slot>
</template>
<script>
export default {
  name: 'GuluTabsItem',
  props: {
    disabled: Boolean,
    default: false
  }
}
</script>
<style lang="scss" scoped></style>