const expect = chai.expect;
import Vue from 'vue';
import Tabs from '../src/Tab/tabs';
import TabsBody from '../src/Tab/tabs-body';
import TabsHead from '../src/Tab/tabs-head';
import TabsItem from '../src/Tab/tabs-item';
import TabsPane from '../src/Tab/tabs-pane';

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-pane', TabsPane)


Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
  it('存在.', () => {
    expect(TabsItem).to.exist
  })
  it('接收name属性',()=>{
      const Constructor = Vue.extend(TabsItem)
      const vm = new Constructor({
          propsData:{
              name: 'sports'
          }
      }).$mount()
      expect(vm.$el.getAttribute('data-name')).to.equal('sports')
  })
  it('接收disabled属性',()=>{
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
        propsData:{
            disabled: true
        }
    }).$mount()
    const callback = sinon.fake()
    vm.$on('click',callback)
    vm.$el.click()
    expect(callback).not.to.been.called
  })
})