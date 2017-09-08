<template>
<div>
	<div class="header">
		<div class="container">
			<div class="header_top">
				<div class="logo">
				  <a href="index.html"><img src="../../static/logo.png" alt=""></a>
				</div>
		  		<div class="menu">
					<ul class="nav" id="nav">
					  <li class="current"><a href="#home" class="scroll">首页</a></li>
					  <li><a href="#into" class="scroll">进入博客</a></li>
					  <li><a href="#about" class="scroll">关于本站</a></li>
					  <li><a href="javascript:;" class="scroll" @click="open">联系我们</a></li>
					</ul>
				</div>
	  			<div class="clearfix"> </div>
	  		  </div>
	  		  <div class="banner">
	  			 <h2>Blogger</h2>
	  			 <h1>Leone</h1>
	  		  </div>
		 </div>
	  </div>
	  <!----end-header---->
	  <div class="main">
	  	<div class="content_top" id="who">
	  		<div class="container">
	  			<div class="top_box">
	  				<h2>What blog is this?</h2>
	  				<p>本博客旨在为了给所有热爱学习新技术的前端工作者一个学习的平台，本站不定时更新各种关于前端的知识<br>本站所有文章只供学习与交流，不可作为商业用途，转载文章请标明出处</p>
	  			</div>
	  		</div>
	  </div>
     </div>
    </div>
</template>
<script>
	export default {
		name: "blogmain",
		methods: {
			open() {
				this.$alert('448014001@qq.com', '邮箱', {
					confirmButtonText: '确定',
					callback: action => {}
				})
			}
		},
	}

</script>
<style>
	h4,
	h5,
	h6,
	h1,
	h2,
	h3 {
		margin-top: 0;
	}
	
	ul,
	ol {
		margin: 0;
	}
	
	p {
		margin: 0;
	}
	
	html,
	body {
		font-family: 'PT Sans Caption', sans-serif;
		font-size: 100%;
	}
	
	body a {
		transition: 0.5s all;
		-webkit-transition: 0.5s all;
		-moz-transition: 0.5s all;
		-o-transition: 0.5s all;
		-ms-transition: 0.5s all;
	}
	/*-----start-header----*/
	
	.header {
		background: url('../../static/timg.jpg')no-repeat center top;
		background-size: 100% 100%;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		background-position: center;
		position: relative;
	}
	
	.header_top {
		margin-top: 2em;
	}
	
	.logo {
		float: left;
	}
	
	.menu {
		float: right;
		margin-top: 10px;
	}
	
	.menu li {
		display: inline-block;
	}
	
	.menu li:first-child {
		margin-left: 0;
	}
	
	.menu li a {
		display: block;
		font-size: 0.85em;
		color: #fff;
		-webkit-transition: all 0.3s ease;
		-moz-transition: all 0.3s ease;
		-o-transition: all 0.3s ease;
		transition: all 0.3s ease;
		text-transform: uppercase;
		padding: 10px;
	}
	
	#nav .current a {
		color: #F0D4A8;
		-webkit-transition: all 0.3s ease;
		-moz-transition: all 0.3s ease;
		-o-transition: all 0.3s ease;
		transition: all 0.3s ease;
	}
	
	.menu li a:hover,
	.menu li.active a {
		color: #F0D4A8;
	}
	
	.toggleMenu {
		display: none;
		padding: 4px 5px 0px 5px;
		border-radius: 2em;
		-webkit-border-radius: 2em;
		-moz-border-radius: 2em;
		-o-border-radius: 2em;
	}
	
	.nav:before,
	.nav:after {
		content: " ";
		display: table;
	}
	
	.nav:after {
		clear: both;
	}
	
	.nav ul {
		list-style: none;
	}
	
	.banner {
		text-align: center;
		padding: 25em 0 5em;
	}
	
	.banner h1 {
		color: #fff;
		font-family: 'Candal', sans-serif;
		font-size: 8em;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}
	
	.banner h2 {
		color: #fff;
		font-family: 'Candal', sans-serif;
		font-size: 4em;
		text-transform: uppercase;
	}
	/*--content--*/
	
	#who {
		margin: 0;
		padding: 0;
	}
	
	.top_box {
		text-align: center;
		padding: 0em 0 5em;
	}
	
	.top_box h2 {
		color: #333;
		font-size: 2em;
		font-weight: bold;
		text-transform: uppercase;
	}
	
	.top_box p {
		color: #999;
		font-size: 1em;
		line-height: 1.8em;
		margin-top: 1em;
	}
	
	.content_top {
		padding: 5em 0 8em;
	}
	
	.poll {
		margin-bottom: 2em;
	}
	
	.poll_desc {
		color: #777;
		font-size: 1em;
	}
	
	.skills {
		width: 100%;
		margin: 10px 0;
		border: 1px solid #dcd9ae;
		height: 20px;
	}
	
	.skills>div {
		height: 100%;
		display: block;
		background-color: #dcd9ae;
	}
	
	.contenttop_right h3 {
		color: #333;
		text-transform: uppercase;
		font-size: 1.7em;
		margin-bottom: 1.5em;
		font-weight: bold;
	}
	
	.button {
		text-align: center;
		margin-top: 4em;
	}
	
	.con-button {
		color: white;
		background: #9f7a40;
		-webkit-box-shadow: 3px 3px 0px 0px #c7c7c7;
		-moz-box-shadow: 3px 3px 0px 0px #c7c7c7;
		box-shadow: 3px 3px 0px 0px #c7c7c7;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		font-size: 1.3em;
		padding: 18px 35px;
		font-weight: bold;
	}
	
	.con-button:hover {
		text-decoration: none;
		background: #8e7231;
		color: #fff;
	}
	
	.top_box {
		padding: 0;
		padding-top: 2.5rem;
	}

</style>
