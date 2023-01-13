<template>
  <div>
    <!-- 首页 -->

				<mbx></mbx>
	

    <el-card class="box-card">
      <div class="box-cardson">
				<div class="img">
					<img src="@/assets/猫.png" alt="">
				</div>
				<div class="text">
					<p>早安, hello, 祝你开心每一天</p>
					<p class="hello">hello | 传智播客-总裁办</p>
				</div>
			</div>
    </el-card>

		<!-- 日历 -->
		<rili></rili>
		<!-- 日历 -->

		<!-- echarts -->
		<echarts></echarts>
		<!-- echarts -->

		<!-- 公告 -->
		<announcement></announcement>
		<!-- 公告 -->

		<!-- 帮助 -->
		<help></help>
		<!-- 帮助 -->
  </div>
</template>

<script>
import rili from './Rili.vue'
import echarts from './echarts.vue'
import announcement from './announcement.vue'
import help from './help.vue'
import mbx from '@/components/mbx.vue'
export default {

	data() {
		return {

		}
	},
	components:{
		rili,
		echarts,
		announcement,
		help,
		mbx,
	}
}
</script>


<style lang="scss" scoped>

.mbx{
	// height: 40px;
}

.box-card{
	margin-top: 20px;
}
.box-cardson{
	display: flex;
	align-items: center;
}
.img{
	img{
		width: 100px;
		height: 100px;
		border-radius:50%;
	}
}
.text{
	p{
		margin-left: 20px;
		margin-top: 10px;
		font-size: 20px;
	}
	.hello{
		font-size: 20px;
		color: #8A9099;
	}
}
</style>