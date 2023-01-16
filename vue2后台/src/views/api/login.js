import http from './untils/httpRequse.js'

// 获取数据
function login(params) {
  return http({ url: http.addorUrl("/login"), method: "get", params }).then((res) => res)
}


export { login, }