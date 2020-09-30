import Toast from './toast'
function createToast({message,propsDate}){
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({propsDate})
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}

let currentToast

export default {
  install (Vue,options){
    Vue.prototype.$toast=function (Vue,message,toastOptions){
      if(currentToast){
        currentToast.close()
      }
      currentToast= createToast({Vue,message, propsData: toastOptions})
    }
  }
}