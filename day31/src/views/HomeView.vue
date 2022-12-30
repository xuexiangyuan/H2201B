<template>
  <div class="home">
    <div class="titlee">
      <dv-decoration-8 style="width:400px;height:50px;" />
      <dv-decoration-5 class="title-center" style="width:700px;height:40px;" />"
      <div class="title-text">
        <h1>互联网创业全球布局看板</h1>
      </div>
      <dv-decoration-8 :reverse="true" style="width:400px;height:50px;" />
    </div>

    <div class="left">
      <div class="leftt">
        <p>慕课外卖用户总数</p>
        <p class="new">new Taal Cext</p>
        <h1>1,739,919</h1>
        <p class="meiri">每日增长率:73% <span>每月增长率:117.37%</span></p>
        <div id="left-one"></div>
      </div>
      <div class="left1">
        <p class="left1-title">慕课外卖用户年龄分布&平均年龄</p>
        <p class="new">new Taal Cext</p>
        <div class="left1-h1">
          <h1>30.08<span>岁</span></h1>
        </div>
        <div class="left-tow" id="left-tow"></div>
        <ul>
          <li>
            <h5>304.378</h5>
            <p>6.25</p>
          </li>
          <li>
            <h5>505.391</h5>
            <p>20.25</p>
          </li>
          <li>
            <h5>725.216</h5>
            <p>30.25</p>
          </li>
          <li>
            <h5>204.934</h5>
            <p>6.25</p>
          </li>
        </ul>
      </div>
      <div class="left1">
        <div class="bing" id="bing"></div>
        <div class="bingtitle">
          <p>慕课外卖登录设备</p>
          <p class="new">new Taal Cext</p>
        </div>
        <div class="bingtitle1">
          <h1>1,365,633<span>个</span></h1>
        </div>
        <ul class="ul">
          <li>
            <h5>522.041</h5>
            <p>6.25</p>
          </li>
          <li>
            <h5>471.645</h5>
            <p>20.25</p>
          </li>
          <li>
            <h5>371.947</h5>
            <p>30.25</p>
          </li>
        </ul>
      </div>

      <div class="left1">
        <div class="img">
          <img src="../assets/Snipaste.png" alt="">
        </div>
        <div class="imgtxte">
          <p>男性用户人数</p>
          <p class="new">new Taal Cext</p>
          <h1>869.913<span>人</span></h1>
        </div>
        <div class="imgg">
          <img src="../assets/Snipaste.png" alt="">
        </div>
        <div class="imgtxtee">
          <p>男性用户人数</p>
          <p class="new">new Taal Cext</p>
          <h1>869.913<span>人</span></h1>
        </div>
      </div>
      <div class="left1">
        <div class="qszk">
          <p>慕课外卖骑手概况</p>
          <p class="qszk-new">new Taal Cext</p>
        </div>
        <div class="general" id="general">

        </div>
      </div>
      <div class="left1">
        <div class="goods">
          <div class="goods-one">
            <p>当前热卖品类</p>
            <p class="goods-one-new">new Taal Cext</p>
          </div>
          <div class="goods-tow">
            <p>新标使用时间: 2020-10-25 13:55:56</p>
          </div>
        </div>
        <div class="goodsimg" id="goodsimg">

        </div>
      </div>
    </div>

   
    <div class="title-center-tow">
            <ul>
                <li>
                    <div class="img">
                        <img src="../assets/今日销售额.png" alt="">
                    </div>
                    <div class="text">
                        <p>今日销售额</p>
                        <p class="new">new Taal Cext</p>
                        <h3>56,998,472</h3>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="../assets/今日订单.png" alt="">
                    </div>
                    <div class="text">
                        <p>今日订单量</p>
                        <p class="new">new Taal Cext</p>
                        <h3>3,496,490</h3>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="../assets/今日交易用户.png" alt="">
                    </div>
                    <div class="text">
                        <p>今日交易用户数</p>
                        <p class="new">new Taal Cext</p>
                        <h3>758,349</h3>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="../assets/今日新增用户数量.png" alt="">
                    </div>
                    <div class="text">
                        <p>今日新增用户数</p>
                        <p class="new">new Taal Cext</p>
                        <h3>1,739,919</h3>
                    </div>
                </li>
            </ul>
            <div class="yes">
                <ul class="ul">
                    <li>
                        <div class="imgg">
                            <img src="../assets/对号.png" alt="">
                        </div>
                        <div class="yes-text">
                            <p class="zh">转化率</p>
                            <p class="bfb">13.40%</p>
                        </div>
                    </li>
                    <li>
                        <div class="imgg">
                            <img src="../assets/复制.png" alt="">
                        </div>
                        <div class="yes-text">
                            <p class="zh">下单率</p>
                            <p class="bfb">5.66%</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

         <!-- 头部标题子组件 -->
    <information />

    <!-- 下半部分 -->
    <list />
  </div>
