<template>
  <div>
    <!-- 考勤 -->
    <mbx></mbx>

    <el-card class="box-card">
      <div class="card">
        <el-tag class="tag"><i class="el-icon-warning"></i>有0条考勤审批尚未处理</el-tag>
        <div class="btn">
          <el-button type="danger" size="small">导入</el-button>
          <el-button type="warning" size="small">提醒</el-button>
          <el-button type="primary" size="small">设置</el-button>
          <el-button size="small" @click="$router.push('/interfile')">历史归档</el-button>
          <el-button type="primary" size="small" @click="$router.push('/reportforms')">202303报表</el-button>
        </div>
      </div>
    </el-card>

    <el-card class="box-cardd">
      <div class="cardd">
        <ul>
          <li>
            <div class="title">
              <h3>部门</h3>
            </div>
            <div class="input">
              <el-checkbox v-model="checked.checked0">传智教育</el-checkbox>
              <el-checkbox v-model="checked.checked1">总裁办</el-checkbox>
              <el-checkbox v-model="checked.checked2">行政部</el-checkbox>
              <el-checkbox v-model="checked.checked3">人事部</el-checkbox>
              <el-checkbox v-model="checked.checked4">财务部</el-checkbox>
              <el-checkbox v-model="checked.checked5">财务核算部</el-checkbox>
              <el-checkbox v-model="checked.checked6">薪资管理部</el-checkbox>
              <el-checkbox v-model="checked.checked7">薪资管理部</el-checkbox>
              <el-checkbox v-model="checked.checked8">技术部</el-checkbox>
              <el-checkbox v-model="checked.checked9">Java研发部</el-checkbox>
              <el-checkbox v-model="checked.checked10">Python研发部</el-checkbox>
              <el-checkbox v-model="checked.checked11">Php研发部</el-checkbox>
              <el-checkbox v-model="checked.checked12">运营部</el-checkbox>
              <el-checkbox v-model="checked.checked13">市场部</el-checkbox>
              <el-checkbox v-model="checked.checked14">北京事业部</el-checkbox>
              <el-checkbox v-model="checked.checked15">上海事业部</el-checkbox>
              <el-checkbox v-model="checked.checked16">规格</el-checkbox>
              <el-checkbox v-model="checked.checked17">薪资管理部门</el-checkbox>
              <el-checkbox v-model="checked.checked18">运营部门</el-checkbox>
            </div>
          </li>
          <li>
            <div class="title">
              <h3>考勤状态</h3>
            </div>
            <div class="input">
              <el-radio v-model="radio" label="1">正常</el-radio>
              <el-radio v-model="radio" label="2">矿工</el-radio>
              <el-radio v-model="radio" label="3">事假</el-radio>
              <el-radio v-model="radio" label="4">调休</el-radio>
              <el-radio v-model="radio" label="5">迟到</el-radio>
              <el-radio v-model="radio" label="6">早退</el-radio>
            </div>
          </li>
        </ul>
      </div>
    </el-card>

    <el-card class="box-carddd">
      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" label="序号" align="center" width="110"> </el-table-column>
          <el-table-column prop="username" label="姓名" align="center" width="110"> </el-table-column>
          <el-table-column prop="workNumber" label="工号" align="center" width="110"> </el-table-column>
          <el-table-column prop="departmentName" label="部门" align="center" width="110"> </el-table-column>
          <el-table-column prop="mobile" label="手机" align="center" width="110"> </el-table-column>
          <el-table-column prop="" label="3/1" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/2" align="center" width="110">旷工</el-table-column>
          <el-table-column prop="s" label="3/3" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/4" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/5" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/6" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/7" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/8" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/9" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/10" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/11" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/12" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/13" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/14" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/15" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/16" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/17" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/18" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/19" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/20" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/21" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/22" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/23" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/24" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/25" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/26" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/27" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/28" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/29" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/30" align="center" width="110"> 旷工</el-table-column>
          <el-table-column prop="s" label="3/31" align="center" width="110"> 旷工</el-table-column>
        </el-table>
      </div>

      <!-- 分页 -->
      <div class="el-pagination">

				<el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagnum.page"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="pagnum.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagnum.total">
    </el-pagination>
			</div>
      <!-- 分页 -->
    </el-card>
  </div>
