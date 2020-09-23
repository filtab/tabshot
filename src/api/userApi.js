import fetch from '../utils/request'

// 获取用户菜单
export const getMenuList = data => fetch({ url: '/getMenuList', method: 'post', data: data })
export const zhuData = data => fetch({ url: '/zhuData', method: 'get', data: data })
