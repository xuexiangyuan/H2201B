import http from '../../untils/httpRequse'

// 获取数据
function yg() {
	// console.log(data);
  return http({ url: http.addorUrl("sys/user/604f764971f93f3ac8f365c2"), method: "get",  })
}


export { yg, }