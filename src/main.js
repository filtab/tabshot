import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/theme-chalk/display.css'

Vue.config.productionTip = false
Vue.use(elementUi)

// 公共样式
import './assets/css/common.css'
import './assets/css/reset.css'
import './assets/css/element-reset.css'
import './components/common' // 全局公共组件
import './filters' // 全局过滤器
import Mixin from './mixins'
Vue.mixin(Mixin)

process.env.NODE_ENV === 'develepment' ? require('./mock') : ''

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts-gl'

import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh_CN', // 语言标识
  messages: {
    'zh_CN': require('./lang/zh'),
    'en_US': require('./lang/en')
  }
})

const lang = localStorage.getItem('lang') || 'zh_CN'
if (lang === 'en_US') {
  locale.use(enLocale)
} else {
  locale.use(zhLocale)
}

Vue.component('v-chart', ECharts)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
