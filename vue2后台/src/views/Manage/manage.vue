<template>
  <div>
		<mbx></mbx>
    <!-- 权限管理 -->
    <el-card class="box-card">
      <div class="title">
        <p></p>
        <el-button size="small" type="primary">添加权限</el-button>
      </div>
    </el-card>

    <!-- 表格 -->
    <el-card class="box-cardd">
      <div class="titlee">
        <el-table
          :data="tableData"
          style="width: 100%; margin-bottom: 20px"
          row-key="id"
          border

          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        >
          <el-table-column prop="name" label="名称" header-align="center" align="center"> </el-table-column>
          <el-table-column prop="address" label="标识" header-align="center" align="center"> </el-table-column>
          <el-table-column prop="date" label="描述" header-align="center" align="center"> </el-table-column>
          <el-table-column prop="name" label="操作" header-align="center" align="center">
						<template>
							<el-button type="text">添加</el-button>
							<el-button type="text">编辑</el-button>
							<el-button type="text">删除</el-button>
						</template>
					</el-table-column>
        </el-table>
      </div>
    </el-card>
    <!-- 表格 -->
  </div>
</template>


<script>
import mbx from '@/components/mbx.vue'
export default {
	components:{
		mbx,
	},
	data() {
		return {
			tableData:[
				{
          id: 1,
          date: '用户管理菜单',
          name: '员工管理',
          address: 'employees',
					children: [{
              id: 31,
              date: 'aa',
              name: '测试',
              address: 'aa'
            },
						{
              id: 32,
              date: 'import',
              name: '导入',
              address: 'import'
          },
						{
              id: 33,
              date: 'export',
              name: '导出',
              address: 'export'
          },
					]
        }, {
          id: 2,
          date: '公司设置菜单',
          name: '公司设置',
          address: 'settings'
        }, {
          id: 3,
          date: '权限菜单',
          name: '权限管理',
          address: 'permissions',

        },
				{
          id: 4,
          date: '社保',
          name: '社保',
          address: 'social_securitys'
        },
				{
          id: 5,
          date: '审批',
          name: '审批',
          address: 'approvals'
        },
				{
          id: 6,
          date: '考勤',
          name: '考勤',
          address: 'attendances',
					children: [{
              id: 36,
              date: '11',
              name: '11',
              address: '11'
            }
					]
        },
				{
          id: 7,
          date: '工资',
          name: '工资',
          address: 'salarys'
        },
				{
          id: 8,
          date: '组织架构',
          name: '组织架构',
          address: 'departments'
        },
				{
          id: 9,
          date: '11',
          name: '11',
          address: '11'
        },
				{
          id: 10,
          date: '111',
          name: '111',
          address: '111'
        },
				{
          id: 11,
          date: '222',
          name: '222',
          address: '222'
        },
				{
          id: 112,
          date: '333',
          name: '333',
          address: '333'
        },
				{
          id: 113,
          date: '444',
          name: '444',
          address: '444'
        },
				{
          id: 114,
          date: '555',
          name: '555',
          address: '555'
        },
				],

		}
	},
}
</script>



<style lang="scss" scoped>
.box-card {
  height: 80px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-cardd {
  margin-top: 20px;
}
</style>
