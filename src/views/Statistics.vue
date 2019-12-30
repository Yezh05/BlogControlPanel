<template>
	<div class="statistics">

		<h1>博客统计主页</h1>
		<infocountpart></infocountpart>
		<p></p>
		<chartline></chartline>
		<p></p>
		<chartother></chartother>
		<p></p>
		<list1></list1>
	</div>

</template>
<script>
	import infocountpart from '../components/statisics/infocountpart.vue'
	import chartline from '../components/statisics/chartline.vue'
	import chartother from '../components/statisics/chartother.vue'
	import list1 from '../components/statisics/list.vue'
	//Vue.prototype.$echarts = echarts
	
	export default {
		components: {
			infocountpart,
			chartline,
			chartother,list1
		},
		data() {
			return {

			}
		},
		methods: {
			
			
		},
		mounted: function() {

		}
	}
</script>
<style>
	

	.functionBlock {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		background-color: #fff;
		padding: 20px;
	}

	
</style>
