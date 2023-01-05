import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Logina/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Home/AboutView.vue'),
			children:[
				{
					path: '/authority',
					name: 'authority',
					component: () => import("../views/Authority/authority.vue")
				},
			]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
