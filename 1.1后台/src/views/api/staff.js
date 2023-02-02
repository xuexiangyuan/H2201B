import http from '../../untils/httpRequse'

// 获取数据
function get(params) {
  return http({ url: http.addorUrl("/sys/user"), method: "get", params }).then((res) => res)
}


export { get }