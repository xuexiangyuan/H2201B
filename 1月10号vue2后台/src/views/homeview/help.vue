<template>
	<div>
		<!-- 帮助 -->
		 <el-card class="box-card">
      <div class="box-cardson">
				<h1>帮助链接</h1>
				<div class="xian"></div>

				<ul>
					<li>
						<img src="@/assets/logo.png" alt="">
						<p>入门指南</p>
					</li>
					<li>
						<img src="@/assets/logo.png" alt="">
						<p>在线帮助手册</p>
					</li>
					<li>
						<img src="@/assets/logo.png" alt="">
						<p>联系技术支持</p>
					</li>
				</ul>
			</div>
    </el-card>
	</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
}
</script>


<style lang="scss" scoped>
.box-card{
	width: 49%;
	margin-left: 50%;
	margin-top: -120px;
}
.xian{
		width: 76px;
		height: 5px;
		margin-top: 10px;
		background-color: #8A97F8;
	}
	ul{
		margin-top: 20px;
		// margin-left: 50px;
		display: flex;
		li{
			width: 25%;
			height: 100px;
			// background-color: pink;
			margin-left: 30px;
			text-align: center;
			img{
				width: 70px;
				height: 70px;
				margin-left: 10px;
				border-radius: 50%;
				background-color: #ccc;
			}
		}
	}
</style>