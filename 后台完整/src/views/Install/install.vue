<template>
  <div>
    <mbx></mbx>
    <!-- 设置 -->
    <el-card class="box-card">
      <div class="card">
        <!-- 标签页 -->
        <el-tabs v-model="activeName">
          <el-tab-pane label="角色管理" name="first">
            <el-button type="primary" size="small" @click="add">新增角色</el-button>
            <!-- 表格 -->
            <el-table :data="tableData" style="width: 100%">
              <el-table-column header-align="center" align="center" label="序号" type="index" width="200px">
              </el-table-column>
              <el-table-column header-align="center" align="center" prop="name" label="名称"> </el-table-column>
              <el-table-column header-align="center" align="center" prop="description" label="描述"> </el-table-column>
              <el-table-column header-align="center" align="center" label="操作">
                <template slot-scope="scope">
                  <el-button type="success">分配权限</el-button>
                  <el-button type="primary" @click="bianji(scope.row)">编辑</el-button>
                  <el-button type="danger" @click="del(scope.row.id)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!-- 表格 -->

            <!-- 分页 -->
            <div class="block">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="parnum.page"
                :page-size="parnum.pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="parnum.total"
              >
              </el-pagination>
              <!-- <span class="demonstration">页数较少时的效果</span>
              <el-pagination layout="prev, pager, next" :total="10"> </el-pagination> -->
            </div>
            <!-- 分页 -->
          </el-tab-pane>

          <el-tab-pane label="公司信息" name="second">
            <el-tag class="tag"
              ><i class="el-icon-warning"></i>
              <p>对公司名称、公司地址、营业执照、公司地区的更新、将使得公司资料被重新审核, 请谨慎修改</p></el-tag
            >

            <!-- 输入框 -->
            <ul>
              <li>
                <h3>公司名称</h3>
                <el-input
                  class="inp"
                  :disabled="true"
                  v-model="input"
                  placeholder="江苏传智播客教育科技股份有限公司"
                ></el-input>
              </li>
              <li>
                <h3>公司地址</h3>
                <el-input
                  class="inp"
                  :disabled="true"
                  v-model="input1"
                  placeholder="北京市昌平区建材城西路金燕龙办公楼一层"
                ></el-input>
              </li>
              <li class="yx">
                <h3>邮箱</h3>
                <el-input class="inp" :disabled="true" v-model="input2" placeholder="bd@itcastcn"></el-input>
              </li>
              <li class="yx">
                <h3>备注</h3>
                <el-input
                  class="inp"
                  type="textarea"
                  :rows="2"
                  placeholder="传智播客官网-好口碑IT培训机构,-一样的教育,不一样的品质"
                  :disabled="true"
                  v-model="input3"
                ></el-input>
              </li>
            </ul>
            <!-- 输入框 -->
          </el-tab-pane>
        </el-tabs>
        <!-- 标签页 -->
      </div>
    </el-card>

		<!-- 添加弹出框 -->
		<el-dialog
		  title="提示"
		  :visible.sync="dialogVisible"
		  width="50%"
		  :before-close="handleClose">
			<!-- 添加的输入框 -->
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="description" label="角色名称">
          <el-input v-model="ruleForm.description">
          </el-input>
        </el-form-item>
        <el-form-item  label="角色描述">
          <el-input v-model="ruleForm.name">

          </el-input>
        </el-form-item>
      </el-form>
			<!-- 添加的输入框 -->
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="ok">确 定</el-button>
		  </span>
		</el-dialog>
		<!-- 添加弹出框 -->

		<!-- 编辑弹出框 -->
		<el-dialog
		  title="编辑弹层"
		  :visible.sync="dialogVisible1"
		  width="50%"
		  :before-close="handleClose">
			<!-- 编辑的输入框 -->
			<el-form :model="ruleForm1" :rules="rules1" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="description" label="角色名称">
          <el-input v-model="ruleForm1.name">
          </el-input>
        </el-form-item>
        <el-form-item  label="角色描述">
          <el-input v-model="ruleForm1.description">

          </el-input>
        </el-form-item>
      </el-form>
			<!-- 编辑的输入框 -->
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible1 = false">取 消</el-button>
		    <el-button type="primary" @click="okxg">确 定</el-button>
		  </span>
		</el-dialog>
		<!-- 编辑弹出框 -->
  </div>
