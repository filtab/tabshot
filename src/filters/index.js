/**
 * 全局过滤器配置资源
 */

import Vue from 'vue'
const filters = {
  filterTest(name) {
    return `过滤${name}`
  }
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
