<template>
  <svg class="g-icon" aria-hidden="true" >
    <use :xlink:href="'#icon-'+ icon"></use>
  </svg>
</template>

<script >
import './svg'
export default  {
 props:{
   icon:{
     type:String,
     default:''
   }
 }
}
</script>

<style lang='scss' scoped>
.g-icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>