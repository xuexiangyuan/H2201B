<template>
  <div>
    <!-- 工资报表 -->
    <mbx></mbx>

    <el-card class="box-card">
      <div>
        <el-tabs v-model="activeName">
					<el-button class="btnn" type="primary" size="small">导出</el-button>
          <el-tab-pane label="工资报表" name="first">

            <el-table :data="tableData" style="width: 100%">
              <el-table-column type="index" label="序号" width="120"> </el-table-column>
              <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
              <el-table-column prop="phone" label="手机号" width="130"> </el-table-column>
							<el-table-column prop="gh" label="工号" width="100"> </el-table-column>
              <el-table-column prop="bm" label="部门名称" width="100"> </el-table-column>
              <el-table-column prop="zzzt" label="在职状态" width="100"> </el-table-column>
              <el-table-column prop="gjj" label="公积金个人" width="100"> </el-table-column>
              <el-table-column prop="sb" label="社保个人" width="100"> </el-table-column>
              <el-table-column prop="sbqy" label="社保企业" width="100"> </el-table-column>
              <el-table-column prop="gjjqy" label="公积金企业" width="100"> </el-table-column>
              <el-table-column prop="gjjsbqy" label="公积金社区企业" width="120"> </el-table-column>
              <el-table-column prop="price" label="基本工资" width="100"> </el-table-column>
              <el-table-column prop="price" label="岗位工资" width="100"> </el-table-column>
              <el-table-column prop="fljt" label="福利津贴" width="100"> </el-table-column>
              <el-table-column prop="kqkk" label="考勤扣款" width="100"> </el-table-column>
              <el-table-column prop="sqhj" label="税前工资合计" width="120"> </el-table-column>
              <el-table-column prop="yks" label="应纳税工资" width="100"> </el-table-column>
              <el-table-column prop="yks" label="应扣税" width="100"> </el-table-column>
              <el-table-column prop="sfprice" label="实发工资" width="100"> </el-table-column>

            </el-table>

          </el-tab-pane>
        </el-tabs>
      </div>



			<!-- 尾部按钮 -->
			<div class="btn">
				<el-button type="primary" size="small">归档03报表</el-button>
				<el-button type="primary" size="small">新建报表</el-button>
				<el-button  size="small" @click="$router.go(-1)">取消</el-button>
			</div>
			<!-- 尾部按钮 -->
    </el-card>
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
			tableData:[
				{
					name:'雨后有车驶来',
					gh:'9002',
					phone:'13800000002',
					bm:'总裁办',
					zzzt:'在职',
					gjj:'0',
					sb:'0',
					sbqy:'0',
					gjjqy:'0',
					gjjsbqy:'0',
					fljt:'500',
					price:'200',
					kqkk:'0.0175',
					sqhj:'899.9825',
					yks:'0',
					sfprice:'399.9825'
				},
				{
					name:'孙财',
					gh:'111',
					phone:'13800000003',
					bm:'市场部',
					zzzt:'在职',
					gjj:'0',
					sb:'0',
					sbqy:'0',
					gjjqy:'0',
					gjjsbqy:'0',
					fljt:'500',
					price:'20',
					kqkk:'-0.0200',
					sqhj:'540.02',
					yks:'0',
					sfprice:'40.02'
				},
				{
					name:'罗晓晓',
					gh:'1111',
					phone:'13800000004',
					bm:'人事部',
					zzzt:'在职',
					gjj:'0',
					sb:'0',
					sbqy:'0',
					gjjqy:'0',
					gjjsbqy:'0',
					fljt:'500',
					price:'3',
					kqkk:'-0.0900',
					sqhj:'506.09',
					yks:'0',
					sfprice:'6.09'
				},
				{
					name:'文吉星',
					gh:'1001',
					phone:'13400000001',
					bm:'人事部',
					zzzt:'在职',
					gjj:'0',
					sb:'0',
					sbqy:'0',
					gjjqy:'0',
					gjjsbqy:'0',
					fljt:'500',
					price:'5000',
					kqkk:'0.0025',
					sqhj:'10499.9975',
					yks:'944.9997500000001',
					sfprice:'9054.99775'
				},
				{
					name:'巴思慧',
					gh:'1002',
					phone:'13400000002',
					bm:'人事部',
					zzzt:'在职',
					gjj:'0',
					sb:'0',
					sbqy:'0',
					gjjqy:'0',
					gjjsbqy:'0',
					fljt:'500',
					price:'100',
					kqkk:'-0.1000',
					sqhj:'700.1',
					yks:'0',
					sfprice:'200.1'
				},
				{
					name:'乔海',
					gh:'2001',
					phone:'13500000001',
					bm:'总裁办',
					zzzt:'在职',
					gjj:'0',
					sb:'0',
					sbqy:'0',
					gjjqy:'0',
					gjjsbqy:'0',
					fljt:'500',
					price:'7',
					kqkk:'0.0800',
					sqhj:'513.92',
					yks:'0',
					sfprice:'13.92'
				},
				{
					name:'董昊空',
					gh:'2002',
					phone:'13500000002',
					bm:'总裁办',
					zzzt:'在职',
					gjj:'0',
					sb:'0',
					sbqy:'0',
					gjjqy:'0',
					gjjsbqy:'0',
					fljt:'500',
					price:'123',
					kqkk:'0.0075',
					sqhj:'745.9925',
					yks:'0',
					sfprice:'245.9925'
				},
				{
					name:'周乐天',
					gh:'2003',
					phone:'13500000003',
					bm:'财务部',
					zzzt:'在职',
					gjj:'0',
					sb:'0',
					sbqy:'0',
					gjjqy:'0',
					gjjsbqy:'0',
					fljt:'500',
					price:'10',
					kqkk:'-0.0100',
					sqhj:'520.01',
					yks:'0',
					sfprice:'20.01'
				},
				{
					name:'吕勇锐',
					gh:'0001',
					phone:'13600000001',
					bm:'总裁办',
					zzzt:'在职',
					gjj:'0',
					sb:'0',
					sbqy:'0',
					gjjqy:'0',
					gjjsbqy:'0',
					fljt:'500',
					price:'8888',
					kqkk:'-0.0575',
					sqhj:'18276.0575',
					yks:'1722.6057500000002',
					sfprice:'16053.45175'
				},
				{
					name:'袁永安',
					gh:'0002',
					phone:'13600000002',
					bm:'总裁办',
					zzzt:'在职',
					gjj:'0',
					sb:'0',
					sbqy:'0',
					gjjqy:'0',
					gjjsbqy:'0',
					fljt:'500',
					price:'0',
					kqkk:'-0.0000',
					sqhj:'500',
					yks:'0',
					sfprice:'0'
				},
				{
					name:'罗英卓',
					gh:'0003',
					phone:'13600000003',
					bm:'行政部',
					zzzt:'在职',
					gjj:'0',
					sb:'0',
					sbqy:'0',
					gjjqy:'0',
					gjjsbqy:'0',
					fljt:'500',
					price:'0',
					kqkk:'-0.0000',
					sqhj:'500',
					yks:'0',
					sfprice:'0'
				},
				{
					name:'宋高昂',
					gh:'0004',
					phone:'13600000004',
					bm:'人事部',
					zzzt:'在职',
					gjj:'0',
					sb:'0',
					sbqy:'0',
					gjjqy:'0',
					gjjsbqy:'0',
					fljt:'500',
					price:'0',
					kqkk:'-0.0000',
					sqhj:'500',
					yks:'0',
					sfprice:'0'
				},
				{
					name:'师玉堂',
					gh:'0005',
					phone:'13600000005',
					bm:'财务部',
					zzzt:'在职',
					gjj:'0',
					sb:'0',
					sbqy:'0',
					gjjqy:'0',
					gjjsbqy:'0',
					fljt:'500',
					price:'0',
					kqkk:'-0.0000',
					sqhj:'500',
					yks:'0',
					sfprice:'0'
				},
				{
					name:'武高丽',
					gh:'0006',
					phone:'13600000006',
					bm:'技术部',
					zzzt:'在职',
					gjj:'0',
					sb:'0',
					sbqy:'0',
					gjjqy:'0',
					gjjsbqy:'0',
					fljt:'500',
					price:'0',
					kqkk:'-0.0000',
					sqhj:'500',
					yks:'0',
					sfprice:'0'
				},
				{
					name:'任志行',
					gh:'0007',
					phone:'13600000007',
					bm:'运营部',
					zzzt:'在职',
					gjj:'0',
					sb:'0',
					sbqy:'0',
					gjjqy:'0',
					gjjsbqy:'0',
					fljt:'500',
					price:'0',
					kqkk:'-0.0000',
					sqhj:'500',
					yks:'0',
					sfprice:'0'
				},
				{
					name:'瞿光明',
					gh:'0008',
					phone:'13600000008',
					bm:'市场部',
					zzzt:'在职',
					gjj:'0',
					sb:'0',
					sbqy:'0',
					gjjqy:'0',
					gjjsbqy:'0',
					fljt:'500',
					price:'0',
					kqkk:'-0.0000',
					sqhj:'500',
					yks:'0',
					sfprice:'0'
				},
			],
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  margin-top: 20px;
  h3 {
    text-align: center;
    color: #66667f;
  }
}

.el-pagination{
	margin-left: 55%;
}

.btn{
	margin-left: 35%;
}
.btnn{
	margin-left: 95%;
}
</style>
