import axios from 'axios'

let instance = axios.create({
  baseURL: '/apiv1',
  timeout: 2000,  // 超时
  responseType: 'json' // default
})
export default function (options) {
  return new Promise((resolve, reject) => {
    instance(options)
      .then(response => {
        const res = response.data
        resolve(res)
      })
      .catch(error => {
        console.log(error) // for debug
        reject(error)
      })
  })
}
