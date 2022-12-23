<template>
  <div class="home">
    <div class="title">
      <img src="../../public/head_bg.png" alt="">
      <p>大数据可视化系统数据分析通用模板</p>
      <div class="tiem">{{dateFormat(date)}}</div>
    </div>

    <!-- <div id="main"></div> -->
    <!-- 分模块 -->
   <div class="box">
    <!-- 左边模块 -->
      <div class="left">
        <div class="left-one" id="main">

        </div>
        <div class="left-tow" id="main-one">

        </div>
      </div>
      <!-- 中间模块 -->
      <div class="center">
        <div class="center-one">
            <div class="center-one-title">
              <div class="text">
                <div><p>业绩总览</p></div>
                <div class="price"><h1>30500万</h1></div>
              </div>
              <div class="chart">
                <div class="chart1" id="chart1"> </div>
                <div class="chart2" id="chart2"> </div>
                <div class="chart3" id="chart3"> </div>
              </div>
            </div>
            <div class="center-one-one" id="centerone">

            </div>
        </div>
        <div class="center-tow" id="centertow">

        </div>
      </div>
      <!-- 右边模块 -->
      <div class="right">
        <div class="right-one" id="right-one">

        </div>
        <div class="right-tow">
          <table >
           
              <thead>
                <th></th>
                <th>字段</th>
                <th>字段</th>
                <th>字段</th>
                <th>字段</th>
              </thead>
              <tbody>
                <tr>
                  <td class="zd">字段</td>
                  <td>8090</td>
                  <td>19.80%</td>
                  <td>22</td>
                  <td>368</td>
                </tr>
                <tr>
                  <td class="zd">字段</td>
                  <td>7506</td>
                  <td>6.70%</td>
                  <td>22</td>
                  <td>339</td>
                </tr>
                <tr>
                  <td class="zd">字段</td>
                  <td>3261</td>
                  <td>32.30%</td>
                  <td>10</td>
                  <td>325.7</td>
                </tr>
                <tr>
                  <td class="zd">字段</td>
                  <td>1993</td>
                  <td>201%</td>
                  <td>10</td>
                  <td>199</td>
                </tr>
              </tbody>
          </table>
        </div>
        <div class="right-three" id="right-three">

        </div>
      </div>
   </div>
   <!-- 分模块 -->
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  data() {
    return {
      date:new Date(),
      // tableData: [{
      //       date: '2016-05-02',
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1518 弄'
      //     }, {
      //       date: '2016-05-04',
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1517 弄'
      //     }, {
      //       date: '2016-05-01',
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1519 弄'
      //     }, {
      //       date: '2016-05-03',
      //       name: '王小虎',
      //       address: '上海市普陀区金沙江路 1516 弄'
      //     }]
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
      },

      leftone(){
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
    left: '20%',
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
        borderRadius:20,
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
        borderRadius:15
      },
    }
  ]
};
option && myChart.setOption(option);
      },

      lefttow(){
        var chartDom = document.getElementById('main-one');
        var myChart = echarts.init(chartDom);
        var option;

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
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              // Use axis to trigger tooltip
              type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
          },
          legend: {
            textStyle:{
             color:'#8197B6'
            }
          },
          grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['字段1', '字段2', '字段3', '字段4', '字段5', '字段6', '字段7','字段8','字段9'],
            color:'#fff',
            axisLabel:{
              interval:0,
              color:'#8197B6'
            },
           
          },
          yAxis: {
            type: 'value',
            axisLabel:{  //修改刻度标签里面的文字颜色设置为白色
            color:'#8197B6'
            }
          },
          series: [
            {
              name: '字段1',
              type: 'bar',
              stack: 'total',
               
              label: {
                show: false
              },
              emphasis: {
                focus: 'series'
              },
              data: [0, 0, 100, 0, 0, 100, 0,0,20]
            },
            {
              name: '字段2',
              type: 'bar',
              stack: 'total',
              label: {
                show: false
              },
              emphasis: {
                focus: 'series'
              },
              data: [500, 550, 500, 50, 260, 100, 250,260,2500]
            },
            {
              name: '字段3',
              color:'#F5804D',
              type: 'bar',
              stack: 'total',
              label: {
                show: false
              },
              emphasis: {
                focus: 'series'
              },
              data: [100, 130, 20, 20, 30, 100, 100,0,160]
            },
            
            
          ]
        };

        option && myChart.setOption(option);

      },

      centerchart1(){
         var chartDom = document.getElementById('chart1');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          title: {
            text: '81%',
            left: '40px',
            top: 56,
            textStyle:{
              color:'#fff'
            }
          },
          visualMap: {
            show: false,
           },
           series: [
    {
      type: 'pie',
      //环形显示饼状图，实际上显示的是50-80之间的部分
      //上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑
      radius: ['60%', '80%'],
      center: ['50%', '50%'],
      data: [   
      //itemSyle是单项的背景颜色设置。
        { value: 80, itemStyle: { color: '#EAFF00' } },
        { value: 40, itemStyle: { color: '#618CB9' } },
      ],
      label: {
        //将视觉引导图关闭
        show: false,
      },
      itemStyle:{
      	//设置的是每项之间的留白
        borderWidth:1,
        // borderColor:'#fff'
      },
      // 初始化echarts的动画效果
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    }
  ]
        }
        option && myChart.setOption(option);
      },

      centerchart2(){
         var chartDom = document.getElementById('chart2');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          title: {
            text: '17%',
            left: '40px',
            top: 56,
            textStyle:{
              color:'#fff'
            }
          },
          visualMap: {
            show: false,
           },
           series: [
    {
      type: 'pie',
      //环形显示饼状图，实际上显示的是50-80之间的部分
      //上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑
      radius: ['60%', '80%'],
      center: ['50%', '50%'],
      data: [   
      //itemSyle是单项的背景颜色设置。
        { value: 10, itemStyle: { color: '#EA4D4D' } },
        { value: 50, itemStyle: { color: '#618CB9' } },
      ],
      label: {
        //将视觉引导图关闭
        show: false,
      },
      itemStyle:{
      	//设置的是每项之间的留白
        borderWidth:1,
        // borderColor:'#fff'
      },
      // 初始化echarts的动画效果
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    }
  ]
        }
        option && myChart.setOption(option);
      },

       centerchart3(){
         var chartDom = document.getElementById('chart3');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          title: {
            text: '2%',
            left: '40px',
            top: 56,
            textStyle:{
              color:'#fff'
            }
          },
          visualMap: {
            show: false,
           },
           series: [
    {
      type: 'pie',
      //环形显示饼状图，实际上显示的是50-80之间的部分
      //上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑
      radius: ['60%', '80%'],
      center: ['50%', '50%'],
      data: [   
      //itemSyle是单项的背景颜色设置。
        { value: 6, itemStyle: { color: '#3A5FE4' } },
        { value: 100, itemStyle: { color: '#618CB9' } },
      ],
      label: {
        //将视觉引导图关闭
        show: false,
      },
      itemStyle:{
      	//设置的是每项之间的留白
        borderWidth:1,
        // borderColor:'#fff'
      },
      // 初始化echarts的动画效果
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    }
  ]
        }
        option && myChart.setOption(option);
      },

      centerchart11(){

var chartDom = document.getElementById('centerone');
var myChart = echarts.init(chartDom);
var option;

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
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    textStyle:{
      color:'#8197b6'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['2016', '2017', '2018', '2019'],
      color:"#fff",
      axisLabel:{
        interval:0,
        color:'#8197b6'
      },
      splitLine:{
        show:false
      }
      
    },
  ],
  yAxis: [
    {
      type: 'value',
      name:'单位万',
      axisLabel:{
        // interval:0,
        color:'#8197b6'
      },
      splitLine:{
        show:false
      }
    },
      {
      type: 'value',
      name: '增速',
      min: -12,
      max: 9,
      interval: 5,
      axisLabel: {
        formatter: '{value} %',
        color:'#8197b6'
      },
      
    }
    
  ],
  series: [
    {
      name: '字段1',
      // color:''
      type: 'bar',
      emphasis: {
        focus: 'series'
      },
      data: [36, 36, 36, 36, 36, 36, 36],
      itemStyle:{
        borderRadius:20,
        color: new echarts.graphic.LinearGradient(0,0,0,1,[{
          offset:0,
          color:'#82D271'
        },{
          offset:1,
          color:'#0EBCB3'
        }])
      }
    },
    {
      name: '字段2',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series'
      },
      data: [16, 16, 16, 16, 16, 16, 16],
      itemStyle:{
        borderRadius:20,
        color: new echarts.graphic.LinearGradient(0,0,0,1,[{
          offset:0,
          color:'#2889F6'
        },{
          offset:1,
          color:'#6056F1'
        }])
      }
    },

    {
      name: '字段3',
      type: 'bar',
      data: [12, 12, 12, 12, 12, 12, 12],
      emphasis: {
        focus: 'series'
      },
       itemStyle:{
        borderRadius:20,
        color: new echarts.graphic.LinearGradient(0,0,0,1,[{
          offset:0,
          color:'#FAC00D'
        },{
          offset:1,
          color:'#F68C40'
        }])
      }
    },
    {
      name: '字段4',
      type: 'line',
      data: [30, 15, 40, 50],
      color:'#2A85E9',
      smooth:true,
      emphasis: {
        focus: 'series'
      }
    },
    {
      name: '字段5',
      type: 'line',
      data: [30, 27, 50, 10],
      color:'#E6B617',
      smooth:true,
      emphasis: {
        focus: 'series'
      }
    },
    {
      name: '字段6',
      type: 'line',
      data: [30, 45, 40, 35],
      color:'#78C272',
      smooth:true,
      emphasis: {
        focus: 'series'
      }
    }
  ]
};

