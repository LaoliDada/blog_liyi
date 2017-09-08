<template>
<div class="block" id="prolistall_right">
<el-table
    :data="tableData2"
    height="600"
    style="width: 950px;"
    :row-class-name="tableRowClassName" id="prolist">
    <el-table-column
      prop="tit"
      label="标题"
      width="240">
    </el-table-column>
    <el-table-column
      prop="zuozhe"
      label="作者"
      width="240">
    </el-table-column>
    <el-table-column
      prop="time"
      label="时间"
      width="300">
    </el-table-column>
    <el-table-column
      prop="caozuo"
      label="操作">
      <template scope="scope">
          <a href='javascript:;' class="gai" @click="xgart">编辑</a><span>/</span><a href='javascript:;' class="del" @click="open2">删除</a>
      </template>
</el-table-column>
</el-table>
</div>
</template>
<script>
	export default {
		name: "documentall",
		data() {
			return {
				showdoclismax: 7,
				showdoclismin: 0,
				tableData2: [],
				theind: 0
			}
		},
		mounted() {
			var _this = this;
			this.$ajax.get("http://localhost:3000/article/getArticle").then(function(msg) {
				msg.data.data.forEach(function(i, ind) {
					_this.tableData2.push({
						tit: i.article_name,
						zuozhe: i.editer,
						time: i.TIME,
						ind: ind,
						theid: i.id,
						enname_one: i.onenname,
						daodu: i.daodu,
						imgsrc: i.imgsrc,
						recommend: i.recommend,
						art_show: i.art_show
					})
				})
			})
		},

		methods: {
			tableRowClassName(row, index) {
				if (index % 2 == 0) {
					return 'info-row';
				} else if (index % 2 == 1) {
					return 'positive-row';
				}
				return '';
			},
			xgart(a) {
				var that = this;
				that.theind = a.path[3].rowIndex;
				sessionStorage.setItem("xgartid", that.tableData2[that.theind].theid);
				this.$router.push("/back/xgart")
			},
			open2(ind) {
				var that = this;
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					that.theind = ind.path[3].rowIndex;

					that.$ajax.post("http://localhost:3000/article/deleteOne", {
						enname_one: that.tableData2[that.theind].enname_one,
						id: that.tableData2[that.theind].theid
					}).then(function(msg) {

						alert(msg.data.msg)
						that.$router.go(0);
					})
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
	.el-table .info-row {
		background: #c9e5f5;
	}
	
	.el-table .positive-row {
		background: #e2f0e4;
	}
	
	a.gai {
		color: #475669;
		font-size: 16px;
	}
	
	a.del {
		color: #FF4949;
		font-size: 16px;
	}
	/*#prolist { height: 450px; box-sizing: border-box; padding: 0 40px; width: 100%; } #prolist li { width: 100%; padding: 15px 0; border-bottom: 1px solid #ccc; display: flex; justify-content: space-between; } #prolistall_right { flex: 1; } .el-pagination { padding-left: 40px; } .proallremo { padding: 0; color: #FF4949; }*/

</style>
