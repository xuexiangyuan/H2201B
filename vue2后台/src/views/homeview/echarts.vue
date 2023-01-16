<template>
  <div>
    <!-- echarts -->
    <el-card class="box-card">
      <div class="box-cardson">
        <div class="title">绩效指数</div>
        <div class="echarts" id="echarts"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data() {
    return {}
  },
  methods: {
    echarts() {
      var chartDom = document.getElementById('echarts')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        title: {
          text: '个人工作绩效'
        },
        // legend: {
        //   data: ['Allocated Budget', 'Actual Spending']
        // },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '考勤', max: 5000 },
            { name: '工资', max: 70000 },
            { name: '代码质量', max: 98000 },
            { name: '工作积极性', max: 26000 },
            { name: '加班时常', max: 42000 },
            { name: 'bug数量', max: 21000 }
          ]
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [0, 70000, 97000, 0, 0, 0],
                name: 'Allocated Budget'
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: 'Actual Spending'
              }
            ]
          }
        ]
      }

      option && myChart.setOption(option)
    }
  },
	mounted() {
		this.echarts()
	},
}
</script>

<style lang="scss" scoped>
.title {
  display: flex;
}
.box-card {
  margin-top: 20px;
  width: 49%;
  margin-left: 50%;
  margin-top: -200px;
}
.echarts{
	width: 400px;
	height: 400px;
	margin-left: 100px;
}
</style>
