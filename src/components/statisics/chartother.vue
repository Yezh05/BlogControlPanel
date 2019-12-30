<template>
	<el-row :gutter="20">
		<el-col :span="8">
			<div class="functionBlock">
				<div id="Chart2" ref="Chart2" style="width: auto;height: 300px;"></div>
			</div>
		</el-col>
		<el-col :span="16">
			<div class="functionBlock">
				<div id="Chart3" ref="Chart3" style="width: auto;height: 300px;"></div>
			</div>
		</el-col>
	</el-row>
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
			drawChart2: function() {
				var Chart2 = echarts.init(this.$refs.Chart2);
				Chart2.setOption({
					title: {
						text: '饼图'
					},
					series: [{
						name: '访问来源',
						type: 'pie',
						radius: '55%',
						data: [{
								value: 335,
								name: 'Vue.js'
							},
							{
								value: 310,
								name: 'Java'
							},
							{
								value: 234,
								name: 'MySQL'
							},
							{
								value: 135,
								name: '日志'
							},
							{
								value: 948,
								name: '游记'
							}
						]
					}]
				})
			},
			drawChart3: function() {
				var Chart3 = echarts.init(this.$refs.Chart3);
				Chart3.setOption({
					title: {
						text: '柱状图'
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						data: ['Vue.js', 'Java', 'MySQL', '日志', '游记']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
							name: 'Vue.js',
							type: 'bar',
							data: [320, 332, 301, 334, 390, 330, 320]
						},
						{
							name: 'Java',
							type: 'bar',
							stack: '广告',
							data: [120, 132, 101, 134, 90, 230, 210]
						},
						{
							name: 'MySQL',
							type: 'bar',
							stack: '广告',
							data: [220, 182, 191, 234, 290, 330, 310]
						},
						{
							name: '日志',
							type: 'bar',
							stack: '广告',
							data: [150, 232, 201, 154, 190, 330, 410]
						},
						{
							name: '游记',
							type: 'bar',
							data: [862, 1018, 964, 1026, 1379, 1200, 1770],
							markLine: {
								lineStyle: {
									normal: {
										type: 'dashed'
									}
								},
								data: [
									[{
										type: 'min'
									}, {
										type: 'max'
									}]
								]
							}
						}
					]
				});
			}
		},
		mounted:function(){
			
			this.drawChart2();
			this.drawChart3();
		}
		}
</script>

<style>
	
</style>
