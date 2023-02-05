import http from '../../untils/httpRequse'

// 获取数据
function login(data) {
	// console.log(data);
  return http({ url: http.addorUrl("/sys/login"), method: "post", data }).then((res) => res)
}


export { login, }