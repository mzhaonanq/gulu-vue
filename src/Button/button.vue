<template>
  <button class="g-button"  :class="{['icon-' + iconPosition]:true}" @click="$emit('click')">
    <g-icon v-if="loading" class="icon loading" icon="loading"></g-icon>
    <g-icon v-if="name&&!loading" class="icon" :icon="name"></g-icon>
   <slot/>
  </button>
</template>
<script>
import Icon from '../Icon/icon'
export default {
  components:{
    'g-icon':Icon
  },
  props:{
    name:{
      type:String,
      default:''
    },
    iconPosition: {
      type:String,
      default: 'left',
      validator(value) {
        return value==='left'|| value==='right'
      }
    },
   loading:{
     type:Boolean,
     default:false
   }
  }

}
</script>
<style lang="scss" scoped>
      $button-height: 32px;
      $font-size: 14px;
      $button-background: white;
      $button-active-background: #eee;
      $border-radius: 4px;
      $color: #333;
      $border-color: #999;
      $border-color-hover: #666;
@keyframes spin {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}
.g-button{
  font-size: $font-size;
  height: $button-height;
  line-height: $button-height;
  padding:0 1em;
  border-radius: $border-radius;
  border:1px solid $border-color;
  background: $button-background;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover{
    border-color: $border-color-hover;
  }
  &:active{
    background-color: $button-active-background;
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
  > .loading{
    animation: spin 2s linear infinite;
  }
}
</style>