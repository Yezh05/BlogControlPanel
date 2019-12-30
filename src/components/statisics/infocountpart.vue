<template>
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
</template>

<script>
	import countTo from 'vue-count-to';
	export default {
		components: {
			countTo
		},
		data() {
			return {
				
			}
		}
		}
</script>

<style scoped="scoped">
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
		transition: all 0.5s ease-out;
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
