<template>
  <button class="g-button frank"  :class="{['icon-' + iconPosition]:true}" @click="$emit('click')">
    <g-icon v-if="loading" class="icon loading" icon="loading"></g-icon>
    <g-icon v-if="name&&!loading" class="icon" :icon="name"></g-icon>
   <slot/>
  </button>
</template>
<script>
import Icon from './icon.vue'
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
<style lang="scss">
@keyframes spin {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}

.g-button{
  font-size: var(--font-size);
  height: var(--button-height);
  line-height: var(--button-height);
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
  > .loading{
    animation: spin 2s linear infinite;
  }
}
</style>