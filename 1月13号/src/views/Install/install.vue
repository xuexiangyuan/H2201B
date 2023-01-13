<template>
  <div>
		<mbx></mbx>
    <!-- 设置 -->
    <el-card class="box-card">
      <div class="card">
        <!-- 标签页 -->
        <el-tabs v-model="activeName">
          <el-tab-pane label="角色管理" name="first">
            <el-button type="primary" size="small">新增角色</el-button>
            <!-- 表格 -->
            <el-table :data="tableData" style="width: 100%">
              <el-table-column header-align="center" align="center" label="序号" type="index" width="200px">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="name" label="名称"> </el-table-column>
              <el-table-column header-align="center" align="center" prop="list" label="描述"> </el-table-column>
              <el-table-column header-align="center" align="center" label="操作">
                <template>
                  <el-button type="success">分配权限</el-button>
                  <el-button type="primary">编辑</el-button>
                  <el-button type="danger">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 表格 -->

            <!-- 分页 -->
            <div class="block">
              <!-- <span class="demonstration">页数较少时的效果</span> -->
              <el-pagination layout="prev, pager, next" :total="10"> </el-pagination>
            </div>
            <!-- 分页 -->

          </el-tab-pane>

          <el-tab-pane label="公司信息" name="second">
							<el-tag class="tag"><i class="el-icon-warning"></i><p>对公司名称、公司地址、营业执照、公司地区的更新、将使得公司资料被重新审核, 请谨慎修改</p></el-tag>

							<!-- 输入框 -->
								<ul>
									<li>
										<h3>公司名称</h3>
										<el-input class="inp" :disabled="true" v-model="input" placeholder="江苏传智播客教育科技股份有限公司"></el-input>
									</li>
									<li>
										<h3>公司地址</h3>
										<el-input class="inp" :disabled="true" v-model="input1" placeholder="北京市昌平区建材城西路金燕龙办公楼一层"></el-input>
									</li>
									<li class="yx">
										<h3>邮箱</h3>
										<el-input class="inp" :disabled="true" v-model="input2" placeholder="bd@itcastcn"></el-input>
									</li>
									<li class="yx">
										<h3>备注</h3>
										<el-input class="inp" type="textarea" :rows="2" placeholder="传智播客官网-好口碑IT培训机构,-一样的教育,不一样的品质" :disabled="true" v-model="input3"></el-input>
									</li>
								</ul>
							<!-- 输入框 -->
					</el-tab-pane>
        </el-tabs>
        <!-- 标签页 -->
      </div>
    </el-card>
  </div>
</template>

<script>
import mbx from '@/components/mbx.vue'
export default {
	components:{
		mbx,
	},
  data() {
    return {
      activeName: 'first', //标签页默认
      tableData: [
        {
          id: 1,
          name: '系统管理员',
          list: '管路整合平台，可以操作企业所有的功能'
        },
        {
          id: 2,
          name: '人事经理',
          list: '负责整合人事部门'
        },
        {
          id: 3,
          name: '人事专员',
          list: '只能操作员工菜单'
        },
        {
          id: 4,
          name: '薪资专员',
          list: '绩效管理'
        },
        {
          id: 5,
          name: '员工',
          list: '员工'
        },
        {
          id: 6,
          name: '1212',
          list: '1212'
        },
        {
          id: 7,
          name: '212112',
          list: '212112'
        }
      ],
			input:'',
			input1:'',
			input2:'',
			input3:'',
    }
  }
}
</script>

<style lang="scss" scoped>
.box-cardd {
  margin-top: 20px;
}

.block {
  margin-left: 39%;
}

.tag{
	width: 100%;
	color: #909399;
	font-size: 16px;
	height: 40px;
	line-height: 40px;
	display: flex;
	align-items: center;
	background-color: #F4F4F5;
	p{
		margin-left: 20px;
	}
}

ul{
	margin-top: 50px;
	li{
		display: flex;
		align-items: center;
		margin-left: 50px;
		margin-top: 20px;
		h3{
			font-size: 15px;
			color: #606266;
		}
		.inp{
			width: 400px;
			margin-left: 20px;
			font-size: 13px;
		}
	}
	.yx{
		margin-left: 80px;
	}
}

</style>
