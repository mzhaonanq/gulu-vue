import Vue from 'vue'
import Input from '../src/input.vue'

const expect = chai.expect;

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.exist
  })
  describe('props', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('接收value', () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
    })
    it('接收disabled', () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
    it('接收readonly', () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })
    it('接收error', () => {
      vm = new Constructor({
        propsData: {
          error: '输入错误'
        }
      }).$mount()
      const spanElement = vm.$el.querySelector('span')
      expect(spanElement.innerText).to.equal('输入错误')
    })
  })
  describe('events', () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it('支持 change/input/focus/blur 事件', () => {
      ['input', 'change', 'focus', 'blur']
        .forEach((eventName) => {
          vm = new Constructor({}).$mount()
          const callback = sinon.fake();
          vm.$on(eventName, callback)
          let event = new Event(eventName);
          let inputElement = vm.$el.querySelector('input')
          inputElement.dispatchEvent(event)
          expect(callback).to.have.been.calledWith(event)
       })
    })
  })
})
