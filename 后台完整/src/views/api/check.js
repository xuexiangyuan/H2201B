import http from '../../untils/httpRequse'

// 获取数据

function check(data) {
  return http({ url: http.addorUrl('/attendances'), method: "get", data}).then((res) => res)
}

function checkpag(data) {
  return http({ url: http.addorUrl(`/attendances?page=${data.page}&size=${data.size}&total=${data.total}`), method: "get", data}).then((res) => res)
}
function checkpaglock(data) {
  return http({ url: http.addorUrl('/attendances/reports'), method: "get", data}).then((res) => res)
}
// function authorityadd(data) {
//   return http({ url: http.addorUrl('/sys/permission'), method: "post", data}).then((res) => res)
// }
// function authoritydel(parmas) {
//   return http({ url: http.addorUrl(`/sys/permission/${parmas}`), method: "DELETE", parmas}).then((res) => res)
// }
// function authorityput(parmas) {
//   return http({ url: http.addorUrl(`/sys/permission/${parmas.id1}`), method: "PUT",data: parmas}).then((res) => res)
// }


export {check,checkpag,checkpaglock}