import Vue from 'vue'
import Button from  './button'
import Icon from  './icon'
import ButtonGroup from './buttonGroup'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-buttongroup',ButtonGroup)

new Vue ({
  el:'#app',
  data(){
    return{
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
    }
  }
})

