<template>
	<div id="artlist">
		<dl v-for="(i,index) in artlist" v-if="index<(blo+1)*6&&index>=(blo)*6?true:false">
			<a :href="'#/theart/'+i.id">
				<dt><img :src="i.imgsrc" alt=""></dt>
			<dd>
				<h4 class="art_tit">{{i.tit}}</h4>
				<p class="art_daodu">
				{{i.daodu}}
				</p>
				<p class="art_zuozhe">作者：{{i.editer}}</p>
				<p class="art_time">{{i.TIME}}</p>
			</dd>
			</a>
		</dl>
		<div class="block">
		  <el-pagination
			@current-change="huanye"
			layout="prev, pager, next"
			:total="artlist.length"
			:page-size="6">
		  </el-pagination>
		</div>
	</div>	
</template>
<script>
	export default {
		name: "artlist",
		data() {
			return {
				blo: 0,
				artlist: [],
				twoid: '1',
				a: ""
			}
		},
		methods: {
			huanye(a) {
				this.blo = a - 1
			}
		},
		watch: {
			twoid: function(val) {
				var that = this;
				this.$ajax.get("http://localhost:3000/article/getArticle").then(function(msg) {
					if (msg.data.data.length > 0) {
						that.artlist = [];
						msg.data.data.forEach(function(i) {
							if (that.twoid == i.twoId) {

								that.artlist.push(i)
							}

						})
					}
				})
			}
		},
		created() {
			var _this = this;
			this.$ajax.get("http://localhost:3000/article/getArticle").then(function(msg) {
				_this.artlist = msg.data.data
			})
		}
	}

</script>
<style>
	#artlist {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 99;
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		justify-content: space-between;
	}
	
	#artlist dl {
		width: 250px;
		height: 380px;
		z-index: 99;
		background: #fff;
		position: relative;
		margin: 0 80px;
		margin-top: 50px;
		cursor: pointer;
	}
	
	#artlist dl dt {
		width: 100%;
		height: 150px;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
		background: #495871;
	}
	
	#artlist dl dd {
		padding: 20px;
		box-sizing: border-box;
	}
	
	#artlist dl dd h4 {
		font-size: 16px;
		padding-bottom: 20px;
	}
	
	#artlist dl dd .art_daodu {
		font-size: 12px;
		overflow: hidden;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
		overflow: hidden;
	}
	
	#artlist dl dd .art_zuozhe {
		position: absolute;
		left: 20px;
		bottom: 50px;
		color: #0a8350;
	}
	
	#artlist dl dd .art_time {
		position: absolute;
		left: 20px;
		bottom: 20px;
		color: #aaa;
	}
	
	#artlist dl dt img {
		display: block;
		margin: auto;
	}
	
	#artlist .block {
		margin-top: 10px;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	
	#artlist .block .active {
		background: rgba(0, 0, 0, 0.1);
		border: none;
	}

</style>
