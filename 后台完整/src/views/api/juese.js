import http from '../../untils/httpRequse'

// 获取数据
function role(data) {
	// console.log(data);
  return http({ url: http.addorUrl(`/sys/user?page=${data.page}&size=${data.size}&total=${data.total}`), method: "get",  })
}


export { role, }