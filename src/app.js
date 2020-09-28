import Vue from 'vue'
import Button from  './button'
import Input from './input'
import ButtonGroup from './buttonGroup'
import Row from './row'
import Column from './column'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-buttongroup',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-column',Column)

new Vue ({
  el:'#app',
  data(){
    return{
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      message: 'hello'
    }
  },
})

