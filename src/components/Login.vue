<template>
	<div class="bgdiv">
		<div class="loginform">
			<el-input placeholder="请输入账号" prefix-icon="el-icon-user" v-model="inputUsername" style="margin-top: 20px;"></el-input>
			<el-input placeholder="请输入密码" prefix-icon="el-icon-lock" v-model="inputPassword" style="margin-top: 10px;" @keydown.enter.native="handleLogin()"></el-input>
			<el-button type="success" v-on:click="handleLogin" style="margin-top: 20px;width: 100%;">登录</el-button>
		</div>
	</div>
</template>

<script>
	import Cookies from 'js-cookie';
	Cookies.set('username', "");
	export default {
		name: 'login',
		data: function() {
			return {
				inputUsername: "",
				inputPassword: ""
			}
		},
		methods: {
			handleLogin: function() {
				if ('' == this.inputPassword || '' == this.inputUsername) {
					alert('请输入用户名和密码');
				} else {
					if ('1' == this.inputPassword && 'admin' == this.inputUsername) {
						Cookies.remove('username');
						Cookies.set('username', this.inputUsername);
						this.$router.push({
							path: '/home'
						});
					} else {
						alert('用户名或密码错误');
					}
				}
			}
		},
		components: {

		}
	}
</script>

<style>
	.loginform {
		background: #fff;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
		width: 350px;
		text-align: center;
		margin: 0 auto;
		margin-top: 30vh;
		padding: 20px;
	}
</style>