</template>

<script>
import * as echarts from 'echarts';
import information from '../components/information.vue'
import list from '../components/child.vue'
export default {
  components:{
    information,
    list,
  },
  data() {
    return {

    }
  },
  methods: {
    leftone() {
      var chartDom = document.getElementById('left-one');
      var myChart = echarts.init(chartDom);
      var colors = ["#2A2B2D", "#909192"];
      var option;
      option = {
        title: {
          text: '',
          subtext: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '30%',
          top: '0',
          containLabel: true
        },
        xAxis: {
          show: false, //不显示x轴相关信息
        },
        yAxis: [
          {
            type: 'category',
            // data: ['html5'],
            axisTick: { show: false }, //不显示刻度线
            axisLabel: {
              color: "#000"
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            inverse: true

          },


        ],
        series: [
          {
            name: '条',
            // yAxisIndex:0,
            type: 'bar',
            data: [100, 70],
            // 修改第一条柱子的圆角
            itemStyle: {
              normal: {
                // barBorderRadius:20,
                color: function (params) {
                  //params 传递过来的柱子对象
                  // dataIndex 是当前柱子的索引
                  var num = colors.length;
                  return colors[params.dataIndex % num]
                }
              },
              // color 可以修改柱子的颜色
              // color:"orange"
            },
            // 柱子之间的间距
            barCategoryGap: 5,
            // 柱子之间的宽度
            barWidth: 20,
            // 显示柱子内的文字

          }
        ]
      };
      option && myChart.setOption(option);
    },

    lefttow() {
      var chartDom = document.getElementById('left-tow');
      var myChart = echarts.init(chartDom);
      var colors = ["#C0EB74", "#7B9F44"];
      var option;
      option = {
        title: {
          text: '',
          subtext: ''
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '35%',
          top: '0',
          containLabel: true
        },
        xAxis: {
          show: true, //不显示x轴相关信息
        },
        yAxis: [
          {
            type: 'category',
            // data: ['html5'],
            axisTick: { show: false }, //不显示刻度线
            axisLabel: {
              color: "#000"
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            inverse: true

          },


        ],
        series: [
          {
            name: '条',
            // yAxisIndex:0,
            type: 'bar',
            data: [100, 30],
            // 修改第一条柱子的圆角
            itemStyle: {
              normal: {
                // barBorderRadius:20,
                color: function (params) {
                  //params 传递过来的柱子对象
                  // dataIndex 是当前柱子的索引
                  var num = colors.length;
                  return colors[params.dataIndex % num]
                }
              },
              // color 可以修改柱子的颜色
              // color:"orange"
            },
            // 柱子之间的间距
            barCategoryGap: 5,
            // 柱子之间的宽度
            barWidth: 20,
            // 显示柱子内的文字

          }
        ]
      };
      option && myChart.setOption(option);
    },

    leftbing() {
      var chartDom = document.getElementById('bing');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          // trigger: 'item',
          // formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          top: 'bottom',
          data: []
        },

        series: [
          {
            name: 'Radius Mode',
            type: 'pie',
            radius: [0, 40],
            center: ['50%', '40%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 5
            },
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: true
              }
            },
            data: [{ value: 40 }, { value: 33 }, { value: 28 }]
          }
        ]
      };

      option && myChart.setOption(option);

    },

    letgeneral() {
      var chartDom = document.getElementById('general');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        legend: {
          data: ['Email', 'asd'],
          x:'130px',      //可设定图例在左、右、居中
          y:'80px',     //可设定图例在上、下、居中
          textStyle:{
          color:'#ccc'
          }
        },
        xAxis: {
          type: 'category',
           axisLabel: {
            //x轴文字的配置
            show: true,
            interval: 0,//使x轴文字显示全
           },
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ],
          
        },
        grid: {
      x: 30,
      y: 105,
      x2: 15,
      y2: 55,
      borderWidth: 1,
    },
        yAxis: {
          type: 'value',
          splitLine: {
        show: true,
        lineStyle:{
           color: ['#353638'],
           width: 1,
           type: 'solid'
      }
    }
        },
        series: [
          {
            symbol: "none",
            name: 'Email',
            data: [180, 270, 300, 310, 350, 370, 200, 300, 190, 500, 550, 250],
            type: 'line',
            smooth: true,

          },
          {
            symbol: "none",
            name: 'asd',
            data: [150, 220, 200, 190, 300, 100, 350, 260, 180, 300, 400, 150],
            type: 'line',
            smooth: true
          }
        ]
      };

      option && myChart.setOption(option);
    },

    letgoods(){
      var chartDom = document.getElementById('goodsimg');
var myChart = echarts.init(chartDom);
var option;

option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    splitLine: {
        show: true,
        lineStyle:{
           color: ['#353638'],
           width: 1,
           type: 'solid'
      }
    }
  },
  grid: {
      x: 30,
      y: 135,
      x2: 15,
      y2: 25,
      borderWidth: 1,
    },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      itemStyle: {
        color: '#D7F595'
      },
      backgroundStyle: {
        color: '#363636'
      }
    }
  ]
};

