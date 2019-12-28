<template>
	<div class="statistics">
		
		<h1>This is an statistics page</h1>
		<div class="functionBlock">
		<el-row :gutter="20">
			<el-col :span="6">
				<div class="grid-content bg-purple">
					<el-row >
						<el-col :span="12"><div style="border-radius: 5px;background-color: #fff;margin: 20px;"> <i class="el-icon-edit" id="el-icon" style="font-size: 30px;" ></i></div></el-col>
						<el-col :span="12"></el-col>
					</el-row>			
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple">
					<el-row >
						<el-col :span="12"><div style="border-radius: 5px;background-color: #fff;margin: 20px;"> <i class="el-icon-edit" id="el-icon" style="font-size: 30px;" ></i></div></el-col>
						<el-col :span="12">
							<div id="el-icon">
							<el-row >AAA</el-row>
							<el-row >BBB</el-row> 
							</div>
						</el-col>
					</el-row>	
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple">
					<el-row >
						<el-col :span="12"><div style="border-radius: 5px;background-color: #fff;margin: 20px;"> <i class="el-icon-edit" id="el-icon" style="font-size: 30px;" ></i></div></el-col>
						<el-col :span="12"></el-col>
					</el-row>	
				</div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple">
					<el-row >
						<el-col :span="12"><div style="border-radius: 5px;background-color: #fff;margin: 20px;"> <i class="el-icon-edit" id="el-icon" style="font-size: 30px;" ></i></div></el-col>
						<el-col :span="12"></el-col>
					</el-row>	
				</div>
			</el-col>
		</el-row>
		</div>
	</div>

</template>
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
		.functionBlock{
			box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
			background-color: #fff;
			padding: 20px;
		}
		
		#el-icon{
			width: 100%; 
			height: 100%; 
			
			padding-top: 20px;
			padding-bottom: 20px;
			
		}
	</style>
