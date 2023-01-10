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
				name: 'homeview',
				component: () => import('../views/homeview/HomeView.vue'),
			},
			{
				path: '/staff',
				name: 'staff',
				component: () => import('../views/staff/Staff.vue'),
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
