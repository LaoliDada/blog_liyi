<template>
	<div id="about">
		<div class="header">
		<el-dropdown>
			  <span class="el-dropdown-link shouye">
				blog to liyi
			  </span>
		  	<el-dropdown-menu slot="dropdown">
			<router-link to="/" tag="p"> <el-dropdown-item command="VUE">返回首页</el-dropdown-item></router-link>
			   <router-link to="/into" tag="p"><el-dropdown-item command="ANGULAR">文章列表</el-dropdown-item></router-link>
			  <el-dropdown-item command="JQUERY"><template>
  <el-button type="text" @click="open" style="color:#3b3b3b">联系我们</el-button>
</template></el-dropdown-item>
</el-dropdown-menu>
</el-dropdown>
<div class="thepage">关于本站</div>
</div>

<div id="con">
	<div class="flv">
		<h3 id="aboutcon">关于本站：</h3>
		<ul>
			<li>1. 本站转载的文章，均会标示出处，只有部分无法溯源的文章（主要来源于早期本地保存收藏内容）可能没有标示，这些文章版权为原作者所有，如果涉及版权等异议问题，可以随时EMAIL联系本站删除。</li>
			<li>2. 除特别注明外全部为原创文章，谨供网友学习、研究和交流参考使用，本站不对文章的使用后果或潜在后果负责，且保留随时删除或修改的权利。</li>
			<li>3. 仅欢迎遵守署名、非商业用途和保持一致的转载或使用，未经本站授权严禁作为商业用途使用，谢绝所有不遵守署名、非商业用途和保持一致的转载或使用。对非法转载行为（包括但不限于去链接、去水印、伪原创、去署名等），本站保留一切追究责任的权利。</li>
			<li>4. 本站上涉及各公司标识、徽标以及专利名词，其版权均归原注册版权人所有，本站仅作积极方面的宣传和倡导，如系统或软件权利持有人认为侵权或可能造成侵权，请联系本站邮箱，本站收到后会第一时间删除相关内容。</li>
		</ul>
	</div>
	<div id="mark"></div>
</div>
</div>
</template>
<script>
	export default {
		name: "about",
		methods: {
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
	
	#about {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	#about .header {
		font-size: 14px;
		width: 100%;
		background: #010101;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 10px 80px;
		align-items: center;
	}
	
	.shouye {
		cursor: pointer;
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
	
	.flv {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 999;
		color: #fff;
		padding: 50px 80px;
	}
	
	.flv li {
		margin: 20px 0;
	}
	
	.thepage {
		color: #fff;
	}
	
	#aboutcon {
		z-index: 99;
		color: #fff;
		text-align: center;
	}

</style>
