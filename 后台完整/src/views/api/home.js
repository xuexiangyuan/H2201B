import http from '../../untils/httpRequse'

// 获取数据
function profile() {
	// console.log(data);
  return http({ url: http.addorUrl("/sys/profile"), method: "post",  })
}


export { profile, }