import Mock from 'mockjs'
import home from './home.json'
import classify from './classify.json'
import brands from './brands.json'

console.log('mockServer')
// 指定监听的url和对应的json数据模板
Mock.mock('/api/homepage', {
  code:0,
  data: home
})
Mock.mock('/api/classify', {
  code:0,
  data: classify
})
Mock.mock('/api/brands', {
  code:0,
  data: brands
})

// export default xxx  不需要
