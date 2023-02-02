import http from '../../untils/httpRequse'

// 获取数据
function login(params) {
  return http({ url: http.addorUrl("/sys/login"), method: "post", params }).then((res) => res)
}


export { login }