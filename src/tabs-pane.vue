<template>
  <div v-if="active" class="tabs-pane" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluTabsPane',
  inject: ['eventBus'],
  data() {
    return {
      active: false
    }
  },
  props: {
    name: {
      type: String | Number,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  created() {
    this.eventBus.$on('update:selected', name => {
   this.active = name===this.name;
    })
  },
  computed:{
    classes(){
      return {
        active: this.active
      }
    },
  },

}
</script>
<style lang="scss" scoped>
.tabs-pane{
  &.active{
    background: red;
  }
}
</style>