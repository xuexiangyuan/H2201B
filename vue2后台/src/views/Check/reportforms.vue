<template>
  <div>
    <!-- 考勤报表 -->
    <mbx></mbx>

    <el-card class="box-card">
      <div>
        <h3>202303月人事报表</h3>
        <el-tabs v-model="activeName">
          <el-tab-pane label="考勤统计" name="first">

            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
              <el-table-column prop="gh" label="工号" width="100"> </el-table-column>
              <el-table-column prop="phone" label="手机号" width="130"> </el-table-column>
              <el-table-column prop="bm" label="部门" width="100"> </el-table-column>
              <el-table-column prop="sj" label="事假" width="100"> </el-table-column>
              <el-table-column prop="tx" label="调休" width="100"> </el-table-column>
              <el-table-column prop="zc" label="正常" width="100"> </el-table-column>
              <el-table-column prop="dc" label="迟到次数" width="100"> </el-table-column>
              <el-table-column prop="zt" label="早退次数" width="100"> </el-table-column>
              <el-table-column prop="" label="日均时长" width="100"> </el-table-column>
              <el-table-column prop="kg" label="矿工天数" width="100"> </el-table-column>
              <el-table-column prop="" label="是否全勤" width="100"> </el-table-column>
              <el-table-column prop="" label="实际出勤天数" width="120"> </el-table-column>
              <el-table-column prop="" label="应出勤工作日" width="120"> </el-table-column>
              <el-table-column prop="" label="计薪标准" width="100"> </el-table-column>
            </el-table>

          </el-tab-pane>
        </el-tabs>
      </div>

			<!-- 分页 -->
			<div class="el-pagination">
				<el-pagination layout="prev, pager, next" :total="10"> </el-pagination>
			</div>
			<!-- 分页 -->

			<!-- 尾部按钮 -->
			<div class="btn">
				<el-button type="primary" size="small">归档202303月份报表</el-button>
				<el-button type="primary" size="small">新建报表</el-button>
			</div>
			<!-- 尾部按钮 -->
    </el-card>
  </div>
</template>

<script>
import mbx from '../../components/mbx.vue'
export default {
  components: {
    mbx
  },
  data() {
    return {
      activeName: 'first',
			tableData:[
				{
					name:'雨后有车驶来',
					gh:'9002',
					phone:'13800000002',
					bm:'总裁办',
					sj:'0',
					tx:'0',
					zc:'0',
					cd:'0',
					zt:'0',
					kg:'0'
				},
				{
					name:'孙财',
					gh:'111',
					phone:'13800000003',
					bm:'市场部',
					sj:'0',
					tx:'0',
					zc:'0',
					cd:'0',
					zt:'0',
					kg:'0'
				},
				{
					name:'罗晓晓',
					gh:'1111',
					phone:'13800000004',
					bm:'人事部',
					sj:'0',
					tx:'0',
					zc:'0',
					cd:'0',
					zt:'0',
					kg:'0'
				},
				{
					name:'文吉星',
					gh:'1001',
					phone:'13400000001',
					bm:'人事部',
					sj:'0',
					tx:'0',
					zc:'0',
					cd:'0',
					zt:'0',
					kg:'0'
				},
				{
					name:'巴思慧',
					gh:'1002',
					phone:'13400000002',
					bm:'人事部',
					sj:'0',
					tx:'0',
					zc:'0',
					cd:'0',
					zt:'0',
					kg:'0'
				},
				{
					name:'乔海',
					gh:'2001',
					phone:'13500000001',
					bm:'总裁办',
					sj:'0',
					tx:'0',
					zc:'0',
					cd:'0',
					zt:'0',
					kg:'0'
				},
				{
					name:'董昊空',
					gh:'2002',
					phone:'13500000002',
					bm:'总裁办',
					sj:'0',
					tx:'0',
					zc:'0',
					cd:'0',
					zt:'0',
					kg:'0'
				},
				{
					name:'周乐天',
					gh:'2003',
					phone:'13500000003',
					bm:'财务部',
					sj:'0',
					tx:'0',
					zc:'0',
					cd:'0',
					zt:'0',
					kg:'0'
				},
				{
					name:'吕勇锐',
					gh:'0001',
					phone:'13600000001',
					bm:'总裁办',
					sj:'0',
					tx:'0',
					zc:'0',
					cd:'0',
					zt:'0',
					kg:'0'
				},
				{
					name:'袁永安',
					gh:'0002',
					phone:'13600000002',
					bm:'总裁办',
					sj:'0',
					tx:'0',
					zc:'0',
					cd:'0',
					zt:'0',
					kg:'0'
				},
				{
					name:'罗英卓',
					gh:'0003',
					phone:'13600000003',
					bm:'行政部',
					sj:'0',
					tx:'0',
					zc:'0',
					cd:'0',
					zt:'0',
					kg:'0'
				},
				{
					name:'宋高昂',
					gh:'0004',
					phone:'13600000004',
					bm:'人事部',
					sj:'0',
					tx:'0',
					zc:'0',
					cd:'0',
					zt:'0',
					kg:'0'
				},
				{
					name:'师玉堂',
					gh:'0005',
					phone:'13600000005',
					bm:'财务部',
					sj:'0',
					tx:'0',
					zc:'0',
					cd:'0',
					zt:'0',
					kg:'0'
				},
				{
					name:'武高丽',
					gh:'0006',
					phone:'13600000006',
					bm:'技术部',
					sj:'0',
					tx:'0',
					zc:'0',
					cd:'0',
					zt:'0',
					kg:'0'
				},
				{
					name:'任志行',
					gh:'0007',
					phone:'13600000007',
					bm:'运营部',
					sj:'0',
					tx:'0',
					zc:'0',
					cd:'0',
					zt:'0',
					kg:'0'
				},
				{
					name:'瞿光明',
					gh:'0008',
					phone:'13600000008',
					bm:'市场部',
					sj:'0',
					tx:'0',
					zc:'0',
					cd:'0',
					zt:'0',
					kg:'0'
				},
			],
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-top: 20px;
  h3 {
    text-align: center;
    color: #66667f;
  }
}

.el-pagination{
	margin-left: 55%;
}

.btn{
	margin-left: 35%;
}
</style>
