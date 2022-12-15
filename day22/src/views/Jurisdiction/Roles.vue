<template>
	<div>
		<!-- <h1>角色列表</h1> -->
		<el-card>
			<el-button type="primary">添加角色</el-button>
			<el-table :data="roleslist" style="width: 100%">
				<el-table-column type="expand">
				</el-table-column>
				<el-table-column label="#" type="index">
				</el-table-column>
				<el-table-column label="角色出门" prop="roleName">
				</el-table-column>
				<el-table-column label="角色描述" prop="roleDesc">
				</el-table-column>
				<el-table-column label="操作">
					<el-button type="primary" size="mini" icon="el-icon-edit">编辑</el-button>
					<el-button type="danger" size="mini" icon="el-icon-delete">删除</el-button>
					<el-button type="warning" size="mini" icon="el-icon-s-tools">分配权限</el-button>
				</el-table-column>
			</el-table>
		</el-card>

	</div>
</template>

<script>
export default {
	data () {
		return {
			roleslist: []
		}
	},
	methods: {

	},
	created () {
		this.$http.apiPost('/roles').then(res => {
			console.log(res);
			this.roleslist = res.data.data
		})
	},
	mounted () {

	},
	components: {

	},
	computed: {

	},
	watch: {

	},
}
</script>

<style lang='scss' scoped>

</style>
