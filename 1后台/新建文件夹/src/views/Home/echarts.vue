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
          text: '人力资源基础绩效表'
        },
        // legend: {
        //   data: ['Allocated Budget', 'Actual Spending']
        // },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '考勤', max: 5000 },
            { name: '工资', max: 70000 },
            { name: '社保', max: 98000 },
            { name: '工作效率', max: 26000 },
            { name: '知识分享', max: 42000 },
            { name: '代码行数', max: 21000 }
          ]
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [500, 1000, 97000, 5000, 42000, 21000],
                name: 'Allocated Budget'
              },
              {
                value: [1500, 20000, 28000, 8000, 12000, 6000],
                name: 'Actual Spending'
              },
              {
                value: [3500, 50000, 70000, 19000, 30000, 15000],
                name: '',
                 lineStyle: { // 设置线条的style等
                  normal: {
                  color: '#FAC858', // 折线线条颜色:红色
             },
           }
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
