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
    ]
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
