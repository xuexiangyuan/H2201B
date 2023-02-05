<template>
  <div>
    <!-- 社保 -->
    <mbx></mbx>
    <el-card class="box-card">
      <div class="card">
        <el-tag class="tag"><i class="el-icon-warning"></i>本月：社保在缴 公积金在缴 增员 减员 入职 离职</el-tag>
        <div class="btn">
          <el-button type="danger" size="small" @click="add">历史归档</el-button>
          <el-button type="warning" size="small" @click="app">202001报表</el-button>
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
              <el-checkbox v-model="checked.checked16">秘书部</el-checkbox>
              <el-checkbox v-model="checked.checked17">秘书部1111</el-checkbox>
              <el-checkbox v-model="checked.checked18">秘书部1111</el-checkbox>
            </div>
          </li>
          <li>
            <div class="title">
							<h3>社保城市</h3>
						</div>
            <div class="input">
              <el-checkbox v-model="checked.beijing">北京</el-checkbox>
            </div>
          </li>
          <li>
            <div class="title">
							<h3>公积金城市</h3>
						</div>
            <div class="input">
              <el-checkbox v-model="checked.beijing1">北京</el-checkbox>
            </div>
          </li>
        </ul>
      </div>
    </el-card>

		<!-- 表格 -->
		<bg></bg>
		<!-- 表格 -->


  </div>
</template>

<script>
import mbx from '@/components/mbx.vue'
import bg from './Form.vue'
import { security } from '../api/security'
// import history from './Historyd.vue'
// import {security} from '../api/security'
export default {
  components: {
    mbx,
		bg,
		// history,
  },
  data() {
    return {
			checked:{
				checked0:true,
				checked1:false,
				checked2:false,
				checked3:false,
				checked4:false,
				checked5:false,
				checked6:false,
				checked7:false,
				checked8:false,
				checked9:false,
				checked10:false,
				checked11:false,
				checked12:false,
				checked13:false,
				checked14:false,
				checked15:false,
				checked16:false,
				checked17:false,
				checked18:false,
				beijing:false,
				beijing1:false,
			}
		}
  },
	methods: {
		add(){
			this.$router.push('/historyd')
		},
		app(){
			this.$router.push('/forms')
		},



	},
	mounted() {
		
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

ul {
	li{
		display: flex;
		align-items: center;
		margin-top: 20px;
		.title{
			width: 100px;
			font-size: 15px;
		}
	.input{
		// margin-left: 20px;
	}
	}

}
</style>
