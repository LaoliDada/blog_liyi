<template>
<div id="backmain">
	<div class="header">
		<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">李毅个人博客后台管理</el-menu-item>
  <el-submenu index="2">
    <template slot="title">当前账户:{{thisuse}}</template>
<el-menu-item index="2-1" @click="returnthisuse">退出当前账户</el-menu-item>
</el-submenu>
</el-menu>

</div>
<div id="conmain">
	<backmainleft></backmainleft>
	<router-view></router-view>
</div>
</div>


</template>

<script>
	import backmainleft from "./backmainnomal/bakmain_left.vue"

	export default {
		data() {
			return {
				activeIndex: '1',
				thisuse: ""

			};
		},
		components: {
			backmainleft
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			returnthisuse() {
				var _this = this;
				if (confirm("确定退出当前账户吗？")) {
					alert("退出成功")
					this.$router.replace("/");
					sessionStorage.removeItem("username");
				}
			}
		},
		mounted() {
			if (!sessionStorage.getItem("username")) {
				this.$router.replace("/");
				alert("请先登陆")
			}
			this.thisuse = sessionStorage.getItem("username")
		}
	}

</script>
<style>
	.el-menu--horizontal .el-submenu {
		float: right;
	}
	
	#backmain {
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	#conmain {
		flex: 1;
		display: flex;
	}

</style>