</template>

<script>
import mbx from '@/components/mbx.vue'
import { set,setname,setdel,bj,okbj } from '../api/set'
export default {
  components: {
    mbx
  },
  data() {
    return {
      activeName: 'first', //标签页默认
      // tableData: [
      //   {
      //     id: 1,
      //     name: '系统管理员',
      //     list: '管路整合平台，可以操作企业所有的功能'
      //   },
      //   {
      //     id: 2,
      //     name: '人事经理',
      //     list: '负责整合人事部门'
      //   },
      //   {
      //     id: 3,
      //     name: '人事专员',
      //     list: '只能操作员工菜单'
      //   },
      //   {
      //     id: 4,
      //     name: '薪资专员',
      //     list: '绩效管理'
      //   },
      //   {
      //     id: 5,
      //     name: '员工',
      //     list: '员工'
      //   },
      //   {
      //     id: 6,
      //     name: '1212',
      //     list: '1212'
      //   },
      //   {
      //     id: 7,
      //     name: '212112',
      //     list: '212112'
      //   }
      // ],
      input: '',
      input1: '',
      input2: '',
      input3: '',
      tableData: [],

			parnum:{
				page:1,
				pagesize:3,
				total:0
			},
			dialogVisible:false, //添加弹出框
			dialogVisible1:false, //添加弹出框

			 ruleForm: {
        description: '',
        name: ''
      },
			 rules: {
        description: [
          { required: true, message: '用户不能为空', trigger: 'blur' },
          { min: 3, max: 11, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      },
			 ruleForm1: {
        name: '',
        description: '',
				id1:'',
      },
			 rules1: {
        description: [
          { required: true, message: '用户不能为空', trigger: 'blur' },
          { min: 3, max: 11, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      },
			id:'',
			id1:'',
    }
  },
	methods: {
		handleSizeChange(val) {
			this.parnum.pagesize=val
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
				this.parnum.page=val
        console.log(`当前页: ${val}`);
      },

			getlist(){
				set(this.parnum).then((res) => {
      console.log(res)
      this.tableData = res.data.data.rows
			this.parnum.total=res.data.data.total
    })
			},
       //添加的弹出框
			handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
				//添加按钮事件
			add(){
				this.dialogVisible=true
			},

			//确定的事件
			ok(){
				console.log(this.ruleForm);
				setname(this.ruleForm).then(res=>{
					console.log(res);
					this.getlist()
					this.dialogVisible=false
					this.$message({
          message: '操作成功',
          type: 'success'
        });
				})
			},

			// 删除的事件
			del(val){

				this.$confirm('确认删除该角色嘛?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
					console.log(val);
				this.id=val
				setdel(this.id).then(res=>{
					console.log(res);
				})
					this.getlist()
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
			},

			// 编辑事件
			bianji(val){
				this.dialogVisible1=true
				console.log(val);
				this.ruleForm1.name=val.name
				this.ruleForm1.description=val.description
				this.ruleForm1.id1=val.id
				bj(this.id1).then(res=>{
					console.log(res);
				})
			},

			// 确认编辑
			okxg(){
				console.log(this.ruleForm1);
				okbj(this.ruleForm1).then(res=>{
					console.log(res);
				})
				this.$message({
          message: '操作成功',
          type: 'success'
        });
				this.dialogVisible1=false
				this.getlist()
			}
	},
  created() {
    this.getlist()
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

.tag {
  width: 100%;
  color: #909399;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  display: flex;
  align-items: center;
  background-color: #f4f4f5;
  p {
    margin-left: 20px;
  }
}

ul {
  margin-top: 50px;
  li {
    display: flex;
    align-items: center;
    margin-left: 50px;
    margin-top: 20px;
    h3 {
      font-size: 15px;
      color: #606266;
    }
    .inp {
      width: 400px;
      margin-left: 20px;
      font-size: 13px;
    }
  }
  .yx {
    margin-left: 80px;
  }
}
</style>
