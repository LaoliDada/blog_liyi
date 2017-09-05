<template>
	<div id="addtwoass">
	<el-select v-model="value" placeholder="请选择一级分类" @change="parassselchange">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
		<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
	<h3 class="addassh">增加二级分类</h3>
	<el-form-item label="分类名称:" prop="twocn" :rules="[
      { required: true, message: '中文名不能为空'}
    ]">
		<el-input type="age" v-model.number="numberValidateForm.twocn" auto-complete="off" class="addassinp"></el-input>
	</el-form-item>
	<el-form-item label="英文标识:" prop="twoen" :rules="[
      { required: true, message: '英文标识不能为空'}
    ]">
		<el-input type="age" v-model.number="numberValidateForm.twoen" auto-complete="off" class="addassinp"></el-input>
	</el-form-item>
	<el-form-item>
		<el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
		<el-button @click="resetForm('numberValidateForm')">重置</el-button>
	</el-form-item>
</el-form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				numberValidateForm: {
					twocn: "",
					twoen: ""
				},
				options: [],
				value: "",
				arr: []
			};
		},
		mounted() {
			var _this = this;
			this.$ajax.get("http://localhost:3000/api/class_list").then(function(mag) {
				mag.data.data.forEach(function(i) {
					_this.options.push({
						value: i.onedata.id,
						label: i.onedata.cnname
					})
				})
			})
		},
		methods: {
			submitForm(formName) {
				var _this = this;
				this.$refs[formName].validate((valid) => {
					if (valid) {
						_this.$ajax.post("http://localhost:3000/api/add_two_class", {
							oneId: _this.value,
							enname_two: _this.numberValidateForm.twocn,
							cnname_two: _this.numberValidateForm.twoen
						}).then(function(msg) {
							_this.$message(msg.data.msg);
						})
					} else {
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			parassselchange(msg) {
				console.log(msg);
			}
		}
	}

</script>
<style>
	#addtwoass {
		padding: 30px;
	}
	
	.addassinp {
		width: 250px !important;
		box-sizing: border-box;
	}
	
	.addassh {
		padding: 15px 20px;
	}
	
	#addtwoass .el-select {
		margin-left: 20px;
	}

</style>
