<template>
	<div class="statistics">

		<h1>博客统计主页</h1>
		<div class="functionBlock">
			<el-row :gutter="20">
				<el-col :span="6">
					<div class="grid-content bg-purple">
						<el-row>
							<el-col :span="12">
								<div style="border-radius: 5px;background-color: #fff;margin: 20px;"> <i class="el-icon-user-solid" id="el-icon" style="font-size: 30px;"></i></div>
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
								<div style="border-radius: 5px;background-color: #fff;margin: 20px;"> <i class="el-icon-edit" id="el-icon" style="font-size: 30px;"></i></div>
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
			<div id="Chart1" ref="Chart1" style="width: 100%;height: 500px;"></div>
		</div>
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
			}
		},
		mounted: function(){
			this.drawChart1();
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

	.textblock {
		width: 100%;
		height: 100%;
		padding-top: 20px;
		padding-bottom: 20px;
		/* background-color: #42B983; */
		/*   */
	}
</style>
