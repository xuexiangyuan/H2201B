<template>
  <div>
    <!-- 审批 -->
    <mbx></mbx>
    <el-card class="box-card">
      <div class="card">
        <el-tag class="tag"><i class="el-icon-warning"></i>当前审批中 0 本月审批通过 1 本月审批驳回 0</el-tag>
        <div class="btn">
          <el-button type="primary" size="small" @click="$router.push('/procedure')">流程设置</el-button>
        </div>
      </div>
    </el-card>

    <el-card class="box-cardd">
      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column type="index" label="序号"> </el-table-column>
          <el-table-column prop="processName" label="审批类型" sortable> </el-table-column>
          <el-table-column prop="username" label="申请人" sortable> </el-table-column>
          <el-table-column prop="procCurrNodeUserName" label="当前审批人" sortable> </el-table-column>
          <el-table-column prop="procApplyTime" label="审批发起时间" sortable>
						 <template slot-scope="scope">
                {{scope.row.procApplyTime | time}}
            </template>
					</el-table-column>
          <el-table-column prop="processState" label="审批状态" sortable>
						<template slot-scope="scope">
							<p>{{scope.row.processState==2?'审批通过':'撤销'}}</p>
						</template>
					</el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="small" type="text" @click="lockk(scope.row)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>

        <!-- 分页 -->
        <el-pagination layout="prev, pager, next" :total="10"> </el-pagination>
        <!-- 分页 -->
      </div>
    </el-card>
  </div>
</template>

<script>
import mbx from '@/components/mbx.vue'

import {examine,examinelock}from '../api/examine'
let timer =null
export default {
  components: {
    mbx
  },
  data() {
    return {
			tableData:[],
			id:'',
      // tableData: [
      //   {
      //     examine: '请假',
      //     examineren: '孙财',
      //     dqexamine: 'itcast',
      //     itcasttiem: '2019-09-23',
      //     examineflag: '撤销'
      //   },
      //   {
      //     examine: '请假',
      //     examineren: '孙财',
      //     dqexamine: '乔海 董昊空',
      //     itcasttiem: '2019-09-23',
      //     examineflag: '审批通过'
      //   },
      //   {
      //     examine: '请假',
      //     examineren: '孙财',
      //     dqexamine: '文吉星 巴思慧',
      //     itcasttiem: '2019-09-23',
      //     examineflag: '审批通过'
      //   },
      //   {
      //     examine: '离职',
      //     examineren: '管理员',
      //     dqexamine: '管理员 乔海 董昊空 吕勇锐 袁永安',
      //     itcasttiem: '2020-03-05',
      //     examineflag: '审批中'
      //   },
      //   {
      //     examine: '离职',
      //     examineren: '管理员',
      //     dqexamine: '管理员 乔海 董昊空 吕勇锐 袁永安',
      //     itcasttiem: '2020-03-05',
      //     examineflag: '审批中'
      //   },
      //   {
      //     examine: '加班',
      //     examineren: '管理员',
      //     dqexamine: '孙财',
      //     itcasttiem: '2020-03-05',
      //     examineflag: '审批中'
      //   },
      //   {
      //     examine: '加班',
      //     examineren: '孙财',
      //     dqexamine: 'll a01 a02',
      //     itcasttiem: '2019-09-23',
      //     examineflag: '审批通过'
      //   }
      // ]
    }
  },
	created() {
		examine().then(res=>{
			console.log(res);
			this.tableData=res.data.data.rows
		})

	},
	methods: {
		lockk(val){
			// console.log(val);
			this.id=val.processId
			examinelock(this.id).then(res=>{
			console.log(res);
			this.$router.push('/inspect/'+val.processId)
		})
		}
	},
	filters: {
    time(val){
        let date=new Date(val*1000)
        let year=date.getFullYear()
        let month=date.getMonth()+1
        let day =date.getDate()
        let hour =date.getHours()
        let m=date.getMinutes()
        return year+'-'+month+'-'+day+' '+ hour+':'+m
    }
  },

}
</script>

<style lang="scss" scoped>
.box-cardd {
  margin-top: 20px;
}
.card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tag {
  height: 40px;
  color: #000;
  border: 1px solid #91d5ff;
  font-size: 16px;
  line-height: 40px;
  background-color: #e6f7ff;
}
.el-icon-warning {
  color: #409eff;
}

.el-pagination{
	margin-left: 40%;
}
</style>
