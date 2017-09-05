<template>
	<div id="newart">
<div style="margin: 20px;"></div>
<el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" ref="formLabelAlign">
	<el-form-item label="标题:" prop="biaoti" :rules="[ { required: true, message: '标题不能为空'} ]">
		<el-input v-model="formLabelAlign.biaoti"></el-input>
	</el-form-item>
	 <el-form-item label="一级分类" prop="region">
    <el-select v-model="valueonesel" clearable placeholder="请选择">
    <el-option
      v-for="item in optionsonesel"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
  <el-form-item label="二级分类" prop="region">
    <el-select v-model="valuetwosel" clearable placeholder="请选择">
    <el-option
      v-for="item in optionstwosel"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </el-form-item>
	<el-form-item label="作者:" prop="zuozhe" :rules="[ { required: true, message: '作者不能为空'} ]">
		<el-input v-model="formLabelAlign.zuozhe"></el-input>
	</el-form-item>
	<el-form-item label="推荐:">
		<el-radio class="radio" v-model="tuijian" label="yesgotui">是</el-radio>
  		<el-radio class="radio" v-model="tuijian" label="nogotui">否</el-radio>
	</el-form-item>
	<el-form-item label="状态:">
		<el-radio class="radio" v-model="bloart" label="bloartrad">显示</el-radio>
  		<el-radio class="radio" v-model="bloart" label="noneartrad">隐藏</el-radio>
	</el-form-item>
   <el-form-item label="日期" prop="region">
    <el-date-picker
      v-model="formLabelAlign.time"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1">
    </el-date-picker>
	</el-form-item>
	<el-form-item label="导读:" prop="daodu" :rules="[ { required: true, message: '导读不能为空'} ]">
	<el-input
  type="textarea"
  :autosize="{ minRows: 3, maxRows: 6}"
  placeholder="请输入内容"
  v-model="formLabelAlign.daodu">
</el-input>
</el-form-item>
<quill-editor v-model="editor">
	
</quill-editor>

	<el-form-item>
		<el-button type="primary" @click="submitForm('formLabelAlign')">提交</el-button>
		<el-button @click="resetForm('formLabelAlign')">重置</el-button>
	</el-form-item>
</el-form>

	</div>
</template>
<script>
	export default {
		data() {
			return {
				labelPosition: 'right',
				formLabelAlign: {
					biaoti: '',
					region: '',
					zuozhe: '',
					time: "",
					daodu: "",
					region: ''
				},
				optionsonesel: [],
				valueonesel: '',
				optionstwosel: [],
				valuetwosel: '',
				tuijian: "nogotui",
				bloart: "bloartrad",
				editor: "",
				pickerOptions1: {
					shortcuts: [{
						text: '今天',
						onClick(picker) {
							picker.$emit('pick', new Date());
						}
					}, {
						text: '昨天',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24);
							picker.$emit('pick', date);
						}
					}, {
						text: '一周前',
						onClick(picker) {
							const date = new Date();
							date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', date);
						}
					}]
				}
			}
		},
		methods: {
			submitForm(formName) {
				var _this = this;
				this.$refs[formName].validate((valid) => {
					if (valid) {
						console.log(1);
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
	#newart {
		flex: 1;
		overflow-y: scroll;
	}
	
	.quill-editor {
		width: 800px;
		height: 400px;
	}
	
	.el-input,
	.el-textarea {
		width: 400px;
	}

</style>