</template>

<script>
import mbx from '../../components/mbx.vue'
import {check,checkpag,checkpaglock}from '../api/check'
export default {
  components: {
    mbx
  },
  data() {
    return {
      checked: {
        checked0: true,
        checked1: false,
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false,
        checked7: false,
        checked8: false,
        checked9: false,
        checked10: false,
        checked11: false,
        checked12: false,
        checked13: false,
        checked14: false,
        checked15: false,
        checked16: false,
        checked17: false,
        checked18: false,
        beijing: false
      },
      radio: '1',
			tableData:[],
			pagnum:{
				page:1,
				total:0,
				pagesize:5,
			}
      // tableData: [
      //   {
      //     name: '管理员',
      //     gh: '9002',
      //     bm: '总裁办',
      //     phone: '13800000002',
      //     s: '旷工'
      //   },
      //   {
      //     name: '孙财',
      //     gh: '111',
      //     bm: '市场部',
      //     phone: '13800000003',
      //     s: '旷工'
      //   },
      //   {
      //     name: '罗晓晓',
      //     gh: '111',
      //     bm: '人事部',
      //     phone: '13800000004',
      //     s: '旷工'
      //   },
      //   {
      //     name: '文吉星',
      //     gh: '1001',
      //     bm: '人事部',
      //     phone: '13400000001',
      //     s: '旷工'
      //   },
      //   {
      //     name: '巴思慧',
      //     gh: '1002',
      //     bm: '人事部',
      //     phone: '	13400000002',
      //     s: '旷工'
      //   },
      //   {
      //     name: '乔海',
      //     gh: '2001',
      //     bm: '总裁办',
      //     phone: '	13500000001',
      //     s: '旷工'
      //   },
      //   {
      //     name: '董昊空',
      //     gh: '2002',
      //     bm: '总裁办',
      //     phone: '	13500000002',
      //     s: '旷工'
      //   },
      //   {
      //     name: '周乐天',
      //     gh: '2003',
      //     bm: '财务部',
      //     phone: '	13500000003',
      //     s: '旷工'
      //   },
      //   {
      //     name: '吕勇锐',
      //     gh: '0001',
      //     bm: '总裁办',
      //     phone: '	13600000001',
      //     s: '旷工'
      //   },
      //   {
      //     name: '袁永安',
      //     gh: '0002',
      //     bm: '总裁办',
      //     phone: '	13600000002',
      //     s: '旷工'
      //   }
      // ]
    }
  },
	methods: {
		handleSizeChange(val){
			console.log(val);
			this.pagnum.page=val
		},
		handleCurrentChange(val){
			console.log(val);
			this.pagnum.pagesize=val
		}
	},
	created() {
		check().then(res=>{
			console.log(res);
			this.tableData=res.data.data.data.rows
			this.pagnum.total=res.data.data.data.total
		}),
		checkpag(this.pagnum).then(res=>{
			console.log(res);
		})
	},
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tag {
  color: #000;
  background-color: #e6f7ff;
  border: 1px solid #91d5ff;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.el-icon-warning {
  color: #409eff;
}

.box-cardd {
  margin-top: 20px;
  height: 170px;
}
.box-carddd {
  margin-top: 20px;
}

ul {
  li {
    display: flex;
    align-items: center;
    margin-top: 20px;
    .title {
      width: 100px;
      font-size: 15px;
    }
    .input {
      // margin-left: 20px;
    }
  }
}

.el-pagination{
	margin-left: 23%;
}
</style>
