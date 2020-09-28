const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row.vue'
import Column from '../src/column.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.exist
  })
  it('接收gutter属性',(done)=>{
    Vue.component('g-row',Row)
    Vue.component('g-column',Column)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML=`
    <g-row gutter="20">
    <g-column span="12"></g-column>
    <g-column span="12"></g-column>
    </g-row>
    `
    const vm = new Vue({
      el:div
    })
    setTimeout(()=>{
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.equal('-10px')
      expect(getComputedStyle(row).marginRight).to.equal('-10px')
      const cols = vm.$el.querySelectorAll('.column')
      expect(getComputedStyle(cols[0]).paddingLeft).to.equal('10px')
      expect(getComputedStyle(cols[0]).paddingRight).to.equal('10px')
      vm.$el.remove()
      vm.$destroy()
      done()
    },0)
  })
})