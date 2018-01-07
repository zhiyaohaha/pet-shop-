import axios from 'axios'

export default async function ajax(url = '', type = 'GET') {
  return new Promise(function (resolve, reject) {

    let promise
    if(type==='GET') {
      // 准备url query参数数据
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }

    promise.then(response => {
      resolve(response.data)
    })
      .catch(error => {
        reject(error)
      })
  })
}
