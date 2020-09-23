import axios from 'axios'
import { Message } from 'element-ui'

import qs from 'qs'

// 创建一个请求服务
const service = axios.create({
  baseURL: '/',
  timeout: 60000
})

// request拦截器
service.interceptors.request.use(
  ctx => {
    ctx.headers['Content-Type'] = 'application/json;charset=utf-8'
    ctx.data = qs.stringify(ctx.data)
    ctx.headers['token'] = ''
    return ctx
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  ctx => {
    const res = ctx.data
    const status = ctx.status
    if (status === 200) {
      if (res.code === 0) {
        return res
      }
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      return res
    }
  },
  error => {
    try {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      })
    } catch (error) {
      console.log(error)
    }
    return Promise.reject(error)
  }
)
export default service
