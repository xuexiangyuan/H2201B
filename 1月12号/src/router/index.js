import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/home/AboutView.vue'),
		children:[
			{
				path: '/homeview',
				name: '首页',
				component: () => import('../views/homeview/HomeView.vue'),
			},
			{
				path: '/staff',
				name: '员工',
				component: () => import('../views/staff/Staff.vue'),
			},
			{
				path: '/install',
				name: '设置',
				component: () => import('../views/Install/install.vue'),
			},
			{
				path: '/manage',
				name: '权限管理',
				component: () => import('../views/Manage/manage.vue'),
			},
			{
				path: '/security',
				name: '社保',
				component: () => import('../views/Security/security.vue'),
			},
			{
				path: '/historyd',
				name: '历史归档',
				component: () => import('../views/Security/Historyd.vue'),
			},
			{
				path: '/forms',
				name: '202001报表',
				component: () => import('../views/Security/Forms.vue'),
			},
			{
				path: '/examine',
				name: '审批',
				component: () => import('../views/Examine/examine.vue'),
			},
			{
				path: '/procedure',
				name: '审批设置',
				component: () => import('../views/Examine/procedure.vue'),
			},
			{
				path: '/inspect',
				name: '申请请假',
				component: () => import('../views/Examine/inspect.vue'),
			},

		]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
