import Mock from 'mockjs'
import data from './mockData'
console.log(data.menuList)
Mock.mock('/getMenuList', 'post', () => data.menuList)

Mock.mock('/zhuData', 'get', () => data.zhuData)
