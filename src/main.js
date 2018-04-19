// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'

import store from './store'

import EffectInput from 'effect-input'
import 'effect-input/dist/index.css'

Vue.config.productionTip = false

// ElementUI
Vue.use(ElementUI)

// vue 输入框插件
Vue.use(EffectInput)

// 全局注册组件
Vue.component('BackIndex', () => import('@/components/BackIndex/index.vue'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
