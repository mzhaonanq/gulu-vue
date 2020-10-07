import Vue from 'vue'
import Button from './Button/button'
import ButtonGroup from './Button/buttonGroup'
import Collapse from './Collapse/collapse'
import CollapseItem from './Collapse/collapse-item'
import Column from './Grid/column'
import Row from './Grid/row'
import Icon from './Icon/icon'
import Input from './input'
import Content from './Layout/content'
import Footer from './Layout/footer'
import Header from './Layout/header'
import Layout from './Layout/layout'
import Sider from './Layout/sider'
import Popover from './popover'
import Tabs from './Tab/tabs'
import TabsBody from './Tab/tabs-body'
import TabsHead from './Tab/tabs-head'
import TabsItem from './Tab/tabs-item'
import TabsPane from './Tab/tabs-pane'
import Plugin from './Toast/plugin'
import Toast from './Toast/toast'

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
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)

new Vue({
  el: '#app',
  data: {
    selectedTab:['2','1']
  },
  created(){
  },
  methods: {
    yyy(){
      console.log('yyy')
  },
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    },
    showToast(position){
      this.$toast(`你的智商目前为 ${Math.round(Math.random()*100)}。你的智商需要充值！`, {
        position,
        enableHtml: false,
        closeButton: {
          text: '已充值',
          callback () {
            console.log('他说已经充值智商了')
          }
        },
        autoClose: 3,
      })
    }
  }
})
