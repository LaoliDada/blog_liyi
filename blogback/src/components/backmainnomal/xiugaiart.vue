<template>
	<div id="newart">
	
<div style="margin: 20px;"></div>
<el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" ref="formLabelAlign">

	<el-form-item label="标题:" prop="biaoti" :rules="[ { required: true, message: '标题不能为空'} ]">
		<el-input v-model="formLabelAlign.biaoti"></el-input>
	</el-form-item>
	
  <el-form-item label="图片路径:" prop="img" :rules="[ { required: true, message: '路径不能为空'} ]">
		<el-input v-model="formLabelAlign.img"></el-input>
	</el-form-item>	
	<el-form-item label="预览:">
		<img :src="formLabelAlign.img" alt="" id="suoluetu">
	</el-form-item>
	<el-form-item label="作者:" prop="zuozhe" :rules="[ { required: true, message: '作者不能为空'} ]">
		<el-input v-model="formLabelAlign.zuozhe"></el-input>
	</el-form-item>
	<el-form-item label="推荐:">
		<el-radio class="radio" v-model="tuijian" label="11">是</el-radio>
  		<el-radio class="radio" v-model="tuijian" label="10">否</el-radio>
	</el-form-item>
	<el-form-item label="状态:">
		<el-radio class="radio" v-model="bloart" label="21">显示</el-radio>
  		<el-radio class="radio" v-model="bloart" label="20">隐藏</el-radio>
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
				recommend: "",
				formLabelAlign: {
					biaoti: '',
					region: '',
					zuozhe: '',
					time: "",
					daodu: "",
					region: '',
					img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504612617441&di=d4605e18495c0c0cbd226154e5574915&imgtype=0&src=http%3A%2F%2Fdn-kdt-img.qbox.me%2Fupload_files%2F2015%2F05%2F15%2FFpkcL_qjI3HNgcVePyXr-KtYV54F.jpg"
				},
				valueonesel: '',
				valuetwosel: '',
				tuijian: "10",
				bloart: "21",
				editor: "",
				oneoptid: "",
				twooptid: "",
				oneoptenname: ""
			}
		},
		mounted() {
			var that = this;
			this.$ajax.get("http://localhost:3000/article/getArticle").then(function(msg) {
				msg.data.data.forEach(function(i) {
					if (i.id == sessionStorage.getItem("xgartid")) {
						console.log(i)
						that.formLabelAlign.biaoti = i.article_name;
						that.formLabelAlign.img = i.imgsrc;
						that.formLabelAlign.zuozhe = i.editer;
						that.formLabelAlign.daodu = i.daodu;
						that.editor = i.content;
						that.tuijian = i.recommend + "";
						that.bloart = i.art_show + "";
						that.oneoptenname = i.onenname;
					}
				})
			})
		},
		methods: {
			chiassselchange(a) {
				this.twooptid = a;
			},
			gettime(fmt) {
				var _this = this;
				var date = new Date()
				var fmt = "yyyy-MM-dd hh:mm:ss"
				var o = {
					"M+": date.getMonth() + 1, //月份 
					"d+": date.getDate(), //日 
					"h+": date.getHours(), //小时 
					"m+": date.getMinutes(), //分 
					"s+": date.getSeconds(), //秒 
					"q+": Math.floor((date.getMonth() + 3) / 3), //季度 
					"S": date.getMilliseconds() //毫秒 
				};
				if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
				for (var k in o)
					if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
				_this.formLabelAlign.time = fmt;
			},
			submitForm(formName) {
				var _this = this;
				this.$refs[formName].validate((valid) => {
					if (valid) {
						_this.gettime();
						_this.$ajax.post("http://localhost:3000/article/amendArticle", {
							enname_one: _this.oneoptenname,
							onenname: _this.oneoptenname,
							article_name: _this.formLabelAlign.biaoti,
							editer: _this.formLabelAlign.zuozhe,
							content: _this.editor,
							time: _this.formLabelAlign.time,
							daodu: _this.formLabelAlign.daodu,
							imgsrc: _this.formLabelAlign.img,
							recommend: parseInt(_this.tuijian),
							art_show: parseInt(_this.bloart),
							id: sessionStorage.getItem("xgartid")
						}).then(function(msg) {
							console.log(msg)
							_this.resetForm("formLabelAlign");
							_this.$message(msg.data.msg)
						})
					} else {
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
				this.editor = ""
			}
		}

	}

</script>
<style>
	#newart {
		flex: 1;
		overflow-y: scroll;
	}
	
	.ql-editor {
		width: 600px;
		height: 400px;
	}
	
	.quill-editor {
		width: 600px;
		margin: 20px 40px;
	}
	
	.el-input,
	.el-textarea {
		width: 400px;
	}
	
	#suoluetu {
		width: 150px;
		height: 150px;
	}

</style>