option && myChart.setOption(option);

      },
      
      centertow(){
        var chartDom = document.getElementById('centertow');
        var myChart = echarts.init(chartDom);
        var option;
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
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['字段1','字段2'],
     textStyle:{
      color:'#8197b6'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['17年3月', '17年6月', '17年12月', '18年3月', '18年6月', '18年9月', '18年12月','19年3月','19年6月','19年9月','19年12月'],
    axisLabel:{
              interval:0,
              color:'#8197B6'
            },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
        formatter: '{value} %',
        color:'#8197b6'
      },
  },
  series: [
   
    {
      symbol: "none",
      smooth:true,
      name: '字段1',
      type: 'line',
      stack: 'Total',
      data: [10, 0, 20, 30, 40, 100, 65,60,50,60,90],
      color:'#E8787F',
      shadowBlur: 20,
      shadowColor: 'rgba(148, 95, 185, 0.5)',
     
    },
    {
      symbol: "none",
      smooth:true,
      name: '字段2',
      type: 'line',
      stack: 'Total',
      data: [30, 40, 50, 40, 50, 60, 65,30,70,60,50],
      color:'#C7CC7E'
    },
   
  ]
};


        option && myChart.setOption(option);
      },

      rightone(){

var chartDom = document.getElementById('right-one');
var myChart = echarts.init(chartDom);
var option;

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
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    padding:[30,50,0,0],
    textStyle:{
      color:'#8197b6'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['2016', '2017', '2018', '2019'],
      color:"#fff",
      axisLabel:{
        interval:0,
        color:'#8197b6'
      },
      splitLine:{
        show:false
      }
      
    },
  ],
  yAxis: [
    {
      type: 'value',
      name:'单位万',
      axisLabel:{
        // interval:0,
        color:'#8197b6'
      },
      splitLine:{
        show:false
      }
    },
      {
      type: 'value',
      name: '增速',
      min: 0,
      max: 30,
      interval: 5,
      axisLabel: {
        formatter: '{value} %',
        color:'#8197b6'
      },
      
    }
    
  ],
  series: [
   
    {
      name: '字段1',
      type: 'bar',
      data: [15100, 20000, 25000, 30100, 12, 12, 12],
      barWidth:'30%',
      emphasis: {
        focus: 'series'
      },
       itemStyle:{
        borderRadius:20,
        color: new echarts.graphic.LinearGradient(0,0,0,1,[{
          offset:0,
          color:'#FAC00D'
        },{
          offset:1,
          color:'#F68C40'
        }])
      }
    },
    
    {
      name: '字段2',
      type: 'line',
      data: [0, 10100, 20000, 30000],
      color:'#CA2E11',
      smooth:true,
      emphasis: {
        focus: 'series'
      }
    }
  ]
};

