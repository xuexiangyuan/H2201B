<template>
	<div class="box">
		<!-- 日历 -->
		<el-card class="box-card">
      <div class="box-cardson">
				<div class="title">工作日历</div>

				<el-calendar v-model="value"></el-calendar>
			</div>
    </el-card>


		<el-card class="box-cardtow">
      <div class="box-cardson">
					<div class="text">
						流程申请
					</div>
					<div class="btn">
						<el-button >加班离职</el-button>
						<el-button >请假调休</el-button>
						<el-button >申请列表</el-button>
						<el-button >我的信息</el-button>
					</div>
			</div>
    </el-card>
	</div>
</template>

<script>
export default {
	data() {
		return {
			 value: new Date()
		}
	},
}
</script>

<style lang="scss" scoped>
.box{
	display: flex;
	justify-content: space-between;
}
.box-card{
	display: flex;
	width: 49%;
	height: 400px;
	margin-top: 20px;
}
.box-cardtow{
	width: 49%;
	height: 170px;
	margin-top: 20px;
}

.text{
	display: flex;
	width: 70px;
	border-bottom: 3px solid #8A97F8;
}
.btn{
	display: flex;
	margin-top: 30px;

}
</style>