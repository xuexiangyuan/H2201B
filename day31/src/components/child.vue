<template>
	<div class="homme">
		<div class="lleft">
			<!-- 地图 -->
			<div class="map" id="main"></div>
			<!-- 订单选项 -->
			<div class="dingdan">
				<ul>
					<li v-for="(item, index) in list" :key="index">
						{{ item.name }}
					</li>
				</ul>
			</div>
			<!-- 趋势图 -->
			<div class="trend">
				<div class="trend-one">
					<p class="trend-text">实时订单趋势图</p>
					<p class="trend-text1">new Taal Cext</p>
					<h3 class="trend-text3">23,242</h3>
					<p class="trend-text4">刷新率</p>
					<h3 class="trend-text5">2.23%</h3>
				</div>
				<div class="trend-tow" id="generall"></div>
			</div>
			<!-- 尾部 -->
			<div class="weibu">
				<img src="../assets/不领不领.png" alt="" />
			</div>
		</div>
		<!-- 左侧 -->
		<div class="reight">
			<div class="reight-one">
				<!-- <dv-scroll-board :config="config" style="width: 100%; height: 500px" /> -->
				<dv-scroll-board
					class="biaoge"
					:rowNum="12"
					:config="configdisplacementofDam"
					style="width: 100%; height: 100%"
				/>
			</div>
			<div class="reight-tow">
				<div class="reight-tow-text">
					<p>地区商家销售排行</p>
				</div>
				<ul>
					<li>
						<div class="diqu">
							<p>合肥</p>
						</div>
						<div class="diquq">
							<p></p>
						</div>
						<div class="li-img" id="li-img"></div>
						<div class="li-a">
							<img src="../assets/a.png" alt="" />
						</div>
						<div class="li-text">
                            <dv-scroll-board
					class="biaoge"
					:rowNum="12"
					:config="configdisplacementofDam1"
					style="width: 100%; height: 100%"
				/>
                        </div>
					</li>
					<li class="li">
						<div class="diqu">
							<p>合肥</p>
						</div>
						<div class="diquq">
							<p></p>
						</div>
						<div class="li-img" id="li-img2"></div>
						<div class="li-a">
							<img src="../assets/f.png" alt="" />
						</div>
						<div class="li-text">
                            <dv-scroll-board
					class="biaoge"
					:rowNum="12"
					:config="configdisplacementofDam1"
					style="width: 100%; height: 100%"
				/>
                        </div>
					</li>
					<li class="li">
						<div class="diqu">
							<p>合肥</p>
						</div>
						<div class="diquq">
							<p></p>
						</div>
						<div class="li-img" id="li-img1"></div>
						<div class="li-a">
							<img src="../assets/h.png" alt="" />
						</div>
						<div class="li-text">
                            <dv-scroll-board
					class="biaoge"
					:rowNum="12"
					:config="configdisplacementofDam1"
					style="width: 100%; height: 100%"
				/>
                        </div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	import china from './js/china.js';
	export default {
		props: ['AreaData'],
		data() {
			return {
				list: [
					{
						name: '订单量',
					},
					{
						name: '销售额',
					},
					{
						name: '用户数量',
					},
					{
						name: '退单量',
					},
				],
				// config: {
				// 	header: [
				// 		'城市订单量',
				// 		'店铺数',
				// 		'接单骑手人数',
				// 		'到店铺数量',
				// 		'人均订单量',
				// 	],
				// 	indexHeader: '序号',
				// 	rowNum: 23, // 表行数
				// 	headerBGC: '#585858', // 表头背景色
				// 	oddRowBGC: '#363636', // 奇数行背景色
				// 	evenRowBGC: '#272727', // 偶数行背景色
				// 	waitTime: 2000, // 轮播时间间隔(ms)
				// 	align: ['center' ,'center', 'center'],
				// 	index: true,
				// 	columnWidth: [50],
				// 	align: ['center'],
				// 	carousel: 'page',
				// 	data: [
				// 		['武汉-16%', '武汉+16%', '武汉+20%', '武汉-21%', '武汉+10%'],
				// 		['南宁-5%', '南宁+6%', '南宁+18%', '南宁-13%', '南宁+14%'],
				// 		['北京+6%', '北京-3%', '北京-31%', '北京+16%', '北京-4%'],
				// 		['上海-9%', '上海+20%', '上海-31%', '上海-5%', '上海+13%'],
				// 		['广州+20%', '广州-22%', '广州+21%', '广州+16%', '广州-3%'],
				// 		['南京-9%', '南京-19%', '南京+22%', '南京+12%', '南京+20%'],
				// 		['杭州-12%', '杭州-16%', '杭州-19%', '杭州+20%', '杭州-16%'],
				// 		['合肥+3%', '合肥-19%', '合肥-24%', '合肥-9%', '合肥+16%'],
				// 		['行9列1', '行9列2', '行9列3'],
				// 		['行10列1', '行10列2', '行10列3'],
				// 	],
				// },
				headerdisplacementofDam: [
					'<span style="font-size:10px">城市订单量</span>',
					'<span style="font-size:10px">店铺数</span>',
					'<span style="font-size:10px;margin-left:-10px">接单骑手人数</span>',
					'<span style="font-size:10px">到店铺数量</span>',
					'<span style="font-size:10px">人均订单量</span>',
				],
				datadisplacementofDam: [
					[
						'<span style="color:#B7B8B7;font-size:10px">武汉-16%</span>',
						'<span style="color:#D8F19F;font-size:10px">武汉+16%</span>',
						'<span style="color:#B7B8B7;font-size:10px">武汉+20%</span>',
						'<span style="color:#D8F19F;font-size:10px">武汉-21%</span>',
						'<span style="color:#B7B8B7;font-size:10px">武汉+10%</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">南宁-5%</span>',
						'<span style="color:#D8F19F;font-size:10px">南宁+6%</span>',
						'<span style="color:#B7B8B7;font-size:10px">南宁+18%</span>',
						'<span style="color:#D8F19F;font-size:10px">南宁-13%</span>',
						'<span style="color:#B7B8B7;font-size:10px">南宁+14%</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">北京+6%</span>',
						'<span style="color:#D8F19F;font-size:10px">北京-3%</span>',
						'<span style="color:#B7B8B7;font-size:10px">北京-31%</span>',
						'<span style="color:#D8F19F;font-size:10px">北京+16%</span>',
						'<span style="color:#B7B8B7;font-size:10px">北京-4%</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">上海-9%</span>',
						'<span style="color:#D8F19F;font-size:10px">上海+20%</span>',
						'<span style="color:#B7B8B7;font-size:10px">上海-31%</span>',
						'<span style="color:#D8F19F;font-size:10px">上海-5%</span>',
						'<span style="color:#B7B8B7;font-size:10px">上海+13%</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">广州+20%</span>',
						'<span style="color:#D8F19F;font-size:10px">广州-22%</span>',
						'<span style="color:#B7B8B7;font-size:10px">广州+21%</span>',
						'<span style="color:#D8F19F;font-size:10px">广州+16%</span>',
						'<span style="color:#B7B8B7;font-size:10px">广州-3%</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">南京-9%</span>',
						'<span style="color:#D8F19F;font-size:10px">南京-19%</span>',
						'<span style="color:#B7B8B7;font-size:10px">南京+22%</span>',
						'<span style="color:#D8F19F;font-size:10px">南京+12%</span>',
						'<span style="color:#B7B8B7;font-size:10px">南京+20%</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">杭州-12%</span>',
						'<span style="color:#D8F19F;font-size:10px">杭州-16%</span>',
						'<span style="color:#B7B8B7;font-size:10px">杭州-19%</span>',
						'<span style="color:#D8F19F;font-size:10px">杭州+20%</span>',
						'<span style="color:#B7B8B7;font-size:10px">杭州-16%</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">合肥+3%</span>',
						'<span style="color:#D8F19F;font-size:10px">合肥-19%</span>',
						'<span style="color:#B7B8B7;font-size:10px">合肥-24%</span>',
						'<span style="color:#D8F19F;font-size:10px">合肥-9%</span>',
						'<span style="color:#B7B8B7;font-size:10px">合肥+16%</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">济南-14%</span>',
						'<span style="color:#D8F19F;font-size:10px">济南+10%</span>',
						'<span style="color:#B7B8B7;font-size:10px">济南+18%</span>',
						'<span style="color:#D8F19F;font-size:10px">济南-11%</span>',
						'<span style="color:#B7B8B7;font-size:10px">济南+9%</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">太原-16%</span>',
						'<span style="color:#D8F19F;font-size:10px">太原-16%</span>',
						'<span style="color:#B7B8B7;font-size:10px">太原-3%</span>',
						'<span style="color:#D8F19F;font-size:10px">太原+18%</span>',
						'<span style="color:#B7B8B7;font-size:10px">太原+20%</span>',
					],
				],
				configdisplacementofDam: {},

                headerdisplacementofDam1: [
					'<span style="font-size:10px">城市订单量</span>',
					'<span style="font-size:10px">店铺数</span>',
					'<span style="font-size:10px;margin-right:-10px">接单骑手人数</span>'
				],
				datadisplacementofDam1: [
					[
						'<span style="color:#B7B8B7;font-size:10px">武汉</span>',
						'<span style="color:#D8F19F;font-size:10px">武汉</span>',
						'<span style="color:#B7B8B7;font-size:10px">武汉</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">南宁</span>',
						'<span style="color:#D8F19F;font-size:10px">南宁</span>',
						'<span style="color:#B7B8B7;font-size:10px">南宁</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">北京</span>',
						'<span style="color:#D8F19F;font-size:10px">北京</span>',
						'<span style="color:#B7B8B7;font-size:10px">北京</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">上海/span>',
						'<span style="color:#D8F19F;font-size:10px">上海</span>',
						'<span style="color:#B7B8B7;font-size:10px">上海</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">广州</span>',
						'<span style="color:#D8F19F;font-size:10px">广州</span>',
						'<span style="color:#B7B8B7;font-size:10px">广州</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">南京/span>',
						'<span style="color:#D8F19F;font-size:10px">南京</span>',
						'<span style="color:#B7B8B7;font-size:10px">南京</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">杭州</span>',
						'<span style="color:#D8F19F;font-size:10px">杭州</span>',
						'<span style="color:#B7B8B7;font-size:10px">杭州</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">合肥</span>',
						'<span style="color:#D8F19F;font-size:10px">合肥</span>',
						'<span style="color:#B7B8B7;font-size:10px">合肥</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">济南</span>',
						'<span style="color:#D8F19F;font-size:10px">济南</span>',
						'<span style="color:#B7B8B7;font-size:10px">济南</span>',
					],

					[
						'<span style="color:#B7B8B7;font-size:10px">太原</span>',
						'<span style="color:#D8F19F;font-size:10px">太原</span>',
						'<span style="color:#B7B8B7;font-size:10px">太原</span>',
					],
				],
				configdisplacementofDam1: {},
			};
		},

		methods: {
			init() {
				this.$nextTick(() => {
					this.initPic();
				});
			},
			initPic() {
				var chartDom = document.getElementById('main');
				var myChart = echarts.init(chartDom);
				var chinaGeoCoordMap = {
					黑龙江: [127.9688, 45.368],
					内蒙古: [110.3467, 41.4899],
					吉林: [125.8154, 44.2584],
					北京市: [116.4551, 40.2539],
					辽宁: [123.1238, 42.1216],
					河北: [114.4995, 38.1006],
					天津: [117.4219, 39.4189],
					山西: [112.3352, 37.9413],
					陕西: [109.1162, 34.2004],
					甘肃: [103.5901, 36.3043],
					宁夏: [106.3586, 38.1775],
					青海: [101.4038, 36.8207],
					新疆: [87.611053, 43.828171],
					西藏: [91.117212, 29.646922],
					四川: [103.9526, 30.7617],
					重庆: [108.384366, 30.439702],
					山东: [117.1582, 36.8701],
					河南: [113.4668, 34.6234],
					江苏: [118.8062, 31.9208],
					安徽: [117.29, 32.0581],
					湖北: [114.3896, 30.6628],
					浙江: [119.5313, 29.8773],
					福建: [119.4543, 25.9222],
					江西: [116.0046, 28.6633],
					湖南: [113.0823, 28.2568],
					贵州: [106.6992, 26.7682],
					云南: [102.9199, 25.4663],
					广东: [113.12244, 23.009505],
					广西: [108.479, 23.1152],
					海南: [110.3893, 19.8516],
					台湾: [120.702967, 24.123621],
					上海: [121.4648, 31.2891],
				};
				var chinaDatas = [
					[
						{
							name: '北京市',
							value: 0,
						},
						{
							name: '黑龙江',
							value: 0,
						},
						{ name: '上海市' },
					],
					[
						{
							name: '内蒙古',
							value: 0,
						},
					],
					[
						{
							name: '吉林',
							value: 0,
						},
					],
					[
						{
							name: '辽宁',
							value: 0,
						},
					],
					[
						{
							name: '河北',
							value: 0,
						},
					],
					[
						{
							name: '天津',
							value: 0,
						},
					],
					[
						{
							name: '山西',
							value: 0,
						},
					],
					[
						{
							name: '陕西',
							value: 0,
						},
					],
					[
						{
							name: '甘肃',
							value: 0,
						},
					],
					[
						{
							name: '新疆',
							value: 0,
						},
					],
					[
						{
							name: '西藏',
							value: 0,
						},
					],
					[
						{
							name: '台湾',
							value: 0,
						},
					],
					[
						{
							name: '黑龙江',
							value: 0,
						},
					],
					[
						{
							name: '云南',
							value: 0,
						},
					],
					[
						{
							name: '宁夏',
							value: 0,
						},
					],
					[
						{
							name: '青海',
							value: 0,
						},
					],
					[
						{
							name: '四川',
							value: 0,
						},
					],
					[
						{
							name: '重庆',
							value: 0,
						},
					],
					[
						{
							name: '山东',
							value: 0,
						},
					],
					[
						{
							name: '河南',
							value: 0,
						},
					],
					[
						{
							name: '江苏',
							value: 0,
						},
					],
					[
						{
							name: '安徽',
							value: 0,
						},
					],
					[
						{
							name: '湖北',
							value: 0,
						},
					],
					[
						{
							name: '浙江',
							value: 0,
						},
					],
					[
						{
							name: '福建',
							value: 0,
						},
					],
					[
						{
							name: '江西',
							value: 0,
						},
					],
					[
						{
							name: '湖南',
							value: 0,
						},
					],
					[
						{
							name: '贵州',
							value: 0,
						},
					],
					[
						{
							name: '广西',
							value: 0,
						},
					],
					[
						{
							name: '海南',
							value: 0,
						},
					],
					[
						{
							name: '上海',
							value: 0,
						},
					],
				];

				var convertData = function (data) {
					var res = [];
					for (var i = 0; i < data.length; i++) {
						var dataItem = data[i];
						var fromCoord = chinaGeoCoordMap[dataItem[0].name];
						var toCoord = [
							[121.4648, 31.2891],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
							[117.1582, 36.8701],
						]; //被攻击点
						if (fromCoord && toCoord[i]) {
							res.push([
								{
									coord: toCoord[i],
								},
								{
									coord: fromCoord,
									value: dataItem[0].value,
									// visualMap: false
								},
							]);
						}
					}
					return res;
				};

				var series = [];
				[['山东', chinaDatas]].forEach(function (item, i) {
					console.log(item);
					series.push(
						{
							type: 'map',
							mapType: 'china',
							aspectScale: 0.85,
							layoutCenter: ['50%', '50%'], //地图位置
							layoutSize: '100%',
							zoom: 1, //当前视角的缩放比例
							// roam: true, //是否开启平游或缩放
							scaleLimit: {
								//滚轮缩放的极限控制
								min: 1,
								max: 2,
							},
							itemStyle: {
								normal: {
									areaColor: '#6C929B',
									borderColor: '#6CE1B5',
									borderWidth: 0.5,
									shadowColor: '6CE1B5',
									shadowBlur: 100,
								},
								emphasis: {
									areaColor: '#6CE1B5',
									label: {
										color: '#6CE1B5',
									},
								},
							},
						},
						{
							type: 'lines',
							zlevel: 2,
							effect: {
								show: true,
								period: 3, //箭头指向速度，值越小速度越快
								trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
								symbol: 'arrow', //箭头图标
								symbolSize: 5, //图标大小
							},
							lineStyle: {
								normal: {
									color: '#6CE1B5',
									width: 1, //尾迹线条宽度
									opacity: 0.7, //尾迹线条透明度
									curveness: 0.3, //尾迹线条曲直度
								},
							},
							data: convertData(item[1]),
						},
						{
							type: 'effectScatter',
							coordinateSystem: 'geo',
							zlevel: 2,
							rippleEffect: {
								//涟漪特效
								period: 4, //动画时间，值越小速度越快
								brushType: 'stroke', //波纹绘制方式 stroke, fill
								scale: 4, //波纹圆环最大限制，值越大波纹越大
							},
							label: {
								normal: {
									show: true,
									position: 'right', //显示位置
									offset: [5, 0], //偏移设置
									formatter: function (params) {
										//圆环显示文字
										return params.data.name;
									},
									fontSize: 13,
								},
								emphasis: {
									show: true,
								},
							},
							symbol: 'circle',
							symbolSize: function (val) {
								return 5 + val[2] * 5; //圆环大小
							},
							itemStyle: {
								normal: {
									show: true,
									color: '#6CE1B5',
								},
							},
							data: item[1].map(function (dataItem) {
								return {
									name: dataItem[0].name,
									value: chinaGeoCoordMap[dataItem[0].name].concat([
										dataItem[0].value,
									]),
									// visualMap: false
								};
							}),
						},
						//被攻击点
						{
							type: 'scatter',
							coordinateSystem: 'geo',
							zlevel: 2,
							rippleEffect: {
								period: 4,
								brushType: 'stroke',
								scale: 4,
							},
							label: {
								normal: {
									show: false, //定位点名字
									position: 'right',
									// offset:[5, 0],
									color: '#0f0',
									formatter: '{b}',
									textStyle: {
										color: '#0f0',
									},
								},
								emphasis: {
									// show: false,   //定位标记
									color: '#f60',
								},
							},
							symbol: 'pin', //定位图标样式
							symbolSize: 50,
							data: [
								{
									name: item[0],
									value: chinaGeoCoordMap[item[0]].concat([10]),
								},
							],
						},
					);
				});

				var option = {
					backgroundColor: '#424345',
					geo: {
						map: 'china',
						aspectScale: 0.85,
						layoutCenter: ['50%', '50%'], //地图位置
						layoutSize: '100%',
						itemStyle: {
							normal: {
								shadowColor: '#276fce',
								shadowOffsetX: 0,
								shadowOffsetY: 15,
								opacity: 0.5,
							},
							emphasis: {
								areaColor: '#276fce',
							},
						},
						regions: [
							{
								name: '南海诸岛',
								itemStyle: {
									areaColor: 'rgba(0, 10, 52, 1)',

									borderColor: 'rgba(0, 10, 52, 1)',
									normal: {
										opacity: 0,
										label: {
											show: false,
											color: '#009cc9',
										},
									},
								},
								label: {
									show: false,
									color: '#FFFFFF',
									fontSize: 12,
								},
							},
						],
					},
					series: series,
				};
				myChart.setOption(option);
			},

			letgeneral() {
				var chartDom = document.getElementById('generall');
				var myChart = echarts.init(chartDom);
				var option;

				option = {
					xAxis: {
						type: 'category',
						axisLabel: {
							//x轴文字的配置
							show: true,
							interval: 0, //使x轴文字显示全
						},
						data: [
							'13:53:43',
							'13:53:53',
							'13:54:2',
							'13:54:12',
							'13:54:22',
							'13:54:32',
							'13:54:42',
							'13:55:4',
							'13:55:13',
							'13:55:23',
							'13:55:32',
							'13:55:42',
						],
					},
					grid: {
						x: 30,
						y: 65,
						x2: 1,
						y2: 75,
						borderWidth: 1,
					},
					yAxis: {
						type: 'value',
						splitLine: {
							show: true,
							lineStyle: {
								color: ['#353638'],
								width: 1,
								type: 'solid',
							},
						},
					},
					series: [
						{
							symbol: 'none',
							data: [
								1500, 650, 1500, 310, 900, 1300, 0, 1300, 900, 1900, 300, 1300,
							],
							type: 'line',
							smooth: true,
							color: '#94AD59',
						},
					],
				};

				option && myChart.setOption(option);
			},

			letbingd() {
				var chartDom = document.getElementById('li-img');
				var myChart = echarts.init(chartDom);
				var option;

				option = {
                     title:{
                text:"51%",
                left:"center",
                top:"55%",
                textStyle:{
                    color:"#D7F09E",
                    fontSize:15,
                    align:"center"
                }
            },
					tooltip: {
						trigger: 'item',
					},
					legend: {
						top: '5%',
						left: 'center',
					},
					color: ['#D7F09E', '#5C5C5C'],
					series: [
						{
							name: 'Access From',
							type: 'pie',
							radius: ['70%', '85%'],
							avoidLabelOverlap: false,
							label: {
								show: false,
								position: 'center',
							},
							emphasis: {
							},
							labelLine: {
								show: false,
							},
							data: [{ value: 1050 }, { value: 735 }],
							label: {
                                
								//饼图中间文字设置
								normal: {
                                   
									show: true,
									position: 'center',
                                    top:'50px',
									color: '#9A9EBA',
									// formatter: '配⽐详情',
								},
								emphasis: {
									//中间文字显示
									show: true,
                                    
								},
							},
						},
					],
				};

				option && myChart.setOption(option);
			},

            letbingd1() {
				var chartDom = document.getElementById('li-img1');
				var myChart = echarts.init(chartDom);
				var option;

				option = {
                     title:{
                text:"95%",
                left:"center",
                top:"55%",
                textStyle:{
                    color:"#D7F09E",
                    fontSize:15,
                    align:"center"
                }
            },
					tooltip: {
						trigger: 'item',
					},
					legend: {
						top: '5%',
						left: 'center',
					},
					color: ['#D7F09E', '#5C5C5C'],
					series: [
						{
							name: 'Access From',
							type: 'pie',
							radius: ['70%', '85%'],
							avoidLabelOverlap: false,
							label: {
								show: false,
								position: 'center',
							},
							emphasis: {
							},
							labelLine: {
								show: false,
							},
							data: [{ value: 1050 }, { value: 55 }],
							label: {
                                
								//饼图中间文字设置
								normal: {
                                   
									show: true,
									position: 'center',
                                    top:'50px',
									color: '#9A9EBA',
									// formatter: '配⽐详情',
								},
								emphasis: {
									//中间文字显示
									show: true,
                                    
								},
							},
						},
					],
				};

				option && myChart.setOption(option);
			},

            letbingd2() {
				var chartDom = document.getElementById('li-img2');
				var myChart = echarts.init(chartDom);
				var option;

				option = {
                     title:{
                text:"32%",
                left:"center",
                top:"55%",
                textStyle:{
                    color:"#D7F09E",
                    fontSize:15,
                    align:"center"
                }
            },
					tooltip: {
						trigger: 'item',
					},
					legend: {
						top: '5%',
						left: 'center',
					},
					color: ['#D7F09E', '#5C5C5C'],
					series: [
						{
							name: 'Access From',
							type: 'pie',
							radius: ['70%', '85%'],
							avoidLabelOverlap: false,
							label: {
								show: false,
								position: 'center',
							},
							emphasis: {
							},
							labelLine: {
								show: false,
							},
							data: [{ value: 550 }, { value: 1055 }],
							label: {
                                
								//饼图中间文字设置
								normal: {
                                   
									show: true,
									position: 'center',
                                    top:'50px',
									color: '#9A9EBA',
									// formatter: '配⽐详情',
								},
								emphasis: {
									//中间文字显示
									show: true,
                                    
								},
							},
						},
					],
				};

				option && myChart.setOption(option);
			},
		},

		mounted() {
			this.init();
			this.letgeneral();
			this.configdisplacementofDam = {
				data: this.datadisplacementofDam, // 表数据
				header: this.headerdisplacementofDam, // 表头数据
				rowNum: 6, // 表行数
				headerBGC: '#595959', // 表头背景色
				oddRowBGC: '#272727', // 奇数行背景色
				evenRowBGC: '#363636', // 偶数行背景色
				waitTime: 1000, // 轮播时间间隔(ms)
				align: 'center',
			};
			this.configdisplacementofDam1 = {
				data: this.datadisplacementofDam1, // 表数据
				header: this.headerdisplacementofDam1, // 表头数据
				rowNum: 3, // 表行数
				headerBGC: '#595959', // 表头背景色
				oddRowBGC: '#272727', // 奇数行背景色
				evenRowBGC: '#363636', // 偶数行背景色
				waitTime: 1000, // 轮播时间间隔(ms)
				align: 'center',
			};
			this.letbingd();
			this.letbingd1();
            this.letbingd2()
		},
	};
