<template>
	<div id="theart">
		<div class="header">
			  <span class="el-dropdown-link shouyeart" @click="backword">
				返回
			</span>
			<p id="arttit">{{theart.article_name}}</p>
</div>
<div id="artcon">
	<div id="marka"></div>
	<div id="content" v-html="theart.content">
		
	</div>
</div>
</div>
</template>
<script>
	export default {
		name: "theart",
		data() {
			return {
				theartid: "",
				theart: {}
			}
		},
		methods: {
			backword() {
				this.$router.go(-1);
			}
		},
		created() {
			var id = this.$route.params.artid;
			var that = this;
			this.$ajax.get("http://localhost:3000/article/getArt?id=" + id, ).then(function(msg) {
				that.theart = msg.data.data
			})
		}
	}

</script>
<style>
	li {
		list-style: none;
	}
	
	#theart {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	
	#theart .header {
		font-size: 14px;
		width: 100%;
		background: #010101;
		position: relative;
		height: 40px;
	}
	
	.shouyeart {
		cursor: pointer;
		color: #fff;
		position: absolute;
		left: 40px;
		top: 10px;
	}
	
	#artcon {
		background: url("../../static/timg1.jpg");
		position: relative;
		height: 100%;
	}
	
	#marka {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.85);
	}
	
	#arttit {
		text-align: center;
		line-height: 40px;
		color: #fff;
	}
	
	#content {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 999;
		overflow-y: auto;
		color: #fff;
		font-size: 18px;
		padding: 20px 40px;
	}

</style>
