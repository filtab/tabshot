import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import lang from './modules/lang'
const store = new Vuex.Store({
  // strict: process.env.NODE_ENV === 'development',
  modules: {
    lang
  }
})

export default store
