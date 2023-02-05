import http from '../../untils/httpRequse'

// 获取数据
function jbxxx(parmas) {
	// console.log(data);
  return http({ url: http.addorUrl("employees/"+parmas+'/personalInfo'), method: "get",  })
}


export { jbxxx, }