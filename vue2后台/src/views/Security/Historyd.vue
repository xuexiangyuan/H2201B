<template>
  <div>
    <!-- 历史归档 -->
    <mbx></mbx>

    <el-tabs v-model="activeName">
      <el-tab-pane label="全公司" name="first">
        <ul :class="flag==true?'active':'ul'">
          <li :class="flag==true?'inco1':'inco'">
            <i class="el-icon-caret-right" @click="flag=!flag"></i>
          </li>
          <li>
            <div class="p">
              <p>社保报表</p>
              <p>社保报表</p>
            </div>
          </li>
          <li>
            <div class="p">
              <p class="title">企业缴纳</p>
              <p class="price">8804.87</p>
            </div>
          </li>
          <li>
            <div class="p">
              <p class="title">个人缴纳</p>
              <p class="price">8804.87</p>
            </div>
          </li>
          <li>
            <div class="p">
              <p class="title">合计</p>
              <p class="price">17609.74</p>
            </div>
          </li>
        </ul>

        <div class="tabo" v-if="flag">
					<ul>
						<li>
							<div class="color"></div>
							<div class="text">已离职</div>
						</li>
						<li>
							<div class="color1"></div>
							<div class="text">再入职</div>
						</li>
						<li>
							<div class="color2"></div>
							<div class="text">公司合计</div>
						</li>
						<li>
							<div class="color3"></div>
							<div class="text">一级部门</div>
						</li>
						<li>
							<div class="color6"></div>
							<div class="text">二级部门</div>
						</li>
					</ul>
          <!-- 表格 -->
          <template>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column type="index" label="序号" width="180"> </el-table-column>
              <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
              <el-table-column prop="tiem" label="入职时间" width="180"> </el-table-column>
              <el-table-column prop="phone" label="手机号" width="180"> </el-table-column>
              <el-table-column prop="shenfen" label="身份证号码" width="180"> </el-table-column>
              <el-table-column prop="xueli" label="学历" width="180"> </el-table-column>
              <el-table-column prop="" label="开户行" width="180"> </el-table-column>
              <el-table-column prop="yiji" label="一级部门" width="180"> </el-table-column>
              <el-table-column prop="" label="二级部门" width="180"> </el-table-column>
              <el-table-column prop="" label="工作城市" width="180"> </el-table-column>
              <el-table-column prop="name" label="社保电脑号" width="180"> </el-table-column>
              <el-table-column prop="name" label="公积金账号" width="180"> </el-table-column>
              <el-table-column prop="name" label="离职时间" width="180"> </el-table-column>
              <el-table-column prop="name" label="户籍类型" width="180"> </el-table-column>
              <el-table-column prop="securitydz" label="参保城市" width="180"> </el-table-column>
              <el-table-column prop="securitytiem" label="社保月份" width="180"> </el-table-column>
              <el-table-column prop="securitynum" label="社保基数" width="180"> </el-table-column>
              <el-table-column prop="security" label="社保合计" width="180"> </el-table-column>
              <el-table-column prop="securityqiye" label="社保企业" width="180"> </el-table-column>
              <el-table-column prop="securitygeren" label="社保个人" width="180"> </el-table-column>
              <el-table-column prop="publicdz" label="公积金城市" width="180"> </el-table-column>
              <el-table-column prop="publicdztiem" label="公积金月份" width="180"> </el-table-column>
              <el-table-column prop="public" label="公积金基数" width="180"> </el-table-column>
              <el-table-column prop="publicqiyenum" label="公积金企业基数" width="180"> </el-table-column>
              <el-table-column prop="publicbili" label="公积金企业比例" width="180"> </el-table-column>
              <el-table-column prop="publicgerennum" label="公积金个人基数" width="180"> </el-table-column>
              <el-table-column prop="publicgerenbilinum" label="公积金个人比例" width="180"> </el-table-column>
              <el-table-column prop="publicnum" label="公积金合计" width="180"> </el-table-column>
              <el-table-column prop="publicqiye" label="公积金企业" width="180"> </el-table-column>
              <el-table-column prop="publicgnum" label="公积金个人" width="180"> </el-table-column>
              <el-table-column prop="" label="养老企业基数" width="180"> </el-table-column>
              <el-table-column prop="" label="养老企业比例" width="180"> </el-table-column>
              <el-table-column prop="" label="养老企业" width="180"> </el-table-column>
              <el-table-column prop="" label="养老个人基数" width="180"> </el-table-column>
              <el-table-column prop="" label="养老个人比例" width="180"> </el-table-column>
              <el-table-column prop="" label="养老个人" width="180"> </el-table-column>
              <el-table-column prop="" label="失业企业基数" width="180"> </el-table-column>
              <el-table-column prop="" label="失业企业比例" width="180"> </el-table-column>
              <el-table-column prop="" label="失业企业" width="180"> </el-table-column>
              <el-table-column prop="" label="失业个人基数" width="180"> </el-table-column>
              <el-table-column prop="" label="失业个人比例" width="180"> </el-table-column>
              <el-table-column prop="" label="失业个人" width="180"> </el-table-column>
              <el-table-column prop="" label="医疗企业基数" width="180"> </el-table-column>
              <el-table-column prop="" label="医疗企业比例" width="180"> </el-table-column>
              <el-table-column prop="" label="医疗企业" width="180"> </el-table-column>
              <el-table-column prop="" label="医疗个人基数" width="180"> </el-table-column>
              <el-table-column prop="" label="医疗个人比例" width="180"> </el-table-column>
              <el-table-column prop="" label="医疗个人" width="180"> </el-table-column>
              <el-table-column prop="" label="工伤企业基数" width="180"> </el-table-column>
              <el-table-column prop="" label="工伤企业比例" width="180"> </el-table-column>
              <el-table-column prop="" label="生育企业" width="180"> </el-table-column>
              <el-table-column prop="" label="生育企业基数" width="180"> </el-table-column>
              <el-table-column prop="" label="生育企业比例" width="180"> </el-table-column>
              <el-table-column prop="" label="生育企业" width="180"> </el-table-column>
              <el-table-column prop="" label="大病企业基数" width="180"> </el-table-column>
              <el-table-column prop="" label="大病企业比例" width="180"> </el-table-column>
              <el-table-column prop="" label="大病企业" width="180"> </el-table-column>
              <el-table-column prop="" label="大病个人基数" width="180"> </el-table-column>
              <el-table-column prop="" label="大病个人比例" width="180"> </el-table-column>
              <el-table-column prop="" label="大病个人" width="180"> </el-table-column>
              <el-table-column prop="" label="公积金备注" width="180"> </el-table-column>
              <el-table-column prop="" label="社保备注" width="180"> </el-table-column>
            </el-table>
          </template>
          <!-- 表格 -->
        </div>
      </el-tab-pane>
    </el-tabs>
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
      activeName: 'first',
      tableData: [
				{
					name:'管理员',
					tiem:'2018-11-02',
					phone:'13800000002',
					shenfen:'41100011100011111',
					xueli:'高中',
					yiji:'总裁办',
					securitydz:'北京',
					securitytiem:'202001',
					securitynum:'10000',
					security:'4380',
					securityqiye:'3060',
					securitygeren:'1320',
					publicdz:'北京',
					publictiem:'202001',
					public:'10000',
					publicqiyenum:'10000',
					publicbili:'0.12',
					publicgerennum:'10000',
					publicgerenbilinum:'0.12',
					publicnum:'24',
					publicqiye:'12',
					publicgnum:'12'
				},
				{
					name:'孙财',
					tiem:'2018-11-02',
					phone:'13800000003',
					shenfen:'41100011100011111',
					xueli:'高中',
					yiji:'市场部',
					securitydz:'北京',
					securitytiem:'202001',
					securitynum:'10000',
					security:'4380',
					securityqiye:'3060',
					securitygeren:'1320',
					publicdz:'北京',
					publictiem:'202001',
					public:'10000',
					publicqiyenum:'10000',
					publicbili:'0.12',
					publicgerennum:'10000',
					publicgerenbilinum:'0.12',
					publicnum:'24',
					publicqiye:'12',
					publicgnum:'12'
				},
				{
					name:'罗晓晓',
					tiem:'2018-11-02',
					phone:'13800000004',
					shenfen:'411000111000112222',
					xueli:'高中',
					yiji:'人事部',
					securitydz:'北京',
					securitytiem:'202001',
					securitynum:'10000',
					security:'4380',
					securityqiye:'3060',
					securitygeren:'1320',
					publicdz:'北京',
					publictiem:'202001',
					public:'10000',
					publicqiyenum:'10000',
					publicbili:'0.12',
					publicgerennum:'10000',
					publicgerenbilinum:'0.12',
					publicnum:'24',
					publicqiye:'12',
					publicgnum:'12'
				},
				{
					name:'文吉星',
					tiem:'2018-11-02',
					phone:'13400000001',
					shenfen:'41100011100011333',
					xueli:'初中',
					yiji:'人事部',
					securitydz:'北京',
					securitytiem:'202001',
					securitynum:'10000',
					security:'4380',
					securityqiye:'3060',
					securitygeren:'1320',
					publicdz:'北京',
					publictiem:'202001',
					public:'10000',
					publicqiyenum:'10000',
					publicbili:'0.12',
					publicgerennum:'10000',
					publicgerenbilinum:'0.12',
					publicnum:'24',
					publicqiye:'12',
					publicgnum:'12'
				},
				{
					name:'巴思慧',
					tiem:'2018-11-02',
					phone:'13400000002',
					shenfen:'41100011100011111',
					xueli:'高中',
					yiji:'人事部',
					securitydz:'北京',
					securitytiem:'202001',
					securitynum:'10000',
					security:'4380',
					securityqiye:'3060',
					securitygeren:'1320',
					publicdz:'北京',
					publictiem:'202001',
					public:'10000',
					publicqiyenum:'10000',
					publicbili:'0.12',
					publicgerennum:'10000',
					publicgerenbilinum:'0.12',
					publicnum:'24',
					publicqiye:'12',
					publicgnum:'12'
				},
				{
					name:'乔海',
					tiem:'2018-11-02',
					phone:'13500000001',
					shenfen:'41100011100011111',
					xueli:'初中',
					yiji:'总裁办',
					securitydz:'北京',
					securitytiem:'202001',
					securitynum:'10000',
					security:'4380',
					securityqiye:'3060',
					securitygeren:'1320',
					publicdz:'北京',
					publictiem:'202001',
					public:'10000',
					publicqiyenum:'10000',
					publicbili:'0.12',
					publicgerennum:'10000',
					publicgerenbilinum:'0.12',
					publicnum:'24',
					publicqiye:'12',
					publicgnum:'12'
				},
				{
					name:'董昊空',
					tiem:'2018-11-02',
					phone:'13500000002',
					shenfen:'41100011100011111',
					xueli:'高中',
					yiji:'总裁办',
					securitydz:'北京',
					securitytiem:'202001',
					securitynum:'10000',
					security:'4380',
					securityqiye:'3060',
					securitygeren:'1320',
					publicdz:'北京',
					publictiem:'202001',
					public:'10000',
					publicqiyenum:'10000',
					publicbili:'0.12',
					publicgerennum:'10000',
					publicgerenbilinum:'0.12',
					publicnum:'24',
					publicqiye:'12',
					publicgnum:'12'
				},

			],
			flag:false
    }
  }
}
</script>