</script>

<style lang="scss" scoped>
	.biaoge {
		font-size: 12px;
		// color: #798761;
	}
	// .l-content {
	// 	.dv-scroll-board {
	// 		color: #3c3f52;
	// 		.header {
	// 			font-size: 10px;
	// 			color: #91a0b9;
	// 			text-align: center;
	// 			white-space: nowrap;
	// 		}
	// 		.rows {
	// 			.row-item {
	// 				text-align: center;

	// 				.ceil {
	// 					color: #3c3f52;
	// 					font-size: 10px;
	// 					i {
	// 						font-size: 10px;
	// 						color: #3bc080;
	// 					}
	// 				}
	// 				.ceil:nth-child(1) {
	// 					color: #7cb9ff;
	// 					font-size: 10px;
	// 					width: 15%;
	// 				}
	// 			}
	// 		}
	// 	}
	// }

	.dv-scroll-board {
		// color:#333;
		font-size: 10px;
	}
	.homme {
		width: 1115px;
		height: 500px;
		// background-color: paleturquoise;
		margin-top: 5px;
		margin-left: 404px;
		display: flex;
		.lleft {
			width: 690px;
			height: 100%;
			// background-color: palegreen;
			.map {
				//地图
				width: 690px;
				height: 260px;
				// background-color: pink;
			}
			.dingdan {
				//订单列表
				width: 690px;
				height: 30px;
				background-color: #35383f;
				margin-top: 5px;
				ul {
					display: flex;
					justify-content: space-between;
					li {
						width: 130px;
						line-height: 30px;
						text-align: center;
						font-size: 15px;
						color: #7e8994;
					}
				}
			}
			.trend {
				//趋势
				width: 690px;
				height: 90px;
				background-color: #424345;
				margin-top: 10px;
				display: flex;
				color: #fff;
				.trend-one {
					width: 200px;
					height: 90px;
					// background-color:khaki;
					margin-left: 20px;
					.trend-text1 {
						font-size: 5px;
					}
					.trend-text4 {
						font-size: 5px;
					}
					.trend-text5 {
						color: #a3c073;
					}
				}
				.trend-tow {
					width: 900px;
					height: 90px;
					// background-color: yellow;
				}
			}
			.weibu {
				//尾部
				width: 690px;
				height: 100px;
				// background-color: lawngreen;
				margin-top: 10px;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
		.reight {
			width: 410px;
			height: 100%;
			margin-left: 15px;
			// background-color: tomato;
			.reight-one {
				width: 410px;
				height: 260px;
				background-color: #363636;
			}
			.reight-tow {
				width: 410px;
				height: 230px;
				// background-color: cadetblue;
				margin-top: 5px;
				ul {
					display: flex;
					// background-color: pink;
					// margin-left: 5px;
					li {
						width: 130px;
						// margin-left: 5px;
						height: 230px;
						background-color: #2C2C2C;
						position: relative;
						.diqu {
							width: 100%;
							height: 20px;
							background-color: #2c2c2c;
							font-size: 10px;
							color: #b9b9b9;
							p {
								margin-left: 20px;
							}
						}
						.diquq {
							width: 100%;
							height: 20px;
							background-color: #5c5c5c;
							font-size: 10px;
							color: #b9b9b9;
							overflow: hidden;
							p {
								width: 10px;
								height: 10px;
								background-color: #313131;
								margin-top: 3px;
								margin-left: 110px;
							}
						}
						.li-img {
							width: 100%;
							height: 100px;
							// background-color: palegreen;
						}
						.li-text {
							width: 100%;
							height: 90px;
							background-color: palegoldenrod;
						}
						.li-a {
							width: 36px;
							height: 36px;
							background-color: chocolate;
							position: absolute;
							top: 60px;
							right: 47px;
							img {
								width: 100%;
								height: 100%;
							}
						}
					}
                    .li{
                        margin-left: 10px;
                    }
				}
			}
			.reight-tow-text {
				width: 100%;
				height: 25px;
				background-color: #363636;
				p {
					color: #fff;
					margin-left: 20px;
				}
			}
		}
	}
</style>
