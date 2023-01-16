<template>
	<div>
		<p>考勤</p>
		<el-card class="box-card">
    <div class="card">
			<el-tag class="tag"><el-icon color="#409EFF"><InfoFilled /></el-icon>有0条考勤审批尚未处理</el-tag>
			<div>
				<el-button type="primary">导入</el-button>
				<el-button type="primary">提醒</el-button>
				<el-button type="primary">设置</el-button>
				<el-button type="primary">历史归档</el-button>
				<el-button type="primary">4月份报表</el-button>
			</div>
		</div>
  </el-card>

	<el-card class="box-cardd">
    <div class="card">
			<ul>
				<!-- <li>
					<h3 class="h3">聘用方式:</h3>
					<div class="pinyong">
    				<el-checkbox v-model="checkedd" label="正式" size="large" />
    				<el-checkbox v-model="checkeddd" label="非正式" size="large" />
  				</div>

						<h3 class="h33">员工状态:</h3>
					<div>
    				<el-checkbox v-model="checkede" label="在职" size="large" />
    				<el-checkbox v-model="checkedee" label="离职" size="large" />
  				</div>
				</li> -->
				<li>
					<h3>部门:</h3>
					<div class="bumen">
    				<el-checkbox v-model="checked1" label="总裁办" size="large" />
    				<el-checkbox v-model="checked2" label="行政部" size="large" />
    				<el-checkbox v-model="checked3" label="人事部" size="large" />
    				<el-checkbox v-model="checked4" label="财务部" size="large" />
    				<el-checkbox v-model="checked5" label="技术部" size="large" />
    				<el-checkbox v-model="checked6" label="运营部" size="large" />
    				<el-checkbox v-model="checked7" label="市场部" size="large" />
    				<el-checkbox v-model="checked8" label="财务核算部" size="large" />
    				<el-checkbox v-model="checked9" label="税务管理部" size="large" />
    				<el-checkbox v-model="checked11" label="薪资管理部" size="large" />
						<br/>
						<el-checkbox v-model="checked12" label="Java研发部" size="large" />
						<el-checkbox v-model="checked13" label="Python研发部" size="large" />
						<el-checkbox v-model="checked14" label="Php研发部" size="large" />
						<el-checkbox v-model="checked15" label="北京事业部" size="large" />
						<el-checkbox v-model="checked16" label="上海事业部" size="large" />
						<el-checkbox v-model="checked17" label="23415" size="large" />
						<el-checkbox v-model="checked18" label="1234" size="large" />
  				</div>
				</li>
				<li>
					<h3>考勤状态:</h3>
					 <div class="mb-2 flex items-center text-sm">
    					<el-radio-group v-model="radio1" class="ml-4">
    					  <el-radio label="1" size="large">正常</el-radio>
    					  <el-radio label="2" size="large">矿工</el-radio>
    					  <el-radio label="3" size="large">事假</el-radio>
    					  <el-radio label="4" size="large">调休</el-radio>
    					  <el-radio label="5" size="large">迟到</el-radio>
    					  <el-radio label="6" size="large">早退</el-radio>
    					</el-radio-group>
  				</div>
				</li>
			</ul>
		</div>
  </el-card>


		<!-- 表单 -->
		<el-card class="bbox-card">
    <div>
			<el-table :data="tableData" style="width: 100%;">
 		    <el-table-column type="index" label="序号" width="100" height="20" />
 		    <el-table-column prop="name" label="姓名" width="100" />
 		    <el-table-column prop="date" label="工号" width="100" />
 		    <el-table-column prop="address" label="部门" width="100" />
 		    <el-table-column prop="model" label="手机" width="100" />
 		    <el-table-column prop="kuangg" label="4/1" width="100" />
 		    <el-table-column prop="kuangg2" label="4/2" width="100" />
 		    <el-table-column prop="kuangg2" label="4/3" width="100" />
 		    <el-table-column prop="kuangg2" label="4/4" width="100" />
 		    <el-table-column prop="kuangg2" label="4/5" width="100" />
 		    <el-table-column prop="kuangg2" label="4/6" width="100" />
 		    <el-table-column prop="kuangg2" label="4/7" width="100" />
 		    <el-table-column prop="kuangg2" label="4/8" width="100" />
 		    <el-table-column prop="kuangg2" label="4/9" width="100" />
 		    <el-table-column prop="kuangg2" label="4/10" width="100" />
 		    <el-table-column prop="kuangg2" label="4/11" width="100" />
 		    <el-table-column prop="kuangg2" label="4/12" width="100" />
 		    <el-table-column prop="kuangg2" label="4/13" width="100" />
 		    <el-table-column prop="kuangg2" label="4/14" width="100" />
 		    <el-table-column prop="kuangg2" label="4/15" width="100" />
 		    <el-table-column prop="kuangg2" label="4/16" width="100" />
 		    <el-table-column prop="kuangg2" label="4/17" width="100" />
 		    <el-table-column prop="kuangg2" label="4/18" width="100" />
 		    <el-table-column prop="kuangg2" label="4/19" width="100" />
 		    <el-table-column prop="kuangg2" label="4/20" width="100" />
 		    <el-table-column prop="kuangg2" label="4/21" width="100" />
 		    <el-table-column prop="kuangg2" label="4/22" width="100" />
 		    <el-table-column prop="kuangg2" label="4/23" width="100" />
 		    <el-table-column prop="kuangg2" label="4/24" width="100" />
 		    <el-table-column prop="kuangg2" label="4/25" width="100" />
 		    <el-table-column prop="kuangg2" label="4/26" width="100" />
 		    <el-table-column prop="kuangg2" label="4/27" width="100" />
 		    <el-table-column prop="kuangg2" label="4/28" width="100" />
 		    <el-table-column prop="kuangg2" label="4/29" width="100" />
 		    <el-table-column prop="kuangg2" label="4/30" width="100" />
 		  </el-table>
		</div>

		<!-- 分页 -->
		<div class="demo-pagination-block">
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
		<!-- 分页 -->
  </el-card>
		<!-- 表单 -->
	</div>
