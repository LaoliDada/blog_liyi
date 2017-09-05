<template>
  <el-col id="leftnav">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>分类管理</template>

<el-submenu index="1-1">
	<template slot="title">增加分类</template>
	<router-link to="/back/addoneass">
		<el-menu-item index="1-1-1">增加一级分类</el-menu-item>
	</router-link>
	<router-link to="/back/addtwoass">
		<el-menu-item index="1-1-2">增加二级分类</el-menu-item>
	</router-link>

</el-submenu>
<router-link to="/back/allass">
	<el-menu-item index="1-2-1">查看/管理所有分类</el-menu-item>
</router-link>

</el-submenu>
<el-submenu index="2">
	<template slot="title"><i class="el-icon-document"></i>文章管理</template>
	<router-link to="/back/newart">
		<el-menu-item index="2-1">增加文章</el-menu-item>
	</router-link>

	<router-link to="/back/allpro">
		<el-menu-item index="2-3">所有文章</el-menu-item>
	</router-link>
</el-submenu>
</el-menu>
</el-col>
</template>
<script>
	export default {
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		}
	}

</script>
<style>
	#leftnav {
		width: 200px!important;
		height: 100%;
		background: #eef1f6;
	}

</style>
