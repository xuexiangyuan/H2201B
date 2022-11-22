import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/home',
        name: 'homee',
        component: () => import('../views/home.vue')
        
      },
      {
        path: '/yhlb',
        name: 'yhlb',
        component: () => import('../views/yhlb.vue'),
        meta:{
          bread:[{name: '数据管理', path: '/yhlb'}, {name: '用户列表', path: '/yhlb'}]
        }
      },
      {
        path: '/sjlb',
        name: 'sjlb',
        component: () => import('../views/sjlb.vue'),
        meta:{
          bread:[{name: '数据管理', path: '/'}, {name: '用户列表', path: '/'}, {name: '商家列表', path: '/'}]
        }
      },
      {
        path: '/splb',
        name: 'splb',
        component: () => import('../views/splb.vue'),
        meta:{
          bread:[{name: '数据管理', path: '/'}, {name: '用户列表', path: '/'}, {name: '商家列表', path: '/'},{name: '食品列表', path: '/'}]
        }
      },
      {
        path: '/ddlb',
        name: 'ddlb',
        component: () => import('../views/ddlb.vue'),
        meta:{
          bread:[{name: '数据管理', path: '/'}, {name: '用户列表', path: '/'}, {name: '商家列表', path: '/'},{name: '食品列表', path: '/'},{name: '订单列表', path: '/'}]
        }
      },
      {
        path: '/glylb',
        name: 'glylb',
        component: () => import('../views/glylb.vue'),
        meta:{
          bread:[{name: '数据管理', path: '/'}, {name: '用户列表', path: '/'}, {name: '商家列表', path: '/'},{name: '食品列表', path: '/'},{name: '订单列表', path: '/'},{name: '管理员列表', path: '/'}]
        }
      },
      {
        path: '/tjdp',
        name: 'tjdp',
        component: () => import('../views/tjdp.vue'),
        meta:{
          title:[{name: '添加数据', path: '/'}, {name: '添加商铺', path: '/tjdp'}, {name: '添加商品', path: '/'}]
        }
      },
      {
        path: '/tjsp',
        name: 'tjsp',
        component: () => import('../views/tjsp.vue'),
        meta:{
          title:[{name: '添加数据', path: '/'}, {name: '添加商铺', path: '/tjdp'}, {name: '添加商品', path: '/'}]
        }
      },
      {
        path: '/yhfbt',
        name: 'yhfbt',
        component: () => import('../views/yhfbt.vue'),
      },
      {
        path: '/wbbjj',
        name: 'wbbjj',
        component: () => import('../views/wbbjj.vue'),
      },
      {
        path: '/glyszz',
        name: 'glyszz',
        component: () => import('../views/glyszz.vue'),
      },
      {
        path: '/sm',
        name: 'sm',
        component: () => import('../views/sm.vue'),
      },
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
