<template>
  <div>
    <!-- 查看详情 -->
    <div class="title">
      <div class="img">
        <img src="../../assets/猫.png" alt="" />
      </div>
      <div class="text">
        <h5>管理员</h5>
        <span>在职</span>
      </div>
      <div class="t">
        <p>最新工资基数 入职时间2018-11-02 联系电话 13800000002</p>
      </div>

      <div class="swice">
        <p>本页不缴纳社保</p>
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
        <p>本页不缴纳公积金</p>
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
      </div>
    </div>

    <div class="inp">
      <div class="a">
        <p>参保城市</p>
        <el-select v-model="value1" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value1" :label="item.label" :value="item.value1"> </el-option>
        </el-select>
      </div>
      <div class="a">
        <p>社保类型</p>
        <el-select v-model="value1" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value1" :label="item.label" :value="item.value1"> </el-option>
        </el-select>
      </div>
      <div class="a">
        <p>户籍类型</p>
        <el-select v-model="value1" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value1" :label="item.label" :value="item.value1"> </el-option>
        </el-select>
      </div>
      <div class="a">
        <p>社保基数</p>
        <el-select v-model="value1" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value1" :label="item.label" :value="item.value1"> </el-option>
        </el-select>
        <p>(基数范围是3387~25401)</p>
      </div>
      <div class="a">
        <p>工伤比例</p>
        <el-select v-model="value1" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value1" :label="item.label" :value="item.value1"> </el-option>
        </el-select>
        <p>(比例范围是02.%~3%,推荐0.2%)</p>
      </div>
      <div class="a">
        <p>个人</p>
        <el-input placeholder="请输入内容" v-model="input" :disabled="true"></el-input>
        <p>公司</p>
        <el-input placeholder="请输入内容" v-model="input" :disabled="true"></el-input>
      </div>
    </div>

    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="缴费项目"> </el-table-column>
      <el-table-column prop="date" label="企业基数"> </el-table-column>
      <el-table-column prop="name" label="企业比例"> </el-table-column>
      <el-table-column prop="statu" label="企业缴纳">
				<template slot-scope="scope">
					<el-input
					  placeholder="请输入内容"
					  v-model="scope.row.statu"
					  :disabled="true">
					</el-input>

				</template>
			</el-table-column>
      <el-table-column prop="" label="个人基数"> </el-table-column>
      <el-table-column prop="gb" label="个人比例"> </el-table-column>
      <el-table-column prop="name" label="个人缴纳">
				<template slot-scope="scope">
					<el-input
					  placeholder="请输入内容"
					  v-model="scope.row.gj"
					  :disabled="true">
					</el-input>

				</template>
			</el-table-column>
    </el-table>
    <!-- 表格 -->

		<!-- 输入框 -->
		<div class="inp">
      <div class="a">
        <p>社保备注</p>
        <el-input
				  type="textarea"
				  :rows="2"
				  placeholder="请输入内容"
				  v-model="textarea">
				</el-input>
      </div>
      <div class="a">
        <p>公积金城市</p>
        <el-select v-model="value11" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value1" :label="item.label" :value="item.value1"> </el-option>
        </el-select>
      </div>
      <div class="a">
        <p>公积金基数</p>
       <el-input placeholder="请输入内容" v-model="inputt"></el-input>
			 <p>(基数范围是2273~25401)</p>
      </div>
      <div class="a">
        <p>企业比例</p>
        <el-input placeholder="请输入内容" v-model="inputt1"></el-input>
        <p>(比例范围是5%~12%,推荐12%)</p>
      </div>
      <div class="a">
        <p>个人比例</p>
         <el-input placeholder="请输入内容" v-model="inputt2"></el-input>
        <p>(比例范围是5%~12%,推荐12%)</p>
      </div>
      <div class="a">
        <p>公积金缴纳  </p>
				<p>个人</p>
        <el-input placeholder="请输入内容" v-model="inpu"></el-input>
        <p>公司</p>
        <el-input placeholder="请输入内容" v-model="inpu"></el-input>
				<p>(比例范围是5%~12%,推荐12%)</p>
      </div>
      <div class="a">
        <p>公积金备注  </p>
				<el-input
				  type="textarea"
				  :rows="2"
				  placeholder="请输入内容"
				  v-model="textareaa">
				</el-input>
      </div>
      <div class="a">
        <el-button type="primary">保存</el-button>
        <el-button>取消</el-button>
      </div>
    </div>
		<!-- 输入框 -->
  </div>
</template>

<script>
import { securitylock ,securitylocktab} from '../api/security'
export default {
  data() {
    return {
			textarea:'6432',
      id: '',
      img: '',
      value: false,
      value1: false,
      options: '',
      input: 0,
			tableData: [{
            date: '10000',
            name: '养老',
            address: '16%',
						statu:1600.00,
						gb:'8%',
						gj:'800.00'
          }, {
            date: '10000',
            name: '医疗',
            address: '10%',
						statu:1000.00,
						gb:'5%',
						gj:'500.00'
          }, {
            date: '10000',
            name: '失业',
            address: '0.8%',
						statu:80.00,
						gb:'0.2%',
						gj:'20.00'
          }, {
            date: '10000',
            name: '工伤',
            address: '0.3%',
						statu:30.00,
          },
					{
            date: '10000',
            name: '生育',
            address: '0.8%',
						statu:80.00
          },
					{
            date: '10000',
            name: '大病',
            address: '0%',
						statu:0.00,
						gb:'0%',
						gj:'0.00'
          }],
					value11:'北京',
					inputt:'10000',
					inputt1:'0.12',
					inputt2:'0.12',
					inpu:'12.00',
					textareaa:'1-30个字符',
    }
  },
  created() {
    this.id = this.$route.params.id
    console.log(this.id)

    securitylock(this.id).then((res) => {
      console.log(res)
      this.img = res.data.staffPhoto
    }),

		securitylocktab(this.id).then(res=>{
			console.log(res);
		})
  }
}
</script>

<style lang="scss" scoped>
.title {
  width: 650px;
  height: 200px;
  // background-color: pink;
  display: flex;
  .img {
    width: 100px;
    height: 100px;
    // background-color: #ccc;
    margin-top: 20px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}
.text {
  height: 50px;
  display: flex;
  align-items: center;
  // background-color: palegoldenrod;
  span {
    width: 50px;
    height: 20px;
    background-color: #67c23a;
    text-align: center;
    line-height: 20px;
    border-radius: 5px;
    color: #fff;
    font-size: 15px;
  }
}
.t {
  margin-top: 60px;
  margin-left: -70px;
}
.swice {
  margin-top: 130px;
  margin-left: -400px;
  display: flex;
}

.inp {
  width: 600px;
  height: 300px;
  // background-color: pink;
}
.a {
  display: flex;
  align-items: center;
  margin-top: 20px;
	width: 900px;
}
.el-input {
  width: 220px !important;
  height: 30px;
}
.el-textarea{
	width: 300px;
}
</style>
