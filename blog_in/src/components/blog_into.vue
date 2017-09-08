<template>
	<div id="blog_into">
		<div class="header">
		<el-dropdown>
			  <span class="el-dropdown-link shouye">
				blog to liyi
			  </span>
		  	<el-dropdown-menu slot="dropdown">
			<router-link to="/" tag="p"> <el-dropdown-item command="VUE">返回首页</el-dropdown-item></router-link>
			   <router-link to="/about" tag="p"><el-dropdown-item command="ANGULAR">关于本站</el-dropdown-item></router-link>
			  <el-dropdown-item command="JQUERY"><template>
			  <el-dropdown-item command="JQUERY"><template>
  <el-button type="text" @click="open" style="color:#3b3b3b">联系我们</el-button>
</template></el-dropdown-item>
</template>
</el-dropdown-item>
</el-dropdown-menu>
</el-dropdown>
<div id="oneass">
	<el-dropdown @command="handleCommand" v-for="i in classlist">
		<span class="el-dropdown-link">
				{{i.onedata.cnname}}
		</span>
		<el-dropdown-menu slot="dropdown">
			<!--
			<el-dropdown-item command="VUE">VUE</el-dropdown-item>
			<el-dropdown-item command="ANGULAR">ANGULAR</el-dropdown-item>
			<el-dropdown-item command="JQUERY">JQUERY</el-dropdown-item>-->
			<el-dropdown-item command="VUE" v-for="x in i.twodata" :command="x.id">{{x.cnname}}</el-dropdown-item>
		</el-dropdown-menu>
	</el-dropdown>
</div>

</div>
<div id="con">
	<div id="mark"></div>
	<artlist></artlist>
</div>
</div>
</template>
<script>
	import artlist from "./blog_art"
	export default {
		name: "blogmain",
		components: {
			artlist,
		},
		data() {
			return {
				classlist: []
			}
		},
		created() {
			var that = this;
			this.$ajax.get("http://localhost:3000/api/class_list").then(function(msg) {
				that.classlist = msg.data.data
			})
		},
		methods: {
			handleCommand(a) {
				this.$children[1].twoid = a;
			},
			open() {
				this.$alert('448014001@qq.com', '邮箱', {
					confirmButtonText: '确定',
					callback: action => {}
				})
			}
		}
	}

</script>
<style>
	li {
		list-style: none;
	}
	
	a {
		color: #000;
		text-decoration: none;
	}
	
	a:hover {
		text-decoration: none;
		color: #000;
	}
	
	#blog_into {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	#blog_into .header {
		font-size: 14px;
		width: 100%;
		background: #010101;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 10px 80px;
		align-items: center;
	}
	
	#oneass {
		display: flex;
		align-items: center;
	}
	
	#blog_into .shouye {
		cursor: pointer;
		color: #069157;
	}
	
	#oneass .el-dropdown {
		cursor: pointer;
		color: #fff;
		margin-right: 50px;
	}
	
	#con {
		background: url("../../static/timg1.jpg");
		position: relative;
		height: 100%;
	}
	
	#mark {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.7);
	}

</style>
