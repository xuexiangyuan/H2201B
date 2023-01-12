<template>
  <div>
    <!-- 员工 -->
		<mbx></mbx>
    <el-card class="box-card">
      <div class="card">
        <el-tag class="tag"><i class="el-icon-warning"></i>当前共有1851条记录</el-tag>
        <div class="btn">
          <el-button type="danger">普通excel导出</el-button>
          <el-button type="warning">负债excel导出</el-button>
          <el-button type="success">excel导入</el-button>
          <el-button type="primary" plain disabled>新增员工</el-button>
        </div>
      </div>
    </el-card>

    <!-- 表格 -->
    <el-card class="box-cardd">
      <div class="card">
        <el-table :data="tableData" style="width: 100%" :default-sort="{ prop: 'date', order: 'descending' }">
          <el-table-column type="index" label="序号"> </el-table-column>
          <el-table-column prop="name" label="姓名" sortable> </el-table-column>
          <el-table-column prop="img" label="头像">
						<template slot-scope="scoped">
							<img class="imgtab" :src="scoped.row.img" alt="">
						</template>
					</el-table-column>
          <el-table-column prop="phone" label="手机号" sortable> </el-table-column>
          <el-table-column prop="job" label="工号" sortable> </el-table-column>
          <el-table-column prop="employ" label="聘用形式" sortable> </el-table-column>
          <el-table-column prop="department" label="部门" sortable> </el-table-column>
          <el-table-column prop="tiem" label="入职时间" sortable> </el-table-column>
          <el-table-column prop="flag" label="账户状态" sortable>
						<template slot-scope="scoped">
							<el-switch
							  v-model="scoped.row.flag"
							  active-color="#13ce66"
							  inactive-color="#ccc">
							</el-switch>
						</template>
					</el-table-column>
          <el-table-column label="操作" sortable width="300px">
						<template slot-scope="scoped">
							<el-button size="mini" type="text">查看</el-button>
							<el-button size="mini" type="text">转正</el-button>
							<el-button size="mini" type="text">调岗</el-button>
							<el-button size="mini" type="text">离职</el-button>
							<el-button size="mini" type="text">角色</el-button>
							<el-button size="mini" class="btnn" type="text">删除</el-button>
						</template>
					</el-table-column>
        </el-table>
				<!-- 表格 -->
      </div>

			<div class="fenye">
				<!-- 分页 -->
		<el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[1, 3, 5, 10]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="7">
    </el-pagination>
		<!-- 分页 -->
			</div>
    </el-card>


  </div>
</template>

<script>
import mbx from '@/components/mbx.vue'
export default {
	components:{
		mbx
	},
  data() {
    return {
			tableData:[
				{
					id:1,
					name:'黄麒帆',
					img:'https://img1.baidu.com/it/u=407852637,3650486136&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1673456400&t=ff1c0869739e96245bc04ed6d8eb4fed',
					phone:'13500000000',
					job:'001',
					employ:'正式',
					department:'总裁部',
					tiem:'2018-11-02',
					flag:false
				},
				{
					id:2,
					name:'罗晓晓',
					img:'https://img2.woyaogexing.com/2023/01/10/6900443bc3d6ec3d54bcfc2da4302d13.jpeg',
					phone:'13500000001',
					job:'002',
					employ:'正式',
					department:'人事部',
					tiem:'2018-11-04',
					flag:false
				},
				{
					id:3,
					name:'文吉星',
					img:'https://img2.woyaogexing.com/2023/01/10/af83c8ef0a5f7c56e99cfe87316a8579.jpg',
					phone:'13500000002',
					job:'003',
					employ:'正式',
					department:'人事部',
					tiem:'2018-01-01',
					flag:true
				},
				{
					id:4,
					name:'巴思慧',
					img:'https://img2.woyaogexing.com/2023/01/10/5724c5ccf94790ece1251089dee73ba2.jpeg',
					phone:'13500000003',
					job:'004',
					employ:'正式',
					department:'人事部',
					tiem:'2018-01-01',
					flag:false
				},
				{
					id:5,
					name:'乔海',
					img:'https://img2.woyaogexing.com/2023/01/10/04d7feb999b2c3319490ebc0539283c5.jpg',
					phone:'13500000004',
					job:'005',
					employ:'正式',
					department:'总裁部',
					tiem:'2018-01-01',
					flag:false
				},
				{
					id:6,
					name:'董昊空',
					img:'https://img2.woyaogexing.com/2023/01/10/05ce7ccba9f0e44d9c696a55e6aec8a9.jpg',
					phone:'13500000005',
					job:'006',
					employ:'正式',
					department:'总裁部',
					tiem:'2018-01-01',
					flag:false
				},
				{
					id:7,
					name:'周乐天',
					img:'https://img2.woyaogexing.com/2023/01/10/7871498e853cbbb827fceda952b836a4.jpg',
					phone:'13500000006',
					job:'007',
					employ:'正式',
					department:'财务部',
					tiem:'2018-01-01',
					flag:true
				},
			],
			currentPage4:1
		}
  },
	 methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },

			// getlist(){
			// 	this.$http({method:'get',url:'/app/list'}).then(res=>{
			// 		console.log(res);
			// 	})
			// }
    },

		created() {
			// this.getlist()
		},
}
</script>

<style lang="scss" scoped>
.tag {
  color: #000;
}
.el-icon-warning {
  color: #409eff;
}
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-cardd {
  margin-top: 20px;
}

.imgtab{
	width: 60px;
	height: 60px;
	border-radius: 50%;
}
.btnn{
	color: #ccc;
}

.fenye{
	margin-left: 700px;
}
</style>
