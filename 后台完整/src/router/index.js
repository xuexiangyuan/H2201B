import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/about",
    name: "about",

    component: () =>
      import("../views/AboutView.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () =>
          import("../views/Home/HomeView.vue"),
      },
      {
        path: "/structure",
        name: "structure",
        component: () =>
          import("../views/Structure/structure.vue"),
      },
			{
				path: '/staff',
				name: '员工',
				component: () => import('../views/staff/Staff.vue'),
			},
			{
				path: '/examine/:id',
				name: 'examine',
				component: () => import('../views/staff/examine.vue'),
			},
			{
				path: '/manage',
				name: 'manage',
				component: () => import('../views/Manage/manage.vue'),
			},
			{
				path: '/install',
				name: 'install',
				component: () => import('../views/Install/install.vue'),
			},
			{
				path: '/security',
				name: 'security',
				component: () => import('../views/Security/security.vue'),
			},
			{
				path: '/historyd',
				name: 'historyd',
				component: () => import('../views/Security/Historyd.vue'),
			},
			{
				path: '/forms',
				name: 'forms',
				component: () => import('../views/Security/Forms.vue'),
			},
			{
				path: '/lock/:id',
				name: 'lock',
				component: () => import('../views/Security/lock.vue'),
			},
			{
				path: '/examine',
				name: 'examinee',
				component: () => import('../views/Examine/examine.vue'),
			},
			{
				path: '/procedure',
				name: 'procedure',
				component: () => import('../views/Examine/procedure.vue'),
			},
			{
				path: '/inspect/:id',
				name: 'inspect',
				component: () => import('../views/Examine/inspect.vue'),
			},
			{
				path: '/check',
				name: 'check',
				component: () => import('../views/Check/check.vue'),
			},
			{
				path: '/interfile',
				name: 'interfile',
				component: () => import('../views/Check/interfile.vue'),
			},
			{
				path: '/reportforms',
				name: 'reportforms',
				component: () => import('../views/Check/reportforms.vue'),
			},
			{
				path: '/salary',
				name: 'salary',
				component: () => import('../views/Salary/salary.vue'),
			},
			{
				path: '/list',
				name: 'list',
				component: () => import('../views/Salary/list.vue'),
			},
			{
				path: '/priceform',
				name: 'priceform',
				component: () => import('../views/Salary/priceform.vue'),
			},

    ]
  },

];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
