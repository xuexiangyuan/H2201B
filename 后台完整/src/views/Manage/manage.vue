<template>
  <div>
		<mbx></mbx>
    <!-- 权限管理 -->
    <el-card class="box-card">
      <div class="title">
        <p></p>
        <el-button size="small" type="primary" @click="dialogVisible=true">添加权限</el-button>
      </div>
    </el-card>

    <!-- 表格 -->
    <el-card class="box-cardd">
      <div class="titlee">
        <el-table
          :data="tableData"
          style="width: 100%; margin-bottom: 20px"
          row-key="id"
          border

          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        >
          <el-table-column prop="name" label="名称" header-align="center" align="center"> </el-table-column>
          <el-table-column prop="code" label="标识" header-align="center" align="center"> </el-table-column>
          <el-table-column prop="description" label="描述" header-align="center" align="center"> </el-table-column>
          <el-table-column  label="操作" header-align="center" align="center">
						<template slot-scope="scope">
							<el-button type="text">添加</el-button>
							<el-button type="text" @click="bj(scope.row)">编辑</el-button>
							<el-button type="text" @click="del(scope.row)">删除</el-button>
						</template>
					</el-table-column>
        </el-table>
      </div>
    </el-card>
    <!-- 表格 -->


		<!-- 对话框 -->
		<el-dialog
		  title="提示"
		  :visible.sync="dialogVisible"
		  width="50%">
			<!-- 添加的输入框 -->
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="name" label="权限名称">
          <el-input v-model="ruleForm.name">
          </el-input>
        </el-form-item>
        <el-form-item prop="code" label="权限标识">
          <el-input v-model="ruleForm.code">
          </el-input>
        </el-form-item>
        <el-form-item prop="description" label="权限描述">
          <el-input v-model="ruleForm.description">
          </el-input>
        </el-form-item>
        <el-form-item prop="value" label="权限描述">
          <el-switch
					  v-model="ruleForm.value"
					  active-color="#13ce66"
					  inactive-color="#ff4949">
					</el-switch>
        </el-form-item>
      </el-form>

			<!-- 添加的输入框 -->
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="add">确 定</el-button>
		  </span>
		</el-dialog>
		<!-- 对话框 -->

		<!-- 编辑对话框 -->
		<el-dialog
		  title="编辑权限点"
		  :visible.sync="dialogVisible1"
		  width="50%">
			<!-- 编辑的表格 -->
			<el-form :model="ruleForm1" :rules="rules1" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
        <el-form-item prop="name" label="权限名称">
          <el-input v-model="ruleForm1.name">
          </el-input>
        </el-form-item>
        <el-form-item prop="code" label="权限标识">
          <el-input v-model="ruleForm1.code">
          </el-input>
        </el-form-item>
        <el-form-item prop="description" label="权限描述">
          <el-input v-model="ruleForm1.description">
          </el-input>
        </el-form-item>
        <el-form-item prop="value" label="权限描述">
          <el-switch
					  v-model="ruleForm1.value"
					  active-color="#13ce66"
					  inactive-color="#ff4949">
					</el-switch>
        </el-form-item>
      </el-form>
			<!-- 编辑的表格 -->
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="okbj">确 定</el-button>
		  </span>
		</el-dialog>
		<!-- 编辑对话框 -->
  </div>
</template>


