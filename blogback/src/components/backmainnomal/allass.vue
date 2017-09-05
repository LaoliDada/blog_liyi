<template>
	<div id="allass">
	<p id="tsempty" v-if="empty">当前还没有任何分类</p>
		<div v-for="(i,index) in allas_par" class="asstab">
			<ul class="list_ass">
				<li class="one_ass">
<p style="width:300px;">一级类名:{{i.cnname}}</p>
<p style="width:300px;">英文标识:{{i.enname}}</p>
<p class="contheass"><a href="javascript:;" class="gai" @click="bloupdbox(index)">修改</a><span>/</span><a href="javascript:;" class="del" @click="oneass_del(index)">删除</a></p>
				</li>
				<li v-for="(k,ind) in allas_chi[index]" class="two_ass">
					<p style="width:300px;">二级类名:{{k.cnname}}</p>
					<p style="width:300px;">英文标识:{{k.enname}}</p>
					<p class="contheass"><a href="javascript:;" class="gai" @click="bloupdboxtwo(index,ind)">修改</a><span>/</span><a href="javascript:;" class="del" @click="twoass_del(index,ind)">删除</a></p>
				</li>
			</ul>
			
		</div>
<div id="mark" v-if="updbox">
	<div id="updbox">
	<div>
		<label for="">原英文标识:</label>
		<input type="text" disabled v-model="updataoneenname">
	</div><div>
		<label for="">原分类名:</label>
		<input type="text" disabled v-model="updataonecnname">
	</div>
		<div>	
			<label for="">新英文标识:</label>
			<input type="text" v-model="updatabackoneenname">
		</div>
		<div>
			<label for="">新分类名:</label>
			<input type="text" v-model="updatabackonecnname">
		</div>
   		<div>
	    	<el-button type="success" @click="updateallright">确定</el-button>
			<el-button type="danger" @click="noneupdnone">取消</el-button>
    	</div>
	</div>
</div>
<div id="mark" v-if="updboxtwo">
	<div id="updbox">
	<div>
		<label for="">原英文标识:</label>
		<input type="text" disabled v-model="twoupdataoneenname">
	</div><div>
		<label for="">原分类名:</label>
		<input type="text" disabled v-model="twoupdataonecnname">
	</div>
		<div>	
			<label for="">新英文标识:</label>
			<input type="text" v-model="twoupdatabackoneenname">
		</div>
		<div>
			<label for="">新分类名:</label>
			<input type="text" v-model="twoupdatabackonecnname">
		</div>
   		<div>
	    	<el-button type="success" @click="updateallrighttwo">确定</el-button>
			<el-button type="danger" @click="noneupdntwo">取消</el-button>
    	</div>
	</div>
</div>
	</div>
