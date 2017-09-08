import Vue from 'vue'
import Router from 'vue-router'
import blogmain from '@/components/blogmain'
import blog_into from '@/components/blog_into'
import about from '@/components/about'
import theart from '@/components/theart'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'blogmain',
			component: blogmain
		}, {
			path: '/into',
			name: 'blog_into',
			component: blog_into
		},
		{
			path: "/about",
			name: "about",
			component: about
		}, {
			path: "/theart/:artid",
			name: "theart",
			component: theart
		}
  ]
})
