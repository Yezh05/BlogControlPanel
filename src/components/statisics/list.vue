<template>
	<div class="functionBlock">
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="用户" width="180">
			</el-table-column>
			<el-table-column prop="address" label="文章">
			</el-table-column>
		</el-table>
		<el-pagination small layout="prev, pager, next" :total="50">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [{
					date: '2016-05-02',
					name: 'MrJ',
					address: '面试还搞不懂redis，快看看这40道面试题'
				}, {
					date: '2016-05-04',
					name: 'S_mengyong孟勇丶',
					address: 'H5项目性能优化注意事项'
				}, {
					date: '2016-05-01',
					name: '自信人生-会当击',
					address: 'Spring boot框架相关知识详解'
				}, {
					date: '2016-05-03',
					name: 'HTML小白呀',
					address: 'vue+element-ui实现动态的权限管理和菜单渲染'
				}]
			}
		}
	}
</script>

<style>
</style>
