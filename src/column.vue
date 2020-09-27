<template>
  <div class="column" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props:{
    span:{
      type:[Number,String]
    }
  }
}
</script>
<style lang="scss" scoped>
.column{
  height: 100px;
  background: grey;
  width: 50%;
  border:1px solid red;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
}
</style>