</template>
<script>
	export default {
		name: "allass",

		data() {
			return {
				allas_par: [],
				allas_chi: [],
				empty: null,
				updbox: false,
				updboxtwo: false,
				updataoneenname: "",
				updataonecnname: "",
				updatabackoneenname: "",
				updatabackonecnname: "",
				twoupdataoneenname: "",
				twoupdataonecnname: "",
				twoupdatabackoneenname: "",
				twoupdatabackonecnname: ""
			}
		},
		mounted() {
			var _this = this;
			this.$ajax.get("http://localhost:3000/api/class_list").then(function(msg) {
				msg.data.data.forEach(function(i, ind) {
					_this.allas_par.push(i.onedata);
					_this.allas_chi.push(i.twodata);

				})
				if (msg.data.data.length == 0) {
					_this.empty = true;
				} else {
					_this.empty = false
				}
			})
		},
		methods: {
			bloupdbox(index) {
				this.updbox = true;
				this.updataoneenname = this.allas_par[index].enname;
				this.updataonecnname = this.allas_par[index].cnname;
			},
			bloupdboxtwo(index, ind) {
				this.updboxtwo = true;
				this.twoupdataoneenname = this.allas_chi[index][ind].enname;
				this.twoupdataonecnname = this.allas_chi[index][ind].cnname;
			},
			noneupdnone() {
				this.updbox = false;
				this.updataoneenname = "";
				this.updataonecnname = "";
				this.updatabackoneenname = "";
				this.updatabackonecnname = "";
			},
			noneupdntwo() {
				this.updboxtwo = false;
				this.twoupdataoneenname = "";
				this.twoupdataonecnname = "";
				this.twoupdatabackoneenname = "";
				this.twoupdatabackonecnname = "";
			},
			updateallright() {
				var _this = this;
				_this.$ajax.post("http://localhost:3000/api/amend_class_one", {
					oldenname_one: _this.updataoneenname,
					enname_one: _this.updatabackoneenname,
					cnname_one: _this.updatabackonecnname
				}).then(function(msg) {
					if (msg.data.msg === "修改表成功") {
						alert(msg.data.msg);
						_this.$router.go(0);
					} else {
						_this.updatabackoneenname = "";
						_this.updatabackonecnname = "";
						_this.$message(msg.data.msg)
					}


				})
			},
			updateallrighttwo() {
				var _this = this;
				_this.$ajax.post("http://localhost:3000/api/amend_class_two", {
					oldenname_two: _this.twoupdataoneenname,
					enname_two: _this.twoupdatabackoneenname,
					cnname_two: _this.twoupdatabackonecnname
				}).then(function(msg) {
					if (msg.data.msg === "修改表成功") {
						alert(msg.data.msg);
						_this.$router.go(0);
					} else {
						_this.updatabackoneenname = "";
						_this.updatabackonecnname = "";
						_this.$message(msg.data.msg)
					}

				})
			},
			oneass_del(indone) {
				var _this = this;
				if (confirm("确定删除吗？删除后不可恢复！")) {
					this.$ajax.post("http://localhost:3000/api/delete_one", {
						id: _this.allas_par[indone].id,
						enname_one: _this.allas_par[indone].enname
					}).then(function(msg) {
						alert(msg.data.msg);
						_this.$router.go(0);
					})
				}

			},
			twoass_del(indone, indtwo) {
				var _this = this;
				if (confirm("确定删除吗？删除后不可恢复！")) {
					this.$ajax.post("http://localhost:3000/api/delete_two", {
						oneId: _this.allas_par[indone].id, //一级分类id
						twoId: _this.allas_chi[indone][indtwo].id, //二级分类id
						enname_one: _this.allas_par[indone].enname //一级分类英文标识
					}).then(function(msg) {
						alert(msg.data.msg);
						_this.$router.go(0);
					})
				}

			}

		}
	}

</script>
<style>
	#allass {
		width: 100%;
	}
	
	#allass li {
		box-sizing: border-box;
		padding: 10px 20px;
		padding-right: 40px;
	}
	
	#allass .asstab {
		border-bottom: 3px solid #eee;
	}
	
	.one_ass {
		background: #bfcbd9;
		display: flex;
		color: #1F2D3D;
	}
	
	.two_ass {
		display: flex;
		padding: 10px;
		background: #eee;
		color: #475669;
		font-size: 14px;
	}
	
	.contheass {
		flex: 1;
		display: flex;
		justify-content: flex-end;
	}
	
	#allass a.del {
		color: #FF4949;
		font-size: 16px;
	}
	
	#allass a.gai {
		color: #475669;
		font-size: 16px;
	}
	
	#tsempty {
		padding: 20px 0;
		font-size: 20px;
		color: #bbb;
		text-align: center;
	}
	
	#mark {
		left: 0px;
		top: 0px;
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 999;
		background: rgba(0, 0, 0, 0.5);
	}
	
	#updbox {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		background: #fff;
		z-index: 9999;
		width: 300px;
		height: 400px;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 25px 10px;
		box-sizing: border-box;
		align-items: center;
	}
	
	#updbox label {
		display: inline-block;
		width: 100px;
	}
	
	#updbox input {
		height: 30px;
		border-radius: 8px;
		border: 1px solid #ccc;
		outline: none;
	}

</style>
