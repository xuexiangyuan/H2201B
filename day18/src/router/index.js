import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
		children:[
			{
				path: '/usersView',
				name: 'users',
				component: () => import('../views/UsersView.vue'),
				meta:[
					{title:'用户管理',name:'用户列表'}
				]
			},
			{
				path: '/rolesView',
				name: 'rolesView',
				component: () => import('../views/RolesView.vue'),
				meta:[
					{title:'权限管理',name:'角色列表'}
				]
			},
			{
				path: '/listView',
				name: 'listView',
				component: () => import('../views/ListView.vue'),
				meta:[
					{title:'权限管理',name:'权限列表'}
				]
			},
			{
				path: '/goodsView',
				name: 'goodsView',
				component: () => import('../views/GoodsView.vue'),
				meta:[
					{title:'商品管理',name:'商品列表'}
				]
			},
			{
				path: '/categoriesView',
				name: 'categoriesView',
				component: () => import('../views/CategoriesView.vue'),
				meta:[
					{title:'商品管理',name:'分类参数'}
				]
			},
			{
				path: '/categoriessView',
				name: 'categoriessView',
				component: () => import('../views/CategoriessView.vue'),
				meta:[
					{title:'商品管理',name:'商品分类'}
				]
			},
			{
				path: '/ordersView',
				name: 'ordersView',
				component: () => import('../views/OrdersView.vue'),
				meta:[
					{title:'订单管理',name:'订单列表'}
				]
			},
			{
				path: '/1View',
				name: '1View',
				component: () => import('../views/1View.vue'),
				meta:[
					{title:'数据统计',name:'数据报表'}
				]
			},
		]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
