import http from '../../untils/httpRequse'

// 获取数据
function set(data) {
  return http({ url: http.addorUrl(`/sys/role?page=${data.page}&size=${data.size}&total=${data.total}`), method: "get", }).then((res) => res)
}
function setname(data) {
  return http({ url: http.addorUrl('/sys/role'), method: "post", data}).then((res) => res)
}
function setdel(parmas) {
  return http({ url: http.addorUrl(`/sys/role/${parmas}`), method: "DELETE", parmas}).then((res) => res)
}
function bj(parmas) {
  return http({ url: http.addorUrl(`/sys/role/${parmas}`), method: "GET", parmas}).then((res) => res)
}
function okbj(parmas) {
  return http({ url: http.addorUrl(`/sys/role/${parmas.id1}`), method: "PUT", data:parmas}).then((res) => res)
}



export { set,setname,setdel,bj,okbj }