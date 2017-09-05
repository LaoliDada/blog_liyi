<template>
  <div class="hello">
  <div class="mark"></div>
  	<div id="from">
  	<h4 id="pleaselogin">请登陆</h4>
  		<input type="text" id="user" placeholder="请输入用户名" v-model="username" @blur="useyz">
  		<p>{{useblo}}</p>
  		<input type="password" id="psw" placeholder="请输入密码" v-model="pwd" @blur="pwdyz">
  		<p>{{pwdblo}}</p>
  		<el-button type="success" id="log" @click="login">登陆</el-button>
  	</div>
  </div>
</template>
<script>
	export default {
		name: 'login',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				username: "",
				pwd: "",
				useblo: "",
				pwdblo: ""
			}
		},
		methods: {
			login() {
				var _this = this;
				if (this.username != "" && this.pwd != "") {
					this.$ajax.post("http://localhost:3000/api", {
						username: _this.username,
						pwd: _this.pwd
					}).then(function(msg) {
						console.log(msg.data)
						if (msg.data.code == "1003") {
							_this.$message({
								message: '用户名不存在',
								type: 'error'
							});
						} else if (msg.data.code == "1002") {
							_this.$message({
								message: '密码错误',
								type: 'error'
							});
						} else if (msg.data.code == "1001") {
							_this.$message({
								message: "登陆成功",
								type: "success"
							});
							sessionStorage.setItem("username", _this.username);
							_this.$router.push("/back")
						}

					})
				}
			},
			useyz() {
				if (this.username === "") {
					this.useblo = "用户名不能为空"
				} else {
					this.useblo = ""
				}
			},
			pwdyz() {
				if (this.pwd === "") {
					this.pwdblo = "密码不能为空"
				} else {
					this.pwdblo = ""
				}
			}

		}
	}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello {
		width: 100%;
		height: 100%;
		background: url('http://www.pp3.cn/uploads/20120428BZ-YB/54q.jpg') no-repeat;
		background-size: 100% 100%;
	}
	
	.mark {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.6)
	}
	
	#from {
		width: 400px;
		height: 300px;
		border: 1px solid #ccc;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 10px;
	}
	
	h4 {
		font-weight: normal;
		text-align: center;
		font-size: 24px;
		padding: 10px 0;
	}
	
	input {
		width: 80%;
		height: 40px;
		display: block;
		margin: 0 auto;
		border-radius: 15px;
		border: none;
		box-sizing: border-box;
		padding: 0 10px;
		outline: none;
	}
	
	p {
		width: 70%;
		margin: 3px auto;
		height: 20px;
		line-height: 20px;
		color: #f00;
	}
	
	#log {
		width: 80%;
		display: block;
		margin: 20px auto;
	}
	
	#pleaselogin {
		padding: 20px 0;
	}

</style>