option && myChart.setOption(option);

      },

      rightthree(){
         var chartDom = document.getElementById('right-three');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
          title: {
            text: '5132',
            left: 'center',
            top: 90,
            textStyle:{
              color:'#fff'
            },
             subtext:'总体'
          },
          visualMap: {
            show: false,
           },
           series: [
            {
              type: 'pie',
              //环形显示饼状图，实际上显示的是50-80之间的部分
              //上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑
              radius: ['60%', '80%'],
              center: ['50%', '50%'],
              roseType: 'area',
              data: [   
              //itemSyle是单项的背景颜色设置。
                { value: 50, name: '1055', itemStyle: { color: '#83F967' }, },
                { value: 70,name: '1532万', itemStyle: { color: '#FBFE27' } },
                { value: 100, name: '1924万', itemStyle: { color: '#FE5050' } },
              ],
              label: {
                //将视觉引导图关闭
                show: false,
                normal: {
                 textStyle: {
                       color: '#FBFE27',	// 提示文字颜色
                       fontSize: 18		// 提示文字大小
                 } 
           }
              },
              labelLine: {                    // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
	            normal: {
	                show: true,             // 是否显示视觉引导线。
	                length: 15,             // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
	                length2: 10,            // 视觉引导项第二段的长度。
	                lineStyle: {            // 视觉引导线的样式
	                    color: '#325886',
	                    //width: 1
	                }
	            }
	        },
              itemStyle:{
              	//设置的是每项之间的留白
                borderWidth:1,
                // borderColor:'#fff'
              },
              // 初始化echarts的动画效果
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }
          ]
                }
                option && myChart.setOption(option);
              },
  },
  mounted() {
    let _this = this// 声明一个变量指向Vue实例this，保证作用域一致
      this.timer = setInterval(() => {
       _this.date = new Date(); // 修改数据date
       }, 1000)

  this.leftone()
  this.lefttow()
  this.centerchart1()
  this.centerchart2()
  this.centerchart3()
  this.centerchart11()
  this.centertow()
  this.rightone()
  this.rightthree()

  },
  beforeDestroy() {
       if (this.timer) {
        clearInterval(this.timer); // 在Vue实例销毁前，清除定时器
    }
  

  },
}


