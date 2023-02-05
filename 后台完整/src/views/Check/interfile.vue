<template>
  <div>
    <!-- 考勤归档 -->
    <mbx></mbx>

    <div class="box">
      <el-tabs v-model="activeName">
        <el-tab-pane label="员工历史归档" name="first"> 改年份无归档报表 </el-tab-pane>
      </el-tabs>
      <div class="tiem">
        <el-date-picker v-model="value3" type="year" placeholder="2023"> </el-date-picker>
      </div>
    </div>
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
			value3:'',
    }
  }
}
</script>


<style lang="scss" scoped>
.box{
	display: flex;
	justify-content: space-between;
}
</style>