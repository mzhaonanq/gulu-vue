const expect = chai.expect;
import Vue from 'vue'
import Column from '../src/column.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Column', () => {
  it('存在.', () => {
    expect(Column).to.exist
  })
  it('接收span',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Column)
    const vm = new Constructor({
      el:div,
      propsData:{
        span:12,
      }
    })
    const element = vm.$el
    expect(element.classList.contains('col-12')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收offset',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Column)
    const vm = new Constructor({
      el:div,
      propsData:{
        offset:12,
      }
    })
    const element = vm.$el
    expect(element.classList.contains('offset-12')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收ipad',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Column)
    const vm = new Constructor({
      el:div,
      propsData:{
        ipad:{span:12,offset:12},
      }
    })
    const element = vm.$el
    expect(element.classList.contains('col-ipad-12')).to.equal(true)
    expect(element.classList.contains('offset-ipad-12')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收narrowPc',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Column)
    const vm = new Constructor({
      el:div,
      propsData:{
        narrowPc:{span:12,offset:12},
      }
    })
    const element = vm.$el
    expect(element.classList.contains('col-narrow-pc-12')).to.equal(true)
    expect(element.classList.contains('offset-narrow-pc-12')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收pc',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Column)
    const vm = new Constructor({
      el:div,
      propsData:{
        pc:{span:12,offset:12},
      }
    })
    const element = vm.$el
    expect(element.classList.contains('col-pc-12')).to.equal(true)
    expect(element.classList.contains('offset-pc-12')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
  it('接收wildPc',()=>{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Column)
    const vm = new Constructor({
      el:div,
      propsData:{
        wildPc:{span:12,offset:12},
      }
    })
    const element = vm.$el
    expect(element.classList.contains('col-wild-pc-12')).to.equal(true)
    expect(element.classList.contains('offset-wild-pc-12')).to.equal(true)
    div.remove()
    vm.$destroy()
  })
})