<template>
  <div class="column" :class="colClass"
  :style="colStyle">
    <slot></slot>
    </div>
</template>
<script>
export default {
  data(){
    return{
      gutter: 0
    }
  },
  computed:{
    colClass(){
      let {span,offset} = this
    return  [span&&`col-${span}`,offset&&`offset-${offset}`]
    },
    colStyle(){
       let {gutter}=this
      return {paddingLeft: gutter/2 +'px', paddingRight: gutter/2 + 'px'}
    }
  },
  props:{
    span:{
      type:[Number,String]
    },
    offset:{
      type:[Number,String]
    }
  }
}
</script>
<style lang="scss" scoped>
.column{

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>