option && myChart.setOption(option);
    }
  },
  mounted() {
    this.leftone()
    this.lefttow()
    this.leftbing()
    this.letgeneral()
    this.letgoods()
  },

}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: #1C1C1C;
}

.titlee {
  width: 100%;
  height: 70px;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title-center {
    margin: auto;
    margin-top: 30px;
  }

  .title-text {
    width: 430px;
    height: 50px;
    // background-color: pink;
    position: fixed;
    top: 10px;
    left: 540px;
    color: #fff;
    font-size: 15px;
    text-align: center;
  }
}

.left {
  width: 400px;
  height: 600px;
  background-color: #424345;
  display: flex;
  flex-wrap: wrap;

  // flex-wrap: wrap;
  .leftt {
    width: 100%;
    height: 100px;
    background-color: #424345;
    color: #fff;

    p {
      margin-left: 20px;
      // margin-top: 5px;
    }

    h1 {
      margin-left: 16px;
      // margin-top: 5px;
    }

    .new {
      font-size: 10px;
    }

    .meiri {
      color: #A6C475;
      font-size: 10px;
      margin-top: -5px;
      span {
        color: #638634;
      }
    }

    #left-one {
      width: 100%;
      height: 50px;
      // background-color: pink;
    }
  }

  .left1 {
    width: 400px;
    height: 100px;
    background-color: #2A2B2D;
    margin-top: 5px;
  }

  .left1-title {
    // margin-top: 5px;
    margin-left: 20px;
    color: #fff;
    font-size: 15px;
  }

  .new {
    // margin-top: 5px;
    margin-left: 20px;
    color: #fff;
    font-size: 10px;
  }

  .left1-h1 {
    width: 110px;
    height: 50px;
    // background-color: pink;
    margin-left: 260px;
    margin-top: -30px;
    color: #fff;

    span {
      font-size: 10px;
    }
  }

  .left-tow {
    width: 100%;
    height: 50px;
    margin-top: -20px;
  }

  ul {
    width: 100%;
    height: 30px;
    margin-top: -20px;
    // background-color: #ccc;
    display: flex;
    justify-content: space-between;

    li {
      width: 80px;
      height: 30px;
      // background-color: pink;
      text-align: center;
      color: #fff;

      p {
        font-size: 5px;
      }
    }
  }

  .bing {
    width: 120px;
    height: 120px;
    // background-color: pink;
    // margin-left: 10px;
    margin-top: 10px;
  }

  .bingtitle {
    width: 130px;
    height: 50px;
    // background-color: pink;
    color: #fff;
    margin-left: 130px;
    margin-top: -110px;
    font-size: 15px;
  }

  .bingtitle1 {
    width: 140px;
    height: 50px;
    // background-color: pink;
    color: #fff;
    margin-left: 250px;
    margin-top: -50px;

    // font-size: 15px;
    h1 {
      font-size: 26px;
    }

    span {
      font-size: 10px;
    }
  }

  .ul {
    width: 250px;
    height: 50px;
    // background-color: #638634;
    margin-left: 130px;
    display: flex;
    justify-content: space-between;

    li {
      width: 50px;
      height: 50px;
      // background-color: #A6C475;
    }
  }

  .img {
    width: 30px;
    height: 30px;
    // background-color:pink;
    margin-left: 20px;
    margin-top: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .imgtxte {
    width: 100px;
    height: 100px;
    margin-left: 70px;
    margin-top: -30px;
    color: #fff;

    h1 {
      font-size: 20px;
      margin-top: 10px;
    }

    span {
      font-size: 10px;
    }
  }

  .imgg {
    width: 30px;
    height: 30px;
    // background-color:pink;
    margin-left: 190px;
    margin-top: -100px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .imgtxtee {
    width: 100px;
    height: 100px;
    margin-left: 230px;
    margin-top: -30px;
    color: #fff;

    h1 {
      font-size: 20px;
      margin-top: 10px;
    }

    span {
      font-size: 10px;
    }
  }

  .qszk {
    width: 100%;
    height: 40px;
    // background-color: pink;
    color: #fff;

    .qszk-new {
      font-size: 10px;
    }
  }
  .general {
    width: 100%;
    height: 200px;
    margin-top: -110px;
  }

  .goods{
    width: 100%;
    height: 50px;
    // background-color: palegreen;
    display: flex;
    justify-content: space-between;
    .goods-one{
      width: 150px;
      height: 100%;
      // background-color: palegoldenrod;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      .goods-one-new{
        font-size: 10px;
      }
    }
    .goods-tow{
      width: 200px;
      height: 100%;
      font-size: 10px;
      color: #fff;
      line-height: 50px;
      text-align: center;
      // background-color: palegoldenrod;
    }
  }
  .goodsimg{
    width: 100%;
    height: 200px;
    margin-top: -155px;
    // background-color: paleturquoise;
  }
}

