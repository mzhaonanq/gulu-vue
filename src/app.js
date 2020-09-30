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
import Toast from './toast'
import Plugin from './plugin'

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
Vue.component('g-toast',Toast)
Vue.use(Plugin)

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
  created() {
    this.$toast(
      'Hello',
      {
      closeButton:{
      text:'知道了',
        callback(toast){
        console.log('知道啦啦啦');
      }
      },
        position:'bottom',
        enableHtml: true,
        autoClose: false
    })

  },
  methods:{
    showToast(){
    }
  }
})

