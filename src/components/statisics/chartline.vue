<template>
	
	<div class="functionBlock">
		<div id="Chart1" ref="Chart1" style="width: auto;height: 300px;"></div>
	</div>
	
</template>

<script>
	import echarts from 'echarts'
	export default {
		components: {
			
		},
		data() {
			return {
				echarts: echarts
			}
		},
		methods: {
			drawChart1: function() {
				var Chart1 = echarts.init(this.$refs.Chart1);
				Chart1.setOption({
					title: {
						text: '折线图'
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
									type: 'cross',
							label: {
							backgroundColor: '#6a7985'
							}
							}
					},
					legend: {
						data: ['用户数量', '博客数量']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					toolbox: {
						feature: {
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ["12/08","12/09","12/10","12/11","12/12","12/13","12/14","12/15","12/16","12/17","12/18","12/19","12/20","12/21","12/22","12/23","12/24","12/25","12/26","12/27"]
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							name: '用户数量',
							type: 'line',
							stack: '总量',
							areaStyle: {},
							data: ["7","6","1","22","16","0","5","0","0","8","0","0","4","2","0","7","0","1","0","0"]
						},
						{
							name: '博客数量',
							type: 'line',
							stack: '总量',
							areaStyle: {},
							data: ["36","18","35","32","3","6","3","10","10","20","25","19","0","31","12","17","0","28","25","39"]
						}
					]
				});
			},
		},
		mounted: function () {
			this.drawChart1();
		}
		}
</script>

<style>
	
</style>
