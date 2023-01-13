<template>
  <div>
    <!-- 查看 -->
    <mbx></mbx>
    <header>
      <h3>申请请假</h3>
      <div class="list">
        <div class="img">
          <img src="@/assets/猫.png" alt="" />
        </div>
        <div class="text">
          <el-tag type="danger" class="tag">离职</el-tag>
          <p>入职时间：2018-11-04 最新工资：400</p>
          <p>当月基本工资/当月岗位工资:200/200</p>
        </div>
      </div>
    </header>

		<!-- 津贴 -->
		<h5>津贴</h5>
		<div class="jt">
			<table>
				<thead>
					<th>津贴类型</th>
					<th>补贴金额</th>
					<th>津贴类型</th>
					<th>补贴金额</th>
				</thead>
				<tbody>
					<tr>
						<td>交通补助</td>
						<td>0</td>
						<td>通讯补助</td>
						<td>0</td>
					</tr>
					<tr>
						<td>午餐补助</td>
						<td>0</td>
						<td>住房补助</td>
						<td>0</td>
					</tr>
				</tbody>
			</table>
		</div>


		<div class="title">
			<h5>社保公积金</h5>
			<p>企业缴纳</p>
			<p>个人缴纳</p>
		</div>
		<div class="jt">
			<table>
				<thead>
					<th>缴费项目</th>
					<th>基数</th>
					<th>企业缴纳</th>
					<th>个人缴纳</th>
				</thead>
				<tbody>
					<tr>
						<td>社保</td>
						<td> </td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>公积金</td>
						<td> </td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>缴费合计</td>
						<td></td>
						<td></td>
						<td>0</td>
					</tr>
				</tbody>
			</table>
		</div>


		<div class="input">
			<div class="inp">
				<h5>实际出勤天数  (正式):</h5>
				<el-input class="inpu" placeholder="0" :disabled="true"/>
			</div>
			<div class="inp">
				<h5>计薪天数  (正式):</h5>
				<el-input class="inpu" placeholder="0" :disabled="true"/>
			</div>
		</div>

    <!-- 审批记录 -->
    <div class="record">
      <div class="record-title">
        <h5>招聘日程</h5>
      </div>
      <div class="tiem">
				<div class="items">
					<div>
						<h5>HR专员</h5>
						<p>2018-12-3 3:30</p>
					</div>
					<div>
						<h5>HR专员</h5>
						<p>2018-12-3 3:30</p>
					</div>
				</div>
				<div class="steps">
        <div style="height: 200px">
          <el-steps direction="vertical" :active="1">
            <el-step title="放弃"></el-step>
            <el-step title="放弃"></el-step>
            <el-step title=""></el-step>
          </el-steps>
        </div>
      </div>
			</div>

    </div>
  </div>
</template>

<script>
import mbx from '@/components/mbx.vue'
export default {
  components: {
    mbx
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 70%;
  height: 200px;
  // border-bottom: 1px solid #ccc;
}
.list {
  width: 100%;
  height: 170px;
  // background-color: pink;
  display: flex;
  align-items: center;
  .img {
    width: 80px;
    height: 80px;
    margin-left: 20px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .text {
    margin-left: 20px;
    p {
      margin-top: 10px;
    }
  }
}
.content {
  margin-top: 20px;
  margin-left: 100px;
  ul {
    li {
      margin-top: 20px;
    }
  }
}
.content-text {
  display: flex;
  align-items: center;
  .content-title {
    color: #9e9da0;
  }
  span {
    width: 1px;
    height: 10px;
    border-left: 1px solid #9e9da0;
  }
  .content-foolt {
    margin-left: 10px;
  }
}

.record {
  width: 27%;
  height: 300px;
  // background-color: pink;
  margin-left: 71%;
  margin-top: -700px;
  .record-title {
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #d1d1d1;
    h5 {
      line-height: 50px;
    }
  }
	.tiem{
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		.items{
			margin-top: 10px;
			text-align: center;
			div{
				h5{
					margin-bottom: 20px;
				}
				margin-top: 50px;
			}
		}
	}
}

.tag{
	background-color: #F56C6C;
	color: #fff;
}

.jt{
	width: 800px;
	height: 130px;
	background-color: #F9F9F9;
}

table{
	width: 100%;
	text-align: center;
	tr{
	margin-top: 10px;
}
}
.title{
	width: 800px;
	height: 50px;
	display: flex;
	align-items: center;
	// justify-content: space-evenly;
	p{
		margin-left: 100px;
	}
	// justify-content: space-between;
}

.input{
	width: 500px;
	height: 130px;
	// background-color: pink;
	margin-top: 30px;
}
.inp{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 30px;
}
.inpu{
	width: 350px;
}
</style>