<style lang="scss" scoped>
.active{
	 width: 100%;
  border-bottom: 3px solid #30B08F;
  display: flex;
  align-items: center;
  .inco {
    width: 50px;
    line-height: 150px;
    border: 0;
  }
	.inco1 {
    width: 50px;
    line-height: 150px;
    border: 0;
		.el-icon-caret-right{
			cursor: pointer;
			color: #30B08F;
		}
  }
  li {
    width: 200px;
    height: 150px;
    border-right: 1px solid #ccc;
    p {
      margin-top: 10px;
    }
    .p {
      margin-top: 50px;
      text-align: center;
      font-size: 18px;
      .title {
        color: #ccc;
        font-size: 10px;
      }
    }
  }
}
.ul {
  width: 100%;
  border-bottom: 3px solid #ccc;
  display: flex;
  align-items: center;
  .inco {
    width: 50px;
    line-height: 150px;
    border: 0;
  }
  li {
    width: 200px;
    height: 150px;
    border-right: 1px solid #ccc;
    p {
      margin-top: 10px;
    }
    .p {
      margin-top: 50px;
      text-align: center;
      font-size: 18px;
      .title {
        color: #ccc;
        font-size: 10px;
      }
    }
  }
}

.tabo{
	ul{
		display: flex;
		align-items: center;
		li{
			width: 100px;
			height: 50px;
			line-height: 50px;
			// background-color:pink;
			display: flex;
			align-items: center;
			.color{
				width: 20px;
				height: 20px;
				background-color: #CFEFFE;
			}
			.color1{
				width: 20px;
				height: 20px;
				background-color: #A8F8BB;
			}
			.color2{
				width: 20px;
				height: 20px;
				background-color: #FEDBD7;
			}
			.color3{
				width: 20px;
				height: 20px;
				background-color: #FFE8C9;
			}
			.color6{
				width: 20px;
				height: 20px;
				background-color: #FDFCD5;
			}
			.text{
				margin-left: 10px;
				font-size: 10px;
			}
		}
	}
}

.el-icon-caret-right{
	cursor: pointer;
}


</style>
