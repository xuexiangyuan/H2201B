<template>
  <div>
    <!-- 工资 -->
    <mbx></mbx>

    <el-card class="box-card">
      <div class="card">
        <el-tag class="tag"><i class="el-icon-warning"></i>本月0：入职 0 离职 0 调薪 0 未定薪 0</el-tag>
        <div class="btn">
          <el-button type="danger" size="small">设置</el-button>
          <el-button type="primary" size="small" @click="$router.push('/priceform')">202003报表</el-button>
        </div>
      </div>
    </el-card>

    <el-card class="box-cardd">
      <div class="cardd">
        <ul>
          <li>
            <div class="title">
              <h3>聘用形式:</h3>
            </div>
            <div class="input">
              <el-checkbox v-model="checked.py">正式</el-checkbox>
              <el-checkbox v-model="checked.py1">非正式</el-checkbox>
            </div>
          </li>
          <li>
            <div class="title">
              <h3>员工状态:</h3>
            </div>
            <div class="input">
              <el-checkbox v-model="checked.py2">在职</el-checkbox>
              <el-checkbox v-model="checked.py3">离职</el-checkbox>
            </div>
          </li>
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
        </ul>
      </div>
    </el-card>

    <el-card>
      <div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="index" label="序号"> </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="phone" label="手机"> </el-table-column>
          <el-table-column prop="gh" label="工号"> </el-table-column>
          <el-table-column prop="pyxs" label="聘用形式"> </el-table-column>
          <el-table-column prop="bm" label="部门"> </el-table-column>
          <el-table-column prop="tiem" label="入职时间"> </el-table-column>
          <el-table-column prop="price" label="工资基数"> </el-table-column>
          <el-table-column prop="jt" label="津贴方案"> </el-table-column>
          <el-table-column  label="操作">
						<template>
							<el-button type="primary" size="small">调薪</el-button>
							<el-button type="text" size="small" @click="$router.push('/list')">查看</el-button>
						</template>
					</el-table-column>
        </el-table>
      </div>
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
			tableData:[
				{
					name:'雨后有车驶来',
					phone:'13800000002',
					gh:'9002',
					pyxs:'未知',
					bm:'总裁办',
					tiem:'2018-11-02',
					price:'579',
					jt:'通用方案'
				},
				{
					name:'孙财',
					phone:'13800000003',
					gh:'111',
					pyxs:'未知',
					bm:'市场部',
					tiem:'2018-11-04',
					price:'40',
					jt:'通用方案'
				},
				{
					name:'罗晓晓',
					phone:'13800000004',
					gh:'1111',
					pyxs:'未知',
					bm:'人事部',
					tiem:'2018-12-02',
					price:'6',
					jt:'通用方案'
				},
				{
					name:'文吉星',
					phone:'13400000001',
					gh:'1001',
					pyxs:'未知',
					bm:'人事部',
					tiem:'2018-01-01',
					price:'10000',
					jt:'通用方案'
				},
				{
					name:'巴思慧',
					phone:'13400000002',
					gh:'1002',
					pyxs:'未知',
					bm:'人事部',
					tiem:'2018-01-01',
					price:'200',
					jt:'通用方案'
				},
				{
					name:'乔海',
					phone:'13500000001',
					gh:'2001',
					pyxs:'未知',
					bm:'总裁办',
					tiem:'2018-01-01',
					price:'14',
					jt:'通用方案'
				},
				{
					name:'董昊空',
					phone:'13500000002',
					gh:'2002',
					pyxs:'未知',
					bm:'总裁办',
					tiem:'2018-01-01',
					price:'246',
					jt:'通用方案'
				},
				{
					name:'周乐天',
					phone:'13500000003',
					gh:'2003',
					pyxs:'未知',
					bm:'财务部',
					tiem:'2018-01-01',
					price:'20',
					jt:'通用方案'
				},
				{
					name:'吕勇锐',
					phone:'13600000001',
					gh:'0001',
					pyxs:'未知',
					bm:'总裁办',
					tiem:'1992-08-04',
					price:'17776',
					jt:'通用方案'
				},
				{
					name:'袁永安',
					phone:'13600000002',
					gh:'0002',
					pyxs:'未知',
					bm:'总裁办',
					tiem:'1993-08-04',
					price:'0',
					jt:'通用方案'
				},
			],

    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-top: 20px;
}
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
</style>
