import fetch from '@/utils/request'

export const test = data => fetch({ url: '/api/test/demo', method: 'post', data })
export const test1 = data => fetch({ url: '/api/test/demo', method: 'get', data })
export const test2 = data => fetch({ url: '/api/test/demo', method: 'post', data })
export const test3 = data => fetch({ url: '/api/test/demo', method: 'post', data })
export const test4 = data => fetch({ url: '/api/test/demo', method: 'post', data })
