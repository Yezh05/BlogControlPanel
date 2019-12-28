<template>
	<div class="home">
		<div class="navbardiv" ref="navbardiv" id="navbardiv" >
		<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64"
		text-color="#fff" active-text-color="#ffd04b" style="border-right: none;">
			<!-- <el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>导航一</span>
				</template>
				<el-menu-item-group>
					<template slot="title">分组一</template>
					<el-menu-item index="1-1">选项1</el-menu-item>
					<el-menu-item index="1-2">选项2</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="分组2">
					<el-menu-item index="1-3">选项3</el-menu-item>
				</el-menu-item-group>
				<el-submenu index="1-4">
					<template slot="title">选项4</template>
					<el-menu-item index="1-4-1">选项1</el-menu-item>
				</el-submenu>
			</el-submenu> -->
			<el-menu-item index="1" v-on:click="openStatistics">
				<i class="el-icon-menu"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-menu-item index="2" v-on:click="openAbdout2">
				<i class="el-icon-menu"></i>
				<span slot="title">导航二
				</span>
				
			</el-menu-item>
			<!-- <el-menu-item index="3" disabled>
				<i class="el-icon-document"></i>
				<span slot="title">导航三</span>
			</el-menu-item>
			<el-menu-item index="4">
				<i class="el-icon-setting"></i>
				<span slot="title">导航四</span>
			</el-menu-item> -->
		</el-menu>
		</div>
		<div class="contentdiv" ref="contentdiv">
			<router-view></router-view>
		</div>
		<!-- <div id="nav">
			<router-link to="/home">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/">Login</router-link>
		</div>
		
		<img alt="Vue logo" src="../assets/logo.png"> -->
		<!-- <div>
			<p>
				If Element is successfully added to this project, you'll see an
				<code v-text="'<el-button>'"></code>
				below
			</p>
			<el-button>el-button</el-button>
		</div> -->

		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

	</div>
</template>
<script></script>
<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'
	/* import Login from '@/components/Login.vue' */
	export default {
		name: 'home',
		components: {
			/* HelloWorld, */
			/* Login */
		},
		methods: {
			openStatistics(){
				this.$router.push('/home/statistics');
			},
			openAbdout2(){
				this.$router.push('/home/about2');
			},
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			}
		},
		mounted:function(){
			this.$router.push('/home/statistics');
			this.$nextTick(()=>{
				document.querySelector("#navbardiv").style.height = ""+this.$refs.contentdiv.offsetHeight+"px";
			});
		}
	}
</script>
<style>
	body {
		margin: 0;
		padding: 0;
		height: 100%;
	}

	#nav {
		padding: 10px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
	.home{
		height: 100%;
	}
	.el-menu-vertical-demo {
		height: 100%;
		width: 200px;
	}
	.navbardiv{
		height: 100%;
		float: left;
		
	}
	.contentdiv{
		/* height: 100%; */
		width: calc(100% - 250px);
		padding: 20px;
		margin: 0 auto;
		float: left;
		text-align: center;
		background-color: #BBB;
		/* position: absolute; */
	}
</style>
