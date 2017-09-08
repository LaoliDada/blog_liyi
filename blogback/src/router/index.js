import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import backmain from '@/components/backmain'
import proall from '@/components/backmainnomal/alldocument_right'
import addoneass from '@/components/backmainnomal/firstass_right'
import allass from '@/components/backmainnomal/allass'
import addtwoass from '@/components/backmainnomal/chiass_right'
import newart from '@/components/backmainnomal/newart'
import xgart from '@/components/backmainnomal/xiugaiart'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'login',
			component: login
    }, {
			path: '/back',
			name: 'back',
			component: backmain,
			redirect: '/back/allpro',
			children: [{
				path: "allpro",
				component: proall
			}, {
				path: "addoneass",
				component: addoneass
			}, {
				path: "allass",
				component: allass
			}, {
				path: "addtwoass",
				component: addtwoass
			}, {
				path: "newart",
				component: newart
			}, {
				path: "xgart",
				component: xgart
			}]
    }
  ]
})
