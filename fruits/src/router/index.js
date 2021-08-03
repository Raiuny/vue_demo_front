import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pie from '../views/Pie' //懒加载模式，一开始并不会导入Pie组件，只有在调用该组件的时候才会导入
import Table from '../views/Table'
import Edit from '../views/Edit'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bar',
    name: 'Bar_table',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Bar.vue')
  },
  {
    path: '/pie',
    name: 'Pie_table',
    component: () => import('../views/Pie.vue')
  },
  {
    path: '/table',
    name:'Table',
    component: Table
  },
  {
    path: '/edit',
    name:'Edit',
    component: Edit
  },
  {
    path:'/add',
    name:'Add',
    component: () => import('../views/Add.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
