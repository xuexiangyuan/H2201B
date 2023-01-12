<template>

  <div >
		<mbx></mbx>
    <!-- 流程 -->
    <div class="btn">
			<ul>
      <li>
        <p>请假</p>
        <span></span>
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
				<i class="el-icon-setting"></i>
      </li>
      <li>
        <p>加班</p>
        <span></span>
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
				<i class="el-icon-setting"></i>
      </li>
      <li>
        <p>离职</p>
        <span></span>
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
				<i class="el-icon-setting"></i>
      </li>
    </ul>
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
		return {
			value:true
		}
	},
}
</script>



<style lang="scss" scoped>
.btn {
  width: 100%;
  height: 130px;
  border: 1px solid #ccc;
  ul {
    display: flex;
    align-items: center;
    li {
      width: 160px;
      height: 60px;
      border: 1px solid #ccc;
      margin-top: 30px;
      margin-left: 30px;
      border-radius: 5px;
			display: flex;
			align-items: center;
			justify-content: space-around;
			span{
				width: 1px;
				height: 15px;
				border-left: 1px solid #ccc;
			}
			.el-icon-setting{
				color: #A5A5A7;
				margin-top: -30px;
			}
    }
  }
}
</style>
