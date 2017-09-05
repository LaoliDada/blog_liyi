<template>
	<div id="addoneass">
	<h3 class="addassh">增加一级分类</h3>
		<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
	<el-form-item label="分类名称:" prop="onecn" :rules="[
      { required: true, message: '中文名不能为空'}
    ]">
		<el-input type="age" v-model.number="numberValidateForm.onecn" auto-complete="off" class="addassinp"></el-input>
	</el-form-item>
	<el-form-item label="英文标识:" prop="oneen" :rules="[
      { required: true, message: '英文标识不能为空'}
    ]">
		<el-input type="age" v-model.number="numberValidateForm.oneen" auto-complete="off" class="addassinp"></el-input>
	</el-form-item>
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
					onecn: '',
					oneen: "",
					twocn: "",
					twoen: ""
				}
			};
		},
		methods: {
			submitForm(formName) {
				var _this = this;
				this.$refs[formName].validate((valid) => {
					if (valid) {
						_this.$ajax.post("http://localhost:3000/api/add_class_one", {
							cnname_one: _this.numberValidateForm.onecn,
							enname_one: _this.numberValidateForm.oneen,
							cnname_two: _this.numberValidateForm.twocn,
							enname_two: _this.numberValidateForm.twoen
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
			}
		}
	}

</script>
<style>
	#addoneass {
		padding: 0 30px;
	}
	
	.addassinp {
		width: 250px !important;
		box-sizing: border-box;
	}
	
	.addassh {
		padding: 15px 20px;
	}

</style>
