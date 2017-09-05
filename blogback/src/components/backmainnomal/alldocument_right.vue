<template>
<div class="block" id="prolistall_right">
 <ul id="prolist">
 	<li v-for="(i,index) in docu" v-show="index<=showdoclismax&&index>=showdoclismin?true:false">
 		<span>{{i}}</span>
 		<p>
 			<a href="javscript:;" style="color:#20A0FF;font-size:14px;">编辑</a>
 			<span>/</span>
 			<el-button type="text" @click="open2" class="proallremo">删除</el-button>
 		</p>
 	</li>
 </ul>
  <el-pagination
    layout="prev, pager, next"
    :total="33" @current-change="sizepage" :page-size="8">
  </el-pagination>
</div>
</template>
<script>
	export default {
		name: "documentall",
		data() {
			return {
				showdoclismax: 7,
				showdoclismin: 0,
				docu: [
					"任小玉是一个丑逼",
					"任小玉是二个丑逼",
					"任小玉是三个丑逼",
					"任小玉是四个丑逼",
					"任小玉是五个丑逼",
					"任小玉是六个丑逼",
					"任小玉是七个丑逼",
					"任小玉是八个丑逼",
					"这是第9条文章",
					"这是第10条文章",
					"这是第11条文章",
					"这是第12条文章",
					"这是第13条文章",
					"这是第14条文章",
					"这是第15条文章",
					"这是第16条文章",
					"这是第17条文章",
					"这是第18条文章",
					"这是第19条文章",
					"这是第20条文章",
					"这是第21条文章",
					"这是第22条文章",
					"这是第23条文章",
					"这是第24条文章",
					"这是第25条文章",
					"这是第26条文章",
					"这是第27条文章",
					"这是第28条文章",
					"这是第29条文章",
					"这是第30条文章",
					"这是第31条文章",
					"这是第32条文章",
					"这是第33条文章"
				]
			}
		},
		methods: {
			sizepage(a) {
				this.showdoclismax = a * 7 + 1;
				this.showdoclismin = (a - 1) * 7 + 1;
			},
			open2() {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			}

		}
	}

</script>
<style>
	#prolist {
		height: 450px;
		box-sizing: border-box;
		padding: 0 40px;
		width: 100%;
	}
	
	#prolist li {
		width: 100%;
		padding: 15px 0;
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
	}
	
	#prolistall_right {
		flex: 1;
	}
	
	.el-pagination {
		padding-left: 40px;
	}
	
	.proallremo {
		padding: 0;
		color: #FF4949;
	}

</style>
