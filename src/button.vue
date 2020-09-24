<template>
  <button class="g-button"  :class="{['icon-' + iconPosition]:true}"  >
    <g-icon class="icon" :icon="name"></g-icon>
   <slot/>
  </button>
</template>
<script>
export default {
  props:{
    name:'',
    iconPosition:''
  }
}
</script>
<style lang="scss">
.g-button{
  font-size: var(--font-size);
  height: var(--button-height);
  padding:0 1em;
  border-radius: var(--border-radius);
  border:1px solid var(--border-color);
  background: var(--button-background);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover{
    border-color: var(--border-color-hover);
  }
  &:active{
    background-color: var(--button-active-background);
  }
  &:focus{
    outline: none;
  }
  > .icon{
    margin-right: .1em;
  }
  &.icon-right {
    .icon {
      order: 1;
      margin-right: 0;
      margin-left: .1em;
    }
  }
}
</style>