import router from '@/router'
import axios from 'axios'
import { MessageBox } from 'element-ui'
import { getToken, removeToken } from './auth'
// import router from 'vue-router'

const http = axios.create({
  // /全部的
  baseURL: '/',
  //超时时间
  timeout: 1000 * 30,
  //跨域的时候是否需要凭证
  withCredentials: true,
  //请求头
  headers: {
    'Content-Type': 'application/json; charset=uft-8'
    //application(哎配开身) 就是 以json进行传递的
  }
})
// 添加请求拦截器
// 在发送请求之前做些什么
//1.确定当前用户是否登录，超时时间和过期
//				当前的token是否存在， 用getToken()来判断
// 				token的时间是否过期
//2.token--添加到每个用户请求中

//响应拦截
http.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    //请求带上token
    config.headers['Authorization'] = getToken() //Authorization(奥谁儿z身)
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
//请求拦截
http.interceptors.response.use(
  (response) => {
    console.log(response)
    if (response.data && response.data.status === 2) {
      //401,token失败
      //token 过期处理接口文档没有明确标识
      removeToken()
      router.push({
        name: 'login'
      })
    }
    return response
  },
  (error) => {
    let title = ''
    let message = ''

    if (error && error.response) {
      message = error.response.statusText
      //401token失败
      // if(error.response.data.status==2){
      // 	router.push({
      // 		name:"login"
      // 	})
      // }
      switch (error.response.status) {
        case 400:
          title = '错误请求'
          break
        case 401:
          title = '资源未授权'
          break
        case 403:
          title = '禁止访问'
          break
        case 404:
          title = '未找到所请求的资源'
          break
        case 405:
          title = '不允许使用该方法'
          break
        case 408:
          title = '请求超时'
          break
        case 500:
          title = '内部服务器错误'
          break
        case 500:
          title = '内部服务器错误'
          break
        case 501:
          title = '未实现'
          break
        case 502:
          title = '网关错误'
          break
        case 503:
          title = '服务不可用'
          break
        case 504:
          title = '网关超时'
          break
        case 505:
          title = 'HTTP版本不受支持'
          break
        default:
          title = error.response.status
      }
      // 对响应错误做点什么
      return MessageBox.alert(message, title, {
        type: 'warning'
      })
    } else {
      //跨域获取不到状态码或者其他状态进行处理
      return MessageBox.alert('请联系管理员，或者稍后再试！', '为止错误', {
        type: 'error'
      })
    }
  }
)

export default http
