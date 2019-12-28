import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cookies from 'js-cookie';

Vue.use(VueRouter)

const routes = [{
		path: '/home',
		name: 'home',
		component: Home,
		meta: {
			title: '主页',
			requireAuth: true
		},
		children:[{
			path: 'about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
		},{
			path: 'about2',
			name: 'about2',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ '../views/About2.vue')
		},
		{
			path: 'statistics',
			name: 'statistics',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ '../views/Statistics.vue')
		}
		]
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
		meta: {
			title: '关于',
			requireAuth: true
		}
	},
	{
		path: '/',
		name: 'login',
		component: () => import('../components/Login.vue')
	}
]

const router = new VueRouter({
	routes
})
router.beforeEach((to, from, next) => {
	var username = Cookies.get('username');
	if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
		if (username != '') { // 判断缓存里面是否有 userName  //在登录的时候设置它的值
			console.log('有cookies  '+username);
			next();
		} else {
			console.log('No cookies');
			next({
				path: '/',
				query: {
					redirect: to.fullPath
				} // 将跳转的路由path作为参数，登录成功后跳转到该路由
			});
		}
	} else {
		next();
	}
})
export default router
