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
  it('接收align属性',(done)=>{

    const Constructor = Vue.extend(Row)
    const hashMap = {
      'right':'flex-end',
      'left':'flex-start',
      'center':'center'
    }
    const array = ['center','right','left']
    array.map(value=>{
      const div = document.createElement('div')
      document.body.appendChild(div)
      const vm = new Constructor({
        el:div,
        propsData:{
          align: value
        }
      })
      const element = vm.$el
      expect(getComputedStyle(element).justifyContent).to.equal(hashMap[value])
      vm.$destroy()
      div.remove()
    })
    done()
  })
})