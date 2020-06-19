import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {
	isLogined
} from "../utils/auth"
import dizhi from '@/dataa/Dizhi.vue'
import xinxi from '@/dataa/Xinxi.vue'


Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	}, {
		path: '/best',
		name: 'Best',
		component: () => import("../views/Best.vue"),
	},
	{
		path: '/list',
		name: 'List',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/List.vue')
	}, {
		path: '/user',
		name: 'User',
		component: () => import("../views/User.vue"),
		meta: {
			needLogin: true
		}
	}, {
		path: '/login',
		name: 'Login',
		component: () => import("../views/Login.vue"),
		meta: {
			hideNav: true
		}
	},
	{
		path: '/cart',
		name: "Cart",
		component: () => import("../views/Cart.vue"),
		meta: {
			needLogin: true
		}
	},
	{
		path: '/detail/:id',
		name: 'Detail',
		component: () => import("../views/Detail.vue"),
		meta: {
			hideNav: true
		}
	},
	{
		path: '/reg',
		name: 'Reg',
		component: () => import("../views/Reg.vue"),
		meta: {
			hideNav: true
		}
	},
	{
		path: '/data',
		name: 'Data',
		component: () => import("../views/Data.vue"),
		meta: {
			hideNav: true
		},
		children: [{
			path: 'dizhi',
			name: 'dizhi',
			component: dizhi,
		}, {
			path: 'xinxi',
			name: 'xinxi',
			component: xinxi,
		}],
	},
	{
		path: '/dizhi',
		name: 'Dizhi',
		component: () => import("../dataa/Dizhi.vue"),
	},
	{
		path: '/xinyuan',
		name: 'Xinyuan',
		component: () => import("../dataa/Xinyuan.vue"),
	},
	{
		path: '/yemian',
		name: 'Yemian',
		component: () => import("../dataa/Yemian.vue"),
	},
	{
		path: '/xinzeng',
		name: 'Xinzeng',
		component: () => import("../dataa/Xinzeng.vue"),
	},
	{
		path: '/order',
		name: 'order',
		component: () => import("../dataa/order.vue")
	},

]

const router = new VueRouter({
	routes
})

router.beforeEach((to, from, next) => {
	if (to.meta.needLogin) {
		if (isLogined()) {
			next()
		} else {
			sessionStorage.setItem(
				"comName", to.name
			)
			next({
				name: "Login"
			})
		}
	} else {
		next()
	}
})

export default router
