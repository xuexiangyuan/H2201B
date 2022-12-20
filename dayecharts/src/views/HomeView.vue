<template>
  <div class="home">
    <div class="title">
      <img src="../../public/head_bg.png" alt="">
      <p>大数据可视化系统数据分析通用模板</p>
      <div class="tiem">{{dateFormat(date)}}</div>
    </div>

    <div id="main"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data() {
    return {
      date:new Date()
    }
  },
  methods: {
    dateFormat(time) {
          var date=new Date(time);
          var year=date.getFullYear();
          var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
          var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
          var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
          var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
          var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
          // 拼接
          return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
      }
  },
  mounted() {
    let _this = this// 声明一个变量指向Vue实例this，保证作用域一致
      this.timer = setInterval(() => {
       _this.date = new Date(); // 修改数据date
       }, 1000)


      var chartDom = document.getElementById('main');
      var myChart = echarts.init(chartDom);
      var option
      option = {
  title: {
    text: '标题名称',
     textStyle:{
       color:'#fff',
       fontWeight:'normal',
       fontSize:15,
       lineHeight:30,
     }
  },
  
  grid: {
    left: '15%',
    top: '10%',
    bottom: '10%',
    // containLabel: true 
  },
  xAxis: {
    show:false,
    // type: 'value',
    // boundaryGap: [0, 0.01]
  },
  yAxis: [
    {
    type: 'category',
    data: ['字段1', '字段2', '字段3', '字段4', '字段5', '字段6','字段7','字段8','字段9'],
    axisLine:{  //不显示y轴线条
      show:false
    },
    axisTick:{  //不显示刻度
      show:false
    },
    axisLabel:{  //修改刻度标签里面的文字颜色设置为白色
      color:'#fff'
    }
  },
  {
    data: ['1514', '1619', '1623', '1968', '2158', '2456','3506','4664','8390'],
    axisLine:{  //不显示y轴线条
      show:false
    },
    axisTick:{  //不显示刻度
      show:false
    },
    axisLabel:{  //修改刻度标签里面的文字颜色设置为白色
      color:'#fff'
    }
  }
  ],
  series: [
     {
      name: '条',
      type: 'bar',
      data: [25, 30, 34, 40, 43, 48,52,56,70],

      yAxisIndex:0,

      itemStyle:{  //修改第一组柱子的圆角
        barBorderRadius:20,
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{ 
          offset: 0,
          color: '#03C794'
        }, {
          offset: 1,
          color: '#0094F9'
        }]),
      },
      //柱子之间的距离
      barCategoryGap:50,
      //柱子的宽度
      barWidth:10,
      //显示柱子内的文字
      label:{
        show:true,
        //图形内显示百分比
        position:'right',
        //{c}会自动的解析为数据 data里面的数据
        formatter:'{c}%'
      }
    },
    {
      name: '框',
      type: 'bar',
      barCategoryGap:50,
      barWidth:15,
      yAxisIndex:1,
      data: [100, 100, 100, 100, 100, 100,100,100,100],
      itemStyle:{  //修改第一组柱子的圆角
        color:'none',
        borderColor:'#00c1de',
        borderWidth:3,
        barBorderRadius:15
      },
    }
  ]
};
option && myChart.setOption(option)
  },
  beforeDestroy() {
       if (this.timer) {
        clearInterval(this.timer); // 在Vue实例销毁前，清除定时器
    }
  

  },
}
</script>

<style lang="scss" scoped>

.home{
  width: 100%;
  height: 100%;
  background: url('../../public/bg.jpg');
  background-size:100% 100%;
}
.title{
  width: 100vw;
  height: 70px;
  img{
    width: 100%;
    height: 100%;
    position: relative;
  }
  p{
    position: absolute;
    top: 10px;
    left: 570px;
    color: #ffffff;
    font-size: 26px;
    font-weight: 800;
  }
  .tiem{
    position: absolute;
    top: 10px;
    right: 30px;
    font-size: 20px;
    color: #ffffff;
    
    // font-style:italic;
  }
}
@font-face {
    font-family: myFont;
    src: url('../../public/Digiface-Regular.ttf');
}

#main{
  width: 400px;
  height: 300px;
  background-color: rgba(56, 91, 167, 0.3);
}
</style>