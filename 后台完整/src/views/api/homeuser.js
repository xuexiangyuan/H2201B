import http from '../../untils/httpRequse'

// 获取数据
function jbxx(parmas) {
	// console.log(data);
  return http({ url: http.addorUrl(`sys/user?${parmas}`), method: "get",  })
}


export { jbxx, }