</script>

<style lang="scss" scoped>
table{
  width: 100%;
  height: 100%;
}
thead{
  background-color: rgba(8, 46, 126, 0.3);
  color: #fff;
  height: 30px;
}
.zd{
  color: #fff;
  font-weight: 600;
  background-color: rgba(8, 46, 126, 0.3);
}
td{
  color: #81A2B9;
}

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
// #main{
//   width: 400px;
//   height: 300px;
//   background-color: rgba(56, 91, 167, 0.3);
// }
//模块的盒子
.box{
  width: 98%;
  height: 630px;
  // background-color: pink;
  display: flex;
  justify-content: space-between;
  padding: 0px 15px;
}
.left{
  width: 28%;
  height: 100%;
  // background-color: paleturquoise;
  display: flex;
  flex-wrap: wrap;
  .left-one{
    width: 100%;
    height: 60%;
    background-color: rgba(56, 91, 167, 0.3);
  }
  .left-tow{
    width: 100%;
    height: 35%;
    background-color: rgba(56, 91, 167, 0.3);
    margin-top: 10px;
  }
}
.center{
  width: 40%;
  height: 100%;
  // background-color: lightcoral;
  
  display: flex;
  flex-wrap: wrap;
  .center-one{
    width: 100%;
    height: 60%;
    // background-color: palevioletred;
    display: flex;
    flex-wrap: wrap;
    .center-one-title{
      width: 100%;
      height: 35%;
      background-color: rgba(56, 91, 167, 0.3);
      display: flex;
      justify-content: space-between;
      .text{
        width: 40%;
        height: 100%;
        // background-color: pink;
        display: flex;
        p{
          margin-top: 20px;
          margin-left: 20px;
          color: #fff;
        }
        .price{
          // display: flex;
          margin-top: 10px;
          h1{
            margin-top: 60px;
            color: #FEF000;
            font-size: 30px;
            margin-right: 50px;
          }
        }
      }
      .chart{
        width: 60%;
        height: 100%;
        // background-color: palegreen;
        display: flex;
        .chart1{
          width: 33%;
          height: 100%;
          // background-color: gold;
        }
        .chart2{
          width: 33%;
          height: 100%;
          // background-color: salmon;
        }
        .chart3{
          width: 33%;
          height: 100%;
          // background-color: cadetblue;
        }
      }
    }


    .center-one-one{
      width: 100%;
      height: 60%;
      // background-color: skyblue;
      background-color: rgba(56, 91, 167, 0.3);
      margin-top: 20px;
    }
  }
  .center-tow{
    width: 100%;
    height: 35%;
    // background-color: skyblue;
    background-color: rgba(56, 91, 167, 0.3);
    margin-top: 10px;
  }
}
.right{
  width: 28%;
  height: 100%;
  // background-color: lightcyan;
  display: flex;
  flex-wrap: wrap;
  .right-one{
    width: 100%;
    height: 31%;
    background-color: rgba(56, 91, 167, 0.3);
  }
  .right-tow{
    width: 100%;
    height: 31%;
    // background-color: palegreen;
    background-color: rgba(56, 91, 167, 0.3);
    margin-top: 10px;
  }
  .right-three{
    width: 100%;
    height: 31%;
    background-color: rgba(56, 91, 167, 0.3);
    margin-top: 10px;
  }
}
</style>