</template>


<script lang="ts" setup>
	import {InfoFilled} from '@element-plus/icons-vue'
	import { ref } from 'vue'
	import type { TableColumnCtx } from 'element-plus'





	interface User {
  date: string
  name: string
  address: string
	model:string
	kuangg:string
	kuangg2:string
}

	const tableData: User[]  = [
  {
    date: '9002',
    name: '程序员1024',
    address: '总裁办',
		model:'1380000002',
		kuangg:'√',
		kuangg2:'矿工'
  },
  {
    date: '111',
    name: '孙财',
    address: '市场部',
		model:'1380000003',
		kuangg:'矿工',
		kuangg2:'矿工'
  },
  {
    date: '1111',
    name: '罗晓晓',
    address: '人事部',
		model:'1380000004',
		kuangg:'测试架',
		kuangg2:'矿工'
  },
  {
    date: '1001',
    name: '文吉星',
    address: '人事部',
		model:'1340000001',
		kuangg:'矿工',
		kuangg2:'矿工'
  },
  {
    date: '1002',
    name: '巴思慧',
    address: '人事部',
		model:'1340000002',
		kuangg:'矿工',
		kuangg2:'矿工'
  },
  {
    date: '2001',
    name: '乔海',
    address: '总裁办',
		model:'1350000002',
		kuangg:'矿工',
		kuangg2:'矿工'
  },
  {
    date: '2002',
    name: '董昊空',
    address: '总裁办',
		model:'1350000002',
		kuangg:'矿工',
		kuangg2:'矿工'
  },
  {
    date: '2003',
    name: '周乐天',
    address: '财务部',
		model:'1350000003',
		kuangg:'矿工',
		kuangg2:'矿工'
  },
  {
    date: '0001',
    name: '吕勇锐',
    address: '总裁办',
		model:'1360000001',
		kuangg:'矿工',
		kuangg2:'矿工'
  },
  {
    date: '0002',
    name: '袁永安',
    address: '总裁办',
		model:'1360000002',
		kuangg:'矿工',
		kuangg2:'矿工'
  },
]





	const radio1 = ref('1')

	const checked1 = ref(true)
	const checked2 = ref(false)
	const checked3 = ref(false)
	const checked4 = ref(false)
	const checked5 = ref(false)
	const checked6 = ref(false)
	const checked7 = ref(false)
	const checked8 = ref(false)
	const checked9 = ref(false)
	const checked11 = ref(false)
	const checked12 = ref(false)
	const checked13 = ref(false)
	const checked14 = ref(false)
	const checked15 = ref(false)
	const checked16 = ref(false)
	const checked17 = ref(false)
	const checked18 = ref(false)
	const beijing = ref(false)
	const beijing1 = ref(false)
	const checkedd = ref(false)
	const checkeddd = ref(false)
	const checkede = ref(false)
	const checkedee = ref(false)

	const currentPage4 = ref(4)
const pageSize4 = ref(100)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>


<style lang="scss" scoped>
.tag{
	color: #605992;
}
.card{
	display: flex;
	justify-content: space-between;
}

.box-cardd{
	margin-top: 20px;
}
ul{
		margin-top: 20px;
		li{
			display: flex;
			align-items: center;
			// background-color: #ccc;
			// justify-content:space-around;
			// .h3{
			// 	margin-top: -40px;
			// }
		}
	}
	.h33{
		margin-left: 50px;
	}

.pinyong{
	margin-left: 15px;
}
	.bumen{
		margin-left: 50px;
	}

	.box-cardc{
		margin-top: 20px;
	}

	.demo-pagination-block{
	margin-left: 660px;
	margin-top: 10px;
}

.bbox-card{
	margin-top: 20px;
}


</style>

