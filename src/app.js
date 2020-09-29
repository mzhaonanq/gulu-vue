import Vue from 'vue'
import Button from  './button'
import Input from './input'
import ButtonGroup from './buttonGroup'
import Row from './row'
import Column from './column'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-buttongroup',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-column',Column)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-sider',Sider)

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

