<template>
	<div class="statistics">

		<h1>博客统计主页</h1>
		<div class="functionBlock">
			<el-row :gutter="20">
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<el-row>
							<el-col :span="12">
								<div class="icondiv" style="border-radius: 5px;background-color: #fff;margin: 20px;"> <i class="el-icon-user-solid" id="el-icon"
									style="font-size: 30px;"></i></div>
							</el-col>
							<el-col :span="12" style="font-size: 30px;">
								<div class="textblock">
									<el-row>
										<div>用户数</div>
									</el-row>
									<el-row>
										<div>
											<countTo :startVal='0' :endVal='50' :duration='3000'></countTo>
											<!-- <countTo :startVal='startVal' :endVal='endVal' :duration='duration'></countTo> -->
										</div>
									</el-row>
								</div>
							</el-col>
						</el-row>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<el-row>
							<el-col :span="12">
								<div style="border-radius: 5px;background-color: #fff;margin: 20px;"> <i class="el-icon-edit" id="el-icon"
									style="font-size: 30px;"></i></div>
							</el-col>
							<el-col :span="12" style="font-size: 30px;">
								<div class="textblock">
									<el-row>
										<div>博客数</div>
									</el-row>
									<el-row>
										<div>
											<countTo :startVal='0' :endVal='2333' :duration='3000'></countTo>
											<!-- <countTo :startVal='startVal' :endVal='endVal' :duration='duration'></countTo> -->
										</div>
									</el-row>
								</div>
							</el-col>
						</el-row>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<el-row>
							<el-col :span="12">
								<div style="border-radius: 5px;background-color: #fff;margin: 20px;"> <i class="el-icon-s-flag" id="el-icon"
									style="font-size: 30px;"></i></div>
							</el-col>
							<el-col :span="12" style="font-size: 30px;">
								<div class="textblock">
									<el-row>
										<div>主题数</div>
									</el-row>
									<el-row>
										<div>
											<countTo :startVal='0' :endVal='150' :duration='3000'></countTo>
											<!-- <countTo :startVal='startVal' :endVal='endVal' :duration='duration'></countTo> -->
										</div>
									</el-row>
								</div>
							</el-col>
						</el-row>
					</div>
				</el-col>
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<el-row>
							<el-col :span="12">
								<div style="border-radius: 5px;background-color: #fff;margin: 20px;"> <i class="el-icon-s-opportunity" id="el-icon"
									style="font-size: 30px;"></i></div>
							</el-col>
							<el-col :span="12" style="font-size: 30px;">
								<div class="textblock">
									<el-row>
										<div>访问数</div>
									</el-row>
									<el-row>
										<div>
											<countTo :startVal='0' :endVal='3210' :duration='3000'></countTo>
											<!-- <countTo :startVal='startVal' :endVal='endVal' :duration='duration'></countTo> -->
										</div>
									</el-row>
								</div>
							</el-col>
						</el-row>
					</div>
				</el-col>
			</el-row>
		</div>
		<p></p>
		<div class="functionBlock">
			<div id="Chart1" ref="Chart1" style="width: auto;height: 500px;"></div>
		</div>
		<p></p>
		<el-row :gutter="20">
			<el-col :span="12">
				<div class="functionBlock">
					<div id="Chart2" ref="Chart2" style="width: auto;height: 500px;"></div>
				</div>
			</el-col>
			<el-col :span="12">
				<div class="functionBlock">
					<div id="Chart3" ref="Chart3" style="width: auto;height: 500px;"></div>
				</div>
			</el-col>
		</el-row>
	</div>

</template>
<script>
	import countTo from 'vue-count-to';
	import echarts from 'echarts'
	//Vue.prototype.$echarts = echarts

	export default {
		components: {
			countTo
		},
		data() {
			return {

			}
		},
		methods: {
			drawChart1: function() {
				var Chart1 = echarts.init(this.$refs.Chart1);
				Chart1.setOption({
					title: {
						text: '折线图堆叠'
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
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
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
							name: '邮件营销',
							type: 'line',
							stack: '总量',
							data: [120, 132, 101, 134, 90, 230, 210]
						},
						{
							name: '联盟广告',
							type: 'line',
							stack: '总量',
							data: [220, 182, 191, 234, 290, 330, 310]
						},
						{
							name: '视频广告',
							type: 'line',
							stack: '总量',
							data: [150, 232, 201, 154, 190, 330, 410]
						},
						{
							name: '直接访问',
							type: 'line',
							stack: '总量',
							data: [320, 332, 301, 334, 390, 330, 320]
						},
						{
							name: '搜索引擎',
							type: 'line',
							stack: '总量',
							data: [820, 932, 901, 934, 1290, 1330, 1320]
						}
					]
				});
			},
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
								value: 235,
								name: '视频广告'
							},
							{
								value: 274,
								name: '联盟广告'
							},
							{
								value: 310,
								name: '邮件营销'
							},
							{
								value: 335,
								name: '直接访问'
							},
							{
								value: 400,
								name: '搜索引擎'
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
						data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
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
							name: '直接访问',
							type: 'bar',
							data: [320, 332, 301, 334, 390, 330, 320]
						},
						{
							name: '邮件营销',
							type: 'bar',
							stack: '广告',
							data: [120, 132, 101, 134, 90, 230, 210]
						},
						{
							name: '联盟广告',
							type: 'bar',
							stack: '广告',
							data: [220, 182, 191, 234, 290, 330, 310]
						},
						{
							name: '视频广告',
							type: 'bar',
							stack: '广告',
							data: [150, 232, 201, 154, 190, 330, 410]
						},
						{
							name: '搜索引擎',
							type: 'bar',
							data: [862, 1018, 964, 1026, 1679, 1600, 1570],
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
						},
						{
							name: '百度',
							type: 'bar',
							barWidth: 5,
							stack: '搜索引擎',
							data: [620, 732, 701, 734, 1090, 1130, 1120]
						},
						{
							name: '谷歌',
							type: 'bar',
							stack: '搜索引擎',
							data: [120, 132, 101, 134, 290, 230, 220]
						},
						{
							name: '必应',
							type: 'bar',
							stack: '搜索引擎',
							data: [60, 72, 71, 74, 190, 130, 110]
						},
						{
							name: '其他',
							type: 'bar',
							stack: '搜索引擎',
							data: [62, 82, 91, 84, 109, 110, 120]
						}
					]
				});
			}
		},
		mounted: function() {
			this.drawChart1();
			this.drawChart2();
			this.drawChart3();
		}
	}
</script>
<style>
	.el-row {
		margin-bottom: 0px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}

	.functionBlock {
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		background-color: #fff;
		padding: 20px;
	}

	#el-icon {
		width: 100%;
		height: 100%;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	#el-icon:hover{
		background-color: #2C3E50;
		border-radius: 5px;
		color: #FFFFFF;
	}
	.textblock {
		width: 100%;
		height: 100%;
		padding-top: 20px;
		padding-bottom: 20px;
		/* background-color: #42B983; */
		/*   */
	}
</style>
