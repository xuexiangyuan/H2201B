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
          <h5>{{name}}</h5>
          <p>部门：{{departmentName}}</p>
          <p>入职时间：2018-11-04</p>
        </div>
      </div>
    </header>

    <div class="content">
      <ul>
        <li>
          <div class="content-text">
            <p class="content-title">申请类型：</p>
            <span></span>
            <p class="content-foolt">请假</p>
          </div>
        </li>
        <li>
          <div class="content-text">
            <p class="content-title">请假类型：</p>
            <span></span>
            <p class="content-foolt">事假</p>
          </div>
        </li>
        <li>
          <div class="content-text">
            <p class="content-title">申请单位：</p>
            <span></span>
            <p class="content-foolt">天</p>
          </div>
        </li>
        <li>
          <div class="content-text">
            <p class="content-title">开始时间：</p>
            <span></span>
            <p class="content-foolt">2019-09-16</p>
          </div>
        </li>
        <li>
          <div class="content-text">
            <p class="content-title">结束时间：</p>
            <span></span>
            <p class="content-foolt">2019-09-17</p>
          </div>
        </li>
        <li>
          <div class="content-text">
            <p class="content-title">请假时长：</p>
            <span></span>
            <p class="content-foolt">1</p>
          </div>
        </li>
        <li>
          <div class="content-text">
            <p class="content-title">申请事由：</p>
            <span></span>
            <p class="content-foolt">个人原因</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- 审批记录 -->
    <div class="record">
      <div class="record-title">
        <h5>审批记录</h5>
      </div>
      <div class="tiem">
				<div class="items">
					<p>2019-09-23</p>
					<p>2019-09-23</p>
					<p>2019-09-23</p>
				</div>
				<div class="steps">
        <div style="height: 200px">
          <el-steps direction="vertical" :active="1">
            <el-step title="zbz发起申请"></el-step>
            <el-step title="itcast审批通过"></el-step>
            <el-step title="a01审批通过"></el-step>
          </el-steps>
        </div>
      </div>
			</div>

    </div>
  </div>
</template>

<script>
import mbx from '@/components/mbx.vue'

import {examinelock}from '../api/examine'
export default {
  components: {
    mbx
  },
  data() {
    return {
			id:'',
			name:'',
			departmentName:'',
			procData:''
		}
  },
	created() {
		this.id=this.$route.params.id
		examinelock(this.id).then(res=>{
			console.log(res);
			this.name=res.data.data.username
			this.departmentName=res.data.data.departmentName
			this.procData=res.data.data.procData
		})
	},
}
</script>

<style lang="scss" scoped>
header {
  width: 70%;
  height: 200px;
  border-bottom: 1px solid #ccc;
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
  margin-top: -500px;
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
			p{
				margin-top: 50px;
			}
		}
	}
}
</style>