.title-center-tow{
    width: 1115px;
    height: 70px;
    background-color: #424345;
    margin-top: -600px;
    margin-left: 403px;
    display: flex;
    justify-content: space-between;
    ul{
        display: flex;
        justify-content: space-between;
        li{
            width: 200px;
            height: 70px;
            // background-color: palevioletred;
            // margin-left: 30px;
            display: flex;
            color: #fff;
            .img{
                width: 50px;
                height: 50px;
                // background-color: #ccc;
                margin-top: 10px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .text{
                margin-left: 30px;
                margin-top: 10px;
                .new{
                    font-size: 10px;
                }
            }
        }
    }
}
.yes{
    width: 360px;
    height: 70px;
    // background-color: blue;
    .ul{
        display: flex;
        li{
            width: 130px;
            height: 70px;
            // background-color: paleturquoise;
            font-size: 10px;
            .imgg{
                width: 30px;
                height: 30px;
                margin-left: 50px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .yes-text{
                width: 60px;
                height: 40px;
                margin-top: 30px;
                margin-left: -43px;
                // background-color: orange;
                .zh{
                    text-align: center;
                    font-size: 10px;
                }
                .bfb{
                    text-align: center;
                    // margin-top: 5px;
                    font-weight:800;
                    font-size: 15px;
                }
            }
        }
    }
}
</style>