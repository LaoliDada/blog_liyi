// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elem from "element-ui"
import axios from "axios"
import vuex from "vuex"
import vueQuillEditor from "vue-quill-editor"

import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.use(vuex)
Vue.use(elem)
Vue.use(vueQuillEditor)
/* eslint-disable no-new */

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})
router.beforeEach(function (to, from, next) {
	if (sessionStorage.getItem("username")) {
		next();
	} else {
		alert("请先登陆")
		next(false);
	}
})
