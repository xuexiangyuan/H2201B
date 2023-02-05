import http from '../../untils/httpRequse'

// 获取数据

function security(data) {
  return http({ url: http.addorUrl('/social_securitys/list'), method: "post", data}).then((res) => res)
}
// function authorityadd(data) {
//   return http({ url: http.addorUrl('/sys/permission'), method: "post", data}).then((res) => res)
// }
function securitylock(parmas) {
  return http({ url: http.addorUrl(`/social_securitys/${parmas}`), method: "get", parmas}).then((res) => res)
}
function securitylocktab(parmas) {
  return http({ url: http.addorUrl(`/social_securitys/payment_item/${parmas}`), method: "get", parmas}).then((res) => res)
}
// function authorityput(parmas) {
//   return http({ url: http.addorUrl(`/sys/permission/${parmas.id1}`), method: "PUT",data: parmas}).then((res) => res)
// }


export {security,securitylock,securitylocktab}