<script>
import mbx from '@/components/mbx.vue'
import {authority,authorityadd,authoritydel,authorityput} from '../api/authority'
export default {
	components:{
		mbx,
	},
	data() {
		return {
			// tableData:[
			// 	{
      //     id: 1,
      //     date: '用户管理菜单',
      //     name: '员工管理',
      //     address: 'employees',
			// 		children: [{
      //         id: 31,
      //         date: 'aa',
      //         name: '测试',
      //         address: 'aa'
      //       },
			// 			{
      //         id: 32,
      //         date: 'import',
      //         name: '导入',
      //         address: 'import'
      //     },
			// 			{
      //         id: 33,
      //         date: 'export',
      //         name: '导出',
      //         address: 'export'
      //     },
			// 		]
      //   }, {
      //     id: 2,
      //     date: '公司设置菜单',
      //     name: '公司设置',
      //     address: 'settings'
      //   }, {
      //     id: 3,
      //     date: '权限菜单',
      //     name: '权限管理',
      //     address: 'permissions',

      //   },
			// 	{
      //     id: 4,
      //     date: '社保',
      //     name: '社保',
      //     address: 'social_securitys'
      //   },
			// 	{
      //     id: 5,
      //     date: '审批',
      //     name: '审批',
      //     address: 'approvals'
      //   },
			// 	{
      //     id: 6,
      //     date: '考勤',
      //     name: '考勤',
      //     address: 'attendances',
			// 		children: [{
      //         id: 36,
      //         date: '11',
      //         name: '11',
      //         address: '11'
      //       }
			// 		]
      //   },
			// 	{
      //     id: 7,
      //     date: '工资',
      //     name: '工资',
      //     address: 'salarys'
      //   },
			// 	{
      //     id: 8,
      //     date: '组织架构',
      //     name: '组织架构',
      //     address: 'departments'
      //   },
			// 	{
      //     id: 9,
      //     date: '11',
      //     name: '11',
      //     address: '11'
      //   },
			// 	{
      //     id: 10,
      //     date: '111',
      //     name: '111',
      //     address: '111'
      //   },
			// 	{
      //     id: 11,
      //     date: '222',
      //     name: '222',
      //     address: '222'
      //   },
			// 	{
      //     id: 112,
      //     date: '333',
      //     name: '333',
      //     address: '333'
      //   },
			// 	{
      //     id: 113,
      //     date: '444',
      //     name: '444',
      //     address: '444'
      //   },
			// 	{
      //     id: 114,
      //     date: '555',
      //     name: '555',
      //     address: '555'
      //   },
			// 	],

			tableData:[],
			dialogVisible:false,  //添加对话框
			dialogVisible1:false,  //编辑对话框
			 ruleForm: {
        name: '',
        code: '',
				description:'',
				value:false,
      },
			 ruleForm1: {
        name: '',
        code: '',
				description:'',
				value:true,
				id1:'',
      },
      rules: {
        name: [
          { required: true, message: '用户不能为空', trigger: 'blur' },
          { min: 2, max: 11, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 2,  message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 2,  message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
      },
      rules1: {
        name: [
          { required: true, message: '用户不能为空', trigger: 'blur' },
          { min: 2, max: 11, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 2,  message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 2,  message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
      },
			id:'',
			id1:'',
		}
	},
	methods: {
		hetlist(){
			authority().then(res=>{
				console.log(res);
				this.tableData=res.data.data
			})
		},
		//添加
		add(){
			console.log(1);
			authorityadd(this.ruleForm).then(res=>{
				console.log(res);
				this.$message({
          message: '操作成功',
          type: 'success'
        });
				this.dialogVisible=false
			})
			this.hetlist()
		},

		//删除
		del(val){
			// console.log(val);
			this.id=val.id

			 this.$confirm('确定要删除该数据吗?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
					authoritydel(this.id).then(res=>{
					console.log(res);
			})
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
				this.hetlist()
		},

		//编辑
		bj(val){
			this.dialogVisible1=true
			console.log(val);
			this.ruleForm1.name=val.name
			this.ruleForm1.code=val.code
			this.ruleForm1.description=val.description
			this.ruleForm1.id1=val.id
		},
		//确认编辑
		okbj(){
			console.log(this.ruleForm1);
			authorityput(this.ruleForm1).then(res=>{
				console.log(res);
				this.$message({
          message: '操作成功',
          type: 'success'
        });
				this.dialogVisible1=false
			})
			this.hetlist()
		}
	},
	mounted() {
		this.hetlist()
		// this.add()
	},
}
</script>



<style lang="scss" scoped>
.box-card {
  height: 80px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-cardd {
  margin-top: 20px;
}
</style>
