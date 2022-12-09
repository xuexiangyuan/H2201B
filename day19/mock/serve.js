let express = require('express') //引入express
let Mock = require('mockjs') //引入mock
const loginData = require('./common/login.json')
const menusData = require('./common/menus.json')
const usersData = require('./common/users.json')
const usersstateData = require('./common/usersState.json')
const addusersData = require('./common/addusers.json')
const rolesuserData = require('./common/rolesuser.json')
const rolesData = require('./common/roles.json')
const lsitData = require('./common/list.json')
const goodsData = require('./common/goods.json')
const categioriesData = require('./common/categiories.json')
const categoriessData = require('./common/categoriess.json')
const ordersData = require('./common/orders.json')
let app = express() //实列化 express

/**登录接口 */
app.use('/login', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...loginData
    })
  )
})


/**左侧菜单栏接口 */
app.use('/menus', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...menusData
    })
  )
})


/**用户列表接口 */
app.use('/users', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...usersData
    })
  )
})
/**用户开关按钮状态接口 */
app.use('/usersState', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...usersstateData
    })
  )
})
/**用户添加接口 */
app.use('/addusers', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...addusersData
    })
  )
})
/**用户分配接口 */
app.use('/rolesuser', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...rolesuserData
    })
  )
})
/**角色列表接口 */
app.use('/roles', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...rolesData
    })
  )
})
/**权限列表接口 */
app.use('/list', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...lsitData
    })
  )
})
/**商品列表接口 */
app.use('/goods', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...goodsData
    })
  )
})
/**分类参数接口 */
app.use('/categiories', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...categioriesData
    })
  )
})
/**商品分类接口 */
app.use('/categoriess', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...categoriessData
    })
  )
})
/**订单列表接口 */
app.use('/orders', function (req, res) {
  console.log(req, 'req')
  res.json(
    Mock.mock({
      ...ordersData
    })
  )
})

/**登录日志 */
// app.use('/home/loginsearch',function(req,res){
// 	res.json(
// 		Mock.mock({
// 			status:200,
// 			msg:'登陆成功',
// 			loginsearch
// 		})
// 	)
// })

app.listen('8090', () => {
  //启动服务node
  console.log('监听端口 8090')
})
