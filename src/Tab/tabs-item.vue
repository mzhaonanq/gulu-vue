<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name='name'>
  <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluTabsItem',
  inject: ['eventBus'],
  data(){
    return{
      active:false
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name:{
      type: [String, Number],
      required:true
    }
  },
  created(){
      this.eventBus && this.eventBus.$on('update:selected',name=>{
      this.active = name === this.name
      })
  },
  methods:{
    onClick(){
      if(this.disabled){return}
      this.eventBus && this.eventBus.$emit('update:selected', this.name,this)
      this.$emit('click')
    }
  },
  computed:{
    classes(){
      return {
        active: this.active,
        disabled: this.disabled
      }
    },
  },
}
</script>
<style lang="scss" scoped>

.tabs-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;

  &.active {
    color: blue;
  }
  &.disabled{
    color:grey;
    cursor: not-allowed
  }
}
</style>